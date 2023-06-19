let LoliconImage = document.querySelector(".LoliconImage");
let LoliconImages = ["./Assets/0.jpg", "./Assets/1.jpg", "./Assets/2.jpg", "./Assets/3.jpg", "./Assets/4.jpg", "./Assets/5.jpg", "./Assets/6.jpg", "./Assets/7.jpg", "./Assets/8.jpg", "./Assets/9.jpg"]
let NumberOfImage = 0;


function SlideShow() {
    LoliconImage.setAttribute("src", LoliconImages[NumberOfImage]);
    if (NumberOfImage >= 9) {
        NumberOfImage = 0;
    } else {
        NumberOfImage++;
    }
    setTimeout(function() {
        SlideShow();
    }, 3000)
}

SlideShow();