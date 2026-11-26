# Sơ đồ CultureMap VN bằng PlantUML

`plantuml/` chứa nguồn chỉnh sửa, `output/` chứa SVG và PDF vector được sinh
từ nguồn đó. Báo cáo LaTeX nhúng PDF vector; không sửa vị trí nút, chữ hoặc
đường nối trực tiếp trong SVG/PDF sau khi render.

## Quy ước trình bày

- Nền trắng, viền và mũi tên đen, không bóng đổ; font Arial.
- Actor ở ngoài khung hệ thống. Use case đặt tên tiếng Việt, mã ở dòng cuối;
  package gom theo nghiệp vụ. Không dùng include/extend để chỉ thứ tự thao tác.
- Activity dùng cú pháp swimlane, `if`, `repeat`, `start` và `stop` của
  PlantUML; tác vụ ở đúng bên chịu trách nhiệm. Nhánh không hợp lệ phải kết
  thúc hoặc quay lại xử lý, không tiếp tục ghi dữ liệu hay trả kết quả.
- State diagram dùng sự kiện `lowerCamelCase`, điều kiện `[guard]`, tác động
  `/ action`. Tên trạng thái bám theo vòng đời trong Chương 3.
- Mỗi hình được giữ nguyên vẹn trên trang A4, caption nằm dưới; không ghép
  đoạn nhận xét bên cạnh hình. Điều chỉnh độ chi tiết trong `.puml` để hình
  đọc được khi đưa vào báo cáo.
- Dùng Smetana tích hợp và renderer activity của PlantUML; không cần gửi
  mã lên dịch vụ vẽ trực tuyến hoặc cài Graphviz để dựng bộ hình này.

## Các nguồn đã tham khảo về cách vẽ

Workspace `Công nghệ phần mềm BTL`:

- `docs/phase-1/diagrams/plantuml/README.md`: nền trắng, nét đen, grouping,
  actor ngoài boundary, mã nguồn và đầu ra vector.
- `docs/phase-2/diagrams/plantuml/system-use-case.puml`, `uc-gen-03.puml`:
  actor, package, tên/mã use case và cách phân biệt association/include/extend.
- `docs/phase-2/diagrams/plantuml/sim-style.puml`,
  `activity-uc-gen-03.puml`, `activity-uc-sim-01.puml`: style và swimlane,
  rẽ nhánh, vòng lặp, kết thúc khi bị từ chối.
- `docs/phase-2/diagrams/plantuml/state-simulation-run.puml`,
  `state-account.puml`: sự kiện, guard, action và nội dung bên trong state.
- `docs/phase-2/uml-conventions.md`: cách đặt tên và giữ nhất quán ngữ nghĩa.
- `docs/phase-3/diagrams/plantuml/design-style.puml`: cấu hình dùng chung.
- Các script `render-*.mjs`: dựng cục bộ từ `.puml` sang SVG rồi PDF.

Chỉ vận dụng cách trình bày; nội dung và mã nghiệp vụ của các sơ đồ mới bám theo Chương 3 hiện tại.

## Dựng lại

Cần Node.js, Java, PlantUML JAR và `rsvg-convert`. Bộ hình hiện được dựng
bằng PlantUML 1.2026.8. Không đưa JAR hoặc đường dẫn công cụ riêng của một
máy vào Git. Từ `report/`:

```sh
make diagrams PLANTUML_JAR=/duong/dan/plantuml.jar
make
```

Có thể đặt `UML_JAVA_BIN`, `UML_RSVG_BIN` nếu chương trình không nằm trong
PATH. `make` thông thường sử dụng các PDF sơ đồ đã có, không cần JAR.
Sau khi sửa nguồn, dựng lại cả SVG/PDF và kiểm tra hình trong báo cáo.

## Danh mục hiện tại

Báo cáo dùng hai sơ đồ PlantUML `chapter3-usecases*.puml` ở phần use case.
Các hình trạng thái và hoạt động được lưu trong `report/assets/chapter3/`.
