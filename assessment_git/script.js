var imageArray =["assets/image1.jpg", "assets/image2.jpg", "assets/image3.jpg"]
var index = 0;

function rotation(){
 document.querySelector("img").setAttribute("src", imageArray[index]);
 index++;
 if (index>= imageArray.length){
     index =0;
 }
}
setInterval(rotation, 3000);