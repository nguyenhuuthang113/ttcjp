// // Lấy thẻ chữ Liên hệ và overlay
// var contactLink = document.getElementById(".contactLink");
// var overlay = document.getElementById("overlay");
// var closeButton = document.getElementById("closeButton");

// // Bắt sự kiện click vào chữ Liên hệ
// contactLink.addEventListener("click", function(event) {
//   event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
//   overlay.style.display = "block"; // Hiển thị overlay
// });

// // Bắt sự kiện click vào nút đóng
// closeButton.addEventListener("click", function() {
//   overlay.style.display = "none"; // Ẩn overlay
// });

// Lấy tất cả các thẻ có class là "contactLink"
var contactLinks = document.querySelectorAll(".contactLink");
var overlay = document.getElementById("overlay");
var closeButton = document.getElementById("closeButton");

// Dùng vòng lặp để thêm sự kiện click cho từng thẻ
contactLinks.forEach(function(contactLink) {
  contactLink.addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    overlay.style.display = "block"; // Hiển thị overlay
  });
});

// Bắt sự kiện click vào nút đóng
closeButton.addEventListener("click", function() {
  overlay.style.display = "none"; // Ẩn overlay
});
