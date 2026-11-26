// node render.mjs /path/to/plantuml.jar
import { mkdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const jar = process.argv[2] || process.env.PLANTUML_JAR;
if (!jar) throw new Error('Truyền đường dẫn plantuml.jar hoặc đặt PLANTUML_JAR.');
const output = resolve(here, '../output');
const sources = ['chapter3-usecases', 'chapter3-usecases-admin'];
mkdirSync(output, { recursive: true });

function run(command, args) {
  const result = spawnSync(command, args, { cwd: here, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command}: exit ${result.status}`);
}

run(process.env.UML_JAVA_BIN || 'java', ['-Djava.awt.headless=true', '-jar',
  resolve(jar), '-charset', 'UTF-8', '-failfast2', '-tsvg', '-o', output,
  ...sources.map(source => `${source}.puml`)]);
for (const stem of sources) {
  const svg = resolve(output, `${stem}.svg`);
  if (/Syntax Error|Error line|An error has occurred|<a\b/.test(readFileSync(svg, 'utf8'))) {
    throw new Error(`Kiểm tra cú pháp hoặc nhãn: ${stem}`);
  }
  run(process.env.UML_RSVG_BIN || 'rsvg-convert',
    ['-f', 'pdf', '-o', resolve(output, `${stem}.pdf`), svg]);
  process.stdout.write(`${stem}: SVG + PDF vector\n`);
}
