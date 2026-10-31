# CultureMap VN — Cơ sở thảo luận sản phẩm

> **Tên làm việc:** CultureMap VN  
> **Bối cảnh:** Đồ án tổng hợp Công nghệ phần mềm  
> **Trạng thái:** Giữ ý tưởng sản phẩm, mở lại các quyết định thiết kế

## 1. Mục đích tài liệu

Tài liệu ghi lại ý tưởng cần giữ và những vấn đề cần cùng thảo luận trước khi
thiết kế hệ thống. Tên file được giữ để tiếp tục dùng đường dẫn tài liệu hiện
có; nội dung hiện tại là cơ sở xác định yêu cầu, chưa phải đặc tả kỹ thuật.

Các phương án kiến trúc, stack, cấu trúc code, schema, API, quy trình kỹ thuật,
chỉ tiêu và quy mô dữ liệu từng được đề xuất trước đây không còn được coi là
cơ sở đã lựa chọn. Mọi phương án có thể được xem xét lại dựa trên yêu cầu thực
tế và so sánh có lý do.

## 2. Ý tưởng cốt lõi được giữ lại

Xây dựng một hệ thống giúp người dùng khám phá văn hóa, lịch sử và bản sắc các
địa phương Việt Nam theo tỉnh thành, địa điểm hoặc chủ đề. Nội dung có nguồn
tham khảo và đủ thông tin để người đọc truy ngược nguồn.

Đề tài kết hợp hai mục tiêu học tập:

- Phát triển một sản phẩm phần mềm có nghiệp vụ: quản lý nội dung, dữ liệu,
  nguồn tham khảo và các thao tác sử dụng liên quan.
- Thực hành AI engineering trong sản phẩm: chuẩn bị dữ liệu, tích hợp khả năng
  AI, đánh giá kết quả và cải thiện dựa trên bằng chứng.

Phạm vi phải phù hợp một đồ án tổng hợp. Việc có thể phát triển tiếp trong
tương lai không tạo ra cam kết phải thực hiện toàn bộ ngay trong đồ án này.

## 3. Vấn đề sản phẩm muốn giải quyết

- Thông tin về văn hóa địa phương nằm rải rác, khiến người mới khó bắt đầu
  tìm hiểu hoặc kết nối các thông tin liên quan.
- Người đọc cần biết một thông tin có căn cứ ở đâu và khi nào cần kiểm tra
  thêm, nhất là với dữ kiện lịch sử hoặc nhận định còn có cách diễn giải khác.
- Người dùng có thể muốn tìm hiểu theo mục tiêu và sở thích, thay vì chỉ đọc
  một danh sách nội dung chung.

Đây là các giả thuyết về nhu cầu. Nhóm cần chọn người dùng chính và kiểm tra
giả thuyết bằng trao đổi, quan sát hoặc thử nghiệm phù hợp với nguồn lực.

## 4. Người dùng và trách nhiệm cần làm rõ

| Nhóm liên quan | Nhu cầu hoặc trách nhiệm dự kiến |
|---|---|
| Người khám phá | Tìm, đọc, hiểu và kiểm tra nguồn của nội dung văn hóa địa phương |
| Người quản lý nội dung | Chuẩn bị, thêm, sửa, đối chiếu và quản lý việc hiển thị nội dung |
| Nhóm thực hiện đồ án | Chọn phạm vi, thu thập dữ liệu, xây sản phẩm và đánh giá chất lượng |

Đây là các trách nhiệm nghiệp vụ, chưa quy định mô hình tài khoản hoặc số vai
trò trong phần mềm. Người dùng chính cụ thể, nhu cầu đăng nhập và ranh giới
quyền hạn cần được bàn sau.

Ý tưởng hiện tại không dựa vào một cộng đồng đóng góp kiến thức công khai.
Nhóm chủ động chuẩn bị dữ liệu ban đầu và làm rõ trách nhiệm quản lý nội dung.

## 5. Nội dung văn hóa có thể khai thác

