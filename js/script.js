var getImage = document.querySelector(".imageSlider img");
const getPrevButton = document.querySelector(".previous");
const getNextButton = document.querySelector(".next");

let i = 0;

let imageArray = [
    "../images/imagecarousel/beerpineapple.jpg", 
    "../images/imagecarousel/carepackage.jpg", 
    "../images/imagecarousel/doughnutandcider.jpg",
    "../images/imagecarousel/doughnutassortment.jpg",
    "../images/imagecarousel/puginvest.jpg",
    "../images/imagecarousel/scrabble.jpg"
    ];

function previous() {
    // alert("This button is working!");
    i--;
    if (i < 0) {
        i = imageArray.length - 1;
    }

    getImage.src = imageArray[i];
    console.log(i);
}

function next() {
    // alert("This button is also working!");

    i++;
    if (i >= imageArray.length) {
        i = 0;
    }

    getImage.src = imageArray[i];

}

getPrevButton.addEventListener("click", previous);
getNextButton.addEventListener("click", next);
