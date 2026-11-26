PDF_NAME := culturemap-vn-report-outline

.PHONY: all pdf diagrams
all: pdf

diagrams:
	node diagrams/plantuml/render.mjs "$(PLANTUML_JAR)"

pdf:
	latexmk -xelatex -interaction=nonstopmode -halt-on-error -file-line-error -jobname=$(PDF_NAME) -outdir=build main.tex
	mkdir -p ../output/pdf
	cp build/$(PDF_NAME).pdf ../output/pdf/$(PDF_NAME).pdf
