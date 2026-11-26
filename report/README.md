# Báo cáo CultureMap VN

Nguồn XeLaTeX của báo cáo môn CO3013, lớp L01.

## Nội dung hiện tại

- Chương 1 trình bày bài toán, mục tiêu, người dùng và phạm vi đề tài.
- Chương 2 trình bày cơ sở lý thuyết và khảo sát bốn hệ thống liên quan.
- Chương 3 trình bày phạm vi, FR, BR, NFR, use case, vòng đời trạng thái và quy trình kiểm chứng.
- Chương 5 xác định phạm vi hỏi đáp bằng RAG và thử nghiệm fine-tuning quy mô nhỏ.

## Sửa và biên dịch

- `main.tex` ghép các chương từ `sections/`.
- `metadata.tex` và `frontmatter.tex` chứa thông tin môn và nhóm.
- `assets/` chứa ảnh của báo cáo và nguồn ảnh khảo sát.
- `diagrams/` chứa nguồn PlantUML và hình vector của các sơ đồ use case.

Chạy từ thư mục gốc của repo với XeLaTeX và `latexmk`.

```sh
make -C report
```

Kết quả nằm tại [báo cáo PDF](../output/pdf/culturemap-vn-report-outline.pdf).
Xem [hướng dẫn PlantUML](diagrams/README.md) khi sửa sơ đồ use case.
