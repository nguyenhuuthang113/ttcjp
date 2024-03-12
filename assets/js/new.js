// Lấy đối tượng hình ảnh
var bannerImage = document.getElementById("new1");
var bannerImage1 = document.getElementById("new2");
var bannerImage2 = document.getElementById("new3");

// Mảng chứa đường dẫn của các hình ảnh
var imagePaths = [
  "./new/1/a.jpg",
  "./new/1/b.jpg",
  "./new/1/c.jpg",
  "./new/1/d.jpg"
];
var imagePaths1 = [
    "./new/2/a.jpg",
    "./new/2/b.jpg",
    "./new/2/c.jpg",
    "./new/2/d.jpg",
    "./new/2/e.jpg",
    "./new/2/f.jpg",
    "./new/2/g.jpg",
    "./new/2/h.jpg",
    "./new/2/i.jpg",
    "./new/2/j.jpg",
    "./new/2/k.jpg",
    "./new/2/l.jpg",
    "./new/2/m.jpg",
  ];
  var imagePaths2 = [
    "./new/3/a.jpg",
  ];

// Biến đếm thứ tự hình ảnh hiện tại
var currentIndex = 0;
var currentIndex1 = 0;
var currentIndex2 = 0;

// Hàm chuyển đổi hình ảnh
function changeImage() {
  currentIndex = (currentIndex + 1) % imagePaths.length; // Tăng biến đếm lên và lặp lại nếu vượt quá số lượng hình ảnh
  bannerImage.src = imagePaths[currentIndex]; // Thay đổi đường dẫn của hình ảnh

  currentIndex1 = (currentIndex1 + 1) % imagePaths1.length; // Tăng biến đếm lên và lặp lại nếu vượt quá số lượng hình ảnh
  bannerImage1.src = imagePaths1[currentIndex1]; // Thay đổi đường dẫn của hình ảnh

  currentIndex2 = (currentIndex2 + 1) % imagePaths2.length; // Tăng biến đếm lên và lặp lại nếu vượt quá số lượng hình ảnh
  bannerImage2.src = imagePaths2[currentIndex2]; // Thay đổi đường dẫn của hình ảnh
}

// Gọi hàm chuyển đổi hình ảnh sau mỗi khoảng thời gian 2 giây
setInterval(changeImage, 2000);
