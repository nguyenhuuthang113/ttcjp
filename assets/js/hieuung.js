
window.addEventListener("load", function(){
var images = [
    "./assets/images/a.jpg",
    "./assets/images/b.jpg", // Đường dẫn đến hình ảnh thứ hai
    "./assets/images/c.jpg", // Đường dẫn đến hình ảnh thứ ba 
    "./assets/images/d.jpg",
    "./assets/images/e.jpg",
    "./assets/images/f.jpg",
    "./assets/images/g.jpg"
];
var currentIndex = 0;
var imgElement = document.querySelector(".about-banner img");

setInterval(function(){
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}, 2000); // Thay đổi hình ảnh sau mỗi 2 giây (2000ms)
});

// thanh cuộn menu
function toggleCommunityMenu() {
    var communityMenu = document.getElementById("communityMenu");
    communityMenu.classList.toggle("show");
  }
  