- Di sản, công trình và địa điểm có giá trị văn hóa hoặc lịch sử.
- Lễ hội, phong tục và nghệ thuật truyền thống.
- Làng nghề, nghề thủ công và sản phẩm mang bản sắc địa phương.
- Ẩm thực và đặc sản gắn với câu chuyện, tập quán hoặc lịch sử.
- Nhân vật, sự kiện và mốc thời gian có liên hệ với địa phương.

Chưa chốt địa phương, nhóm chủ đề, số lượng nội dung hoặc mức độ bao phủ. Các
ví dụ trên giúp định hình ý tưởng; phạm vi thực hiện phải được chọn theo nhu
cầu người dùng và khả năng tìm được dữ liệu phù hợp.

## 6. Các khả năng sản phẩm để thảo luận

| Khả năng | Giá trị hướng tới | Trạng thái |
|---|---|---|
| Khám phá theo địa phương, địa điểm và chủ đề | Giúp người dùng bắt đầu tìm hiểu và thu hẹp nội dung | Hướng cốt lõi; cần làm rõ cách sử dụng |
| Đọc nội dung có nguồn | Cho phép hiểu thông tin và truy ngược căn cứ | Hướng cốt lõi; cần chốt cách trình bày nguồn |
| Quản lý nội dung và nguồn | Tạo nghiệp vụ quản trị và duy trì chất lượng dữ liệu | Hướng cốt lõi; cần chốt thao tác và điều kiện |
| Hỗ trợ tìm hiểu bằng AI | Giúp người dùng hỏi hoặc kết nối thông tin dễ hơn | Mục tiêu học tập và sản phẩm; cần chốt bài toán cụ thể |
| Lưu nội dung và bộ sưu tập | Giúp người dùng tổ chức nội dung muốn xem lại | Khả năng cần cân nhắc |
| Gợi ý theo sở thích | Giúp người dùng khám phá nội dung phù hợp | Khả năng cần cân nhắc |
| Trợ lý dùng sở thích hoặc ngữ cảnh | Hỗ trợ một mục tiêu khám phá cụ thể | Khả năng cần cân nhắc |

Chưa cam kết cách thể hiện bằng bản đồ, danh sách hay hình thức tương tác
khác. Cũng chưa mặc định tất cả các khả năng trên đều thuộc phiên bản đồ án.

## 7. Luồng sử dụng dự kiến ở mức sản phẩm

### Chuẩn bị và quản lý nội dung

Nhóm lựa chọn nguồn → biên soạn nội dung → người có trách nhiệm đối chiếu →
đưa thông tin phù hợp tới người dùng → sửa hoặc ngừng hiển thị khi cần.

Cần bàn ai thực hiện từng việc, điều kiện được đưa nội dung ra công khai và
cách ghi nhận các thay đổi. Chưa quy định tên trạng thái, cách nhập dữ liệu
hay quy trình xử lý tự động.

### Khám phá và đọc

Người dùng có mối quan tâm → tìm hoặc chọn địa phương/chủ đề → xem các nội
dung liên quan → đọc chi tiết → mở nguồn để tìm hiểu thêm.

Cần bàn mục tiêu nào quan trọng nhất, thông tin nào cần xuất hiện trước và
thế nào là một phiên khám phá có ích.

### Tìm hiểu với AI

Người dùng nêu câu hỏi hoặc mục tiêu → hệ thống hỗ trợ tìm hiểu dựa trên thông
tin phù hợp → trình bày kết quả và căn cứ → làm rõ giới hạn nếu thiếu thông tin.

Đây là hành vi mong muốn của sản phẩm. Kỹ thuật để thực hiện và cách kiểm
chứng hành vi đó vẫn để mở.

## 8. Dữ liệu và độ tin cậy

Nhóm cần tìm nguồn phù hợp với từng loại dữ kiện, có thể từ cơ quan văn hóa,
bảo tàng, tổ chức chuyên môn hoặc tài liệu học thuật. Chưa chốt danh sách
nguồn, phương pháp thu thập, định dạng hay mô hình lưu trữ.

Các vấn đề cần giải quyết khi xác định yêu cầu:

