function toggleVoteContainer(){
  var voteContainer = document.getElementById("vote-container");
  if(voteContainer.style.display === ""){
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element){
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  element.innerText = likes;
  // var scores = document.getElementsByClassName("score");
  // var score = scores[0];
  // score.style.color = "blue";
}

var dogImages = ["https://i.ytimg.com/vi/-OSSDuMkk70/hqdefault.jpg","http://s16391.pcdn.co/wp-content/uploads/2015/09/funnydogs.jpg","https://malialitman.files.wordpress.com/2014/06/funny-dog-one.jpg"];
var catImages = ["https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2014%2F06%2Fmeow.jpg&w=800&q=85","https://www.incimages.com/uploaded_files/image/970x450/getty_513189787_110007.jpg","https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"];

function changeImage(element){
  var animals=[];

  if(element.id === "cats-carousel"){
    animals = catImages;
  }else{
    animals = dogImages;
  }

  var carousel = document.getElementById(element.id);
  var image = carousel.getElementsByTagName('img')[0];
  var imageUrl = image.getAttribute('src');
  var imageIndex = animals.indexOf(imageUrl);

  if(imageIndex === animals.length - 1){
    imageIndex = 0
  }else{
    imageIndex+= 1;
  }

  imageUrl = animals[imageIndex];
  image.src = imageUrl; 
}