- Nội dung dựa trên tài liệu nào, đơn vị nào phát hành và được truy cập khi nào?
- Nguồn hỗ trợ những dữ kiện nào trong nội dung biên soạn?
- Ai đối chiếu nội dung, đối chiếu theo tiêu chí gì và ghi nhận kết quả ra sao?
- Làm gì khi các nguồn khác nhau, thông tin thay đổi hoặc không mở lại được nguồn?
- Nhóm được phép sử dụng văn bản, hình ảnh và các tài nguyên tới mức nào?

Việc quản lý và đối chiếu nguồn không đồng nghĩa chứng nhận một thông tin là
sự thật tuyệt đối. Sản phẩm cần thể hiện căn cứ và giới hạn của thông tin phù
hợp với loại nội dung.

## 9. Mục tiêu AI và đánh giá

Nhóm muốn học cách đưa AI vào một sản phẩm thực tế, làm việc với dữ liệu và
đánh giá khả năng hoạt động. RAG, fine-tune, gợi ý và agent là các hướng có thể
xem xét sau khi chọn được bài toán; chưa chọn mô hình hoặc pipeline cụ thể.

Trước khi quyết định kỹ thuật, cần trả lời:

- AI giúp người dùng hoàn thành việc gì?
- Cách làm đơn giản để so sánh là gì?
- Có dữ liệu nào đủ chất lượng cho bài toán đó?
- Kết quả đúng, sai, thiếu hoặc không có căn cứ được xác định thế nào?
- Người dùng nhận được gì khi AI không giải quyết được yêu cầu?
- Nguồn lực tính toán, chi phí và thời gian có phù hợp với nhóm không?

Tiêu chí và dữ liệu đánh giá sẽ được xác định theo bài toán đã chọn. Chưa
cam kết phải huấn luyện hoặc fine-tune model để hoàn thành đồ án.

## 10. Những quyết định đang mở

| Nhóm quyết định | Cần bàn trước khi lựa chọn |
|---|---|
| Người dùng chính | Ai có nhu cầu đủ rõ để tập trung phục vụ? |
| Phạm vi đồ án | Luồng nào phải hoàn thành, luồng nào chưa làm? |
| Dữ liệu | Chọn địa phương, chủ đề, nguồn và quy mô theo căn cứ nào? |
| Nghiệp vụ | Ai làm gì, điều kiện nào cần bảo đảm, có những ngoại lệ nào? |
| Yêu cầu chất lượng | Cần mức độ dễ dùng, đúng đắn, tốc độ và khả năng vận hành ra sao? |
| Kiến trúc | Các trách nhiệm được tổ chức và giao tiếp thế nào để đáp ứng yêu cầu? |
| Công nghệ | Ngôn ngữ, framework, lưu trữ và công cụ nào phù hợp với nhóm? |
| AI | Chọn bài toán, kỹ thuật, dữ liệu và cách đánh giá nào? |
| Triển khai | Chạy ở đâu, phục vụ quy mô nào, chi phí ra sao? |
| Cấu trúc repo | Tổ chức mã nguồn theo các quyết định đã thống nhất thế nào? |
| Minh chứng học thuật | Giảng viên yêu cầu tài liệu gì, nhóm kiểm chứng sản phẩm ra sao? |

## 11. Cách cùng thảo luận và ra quyết định

1. Làm rõ người dùng, vấn đề và giá trị sản phẩm.
2. Xác nhận điều kiện thực hiện: thành viên, thời gian, yêu cầu môn học và ngân sách.
3. Chọn phạm vi, luồng nghiệp vụ và yêu cầu chất lượng.
4. Kiểm tra khả năng có dữ liệu phù hợp.
5. So sánh phương án thiết kế, kiến trúc và công nghệ theo các yêu cầu đó.
6. Cùng chốt quyết định rồi mới tạo cấu trúc triển khai và viết code.

Khi lựa chọn, ghi rõ yêu cầu cần đáp ứng, phương án thay thế, lý do chọn,
đánh đổi và điều kiện cần xem xét lại. Những phần đã bàn có thể được điều
chỉnh khi có bằng chứng mới; thứ tự trên không đòi hỏi phải hoàn tất mọi tài
liệu trước khi thực hiện một thử nghiệm cần thiết.
