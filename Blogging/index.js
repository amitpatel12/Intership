let likes = document.getElementById('count_like');
let dislikes = document.getElementById('count_dislike');
let rating = document.getElementById('num');
let rate = document.getElementById('rate');
totalRating = rating.innerText;
// console.log(likes,dislikes,nums);

function like(){
    rate.style.display = 'block';
    totalLikes = likes.innerText;
    ++totalRating;
    ++totalLikes;
    likes.innerText = totalLikes;
    rating.innerText = totalRating;

}


function disLike(){
    rate.style.display = 'block';
    totalDisLikes = dislikes.innerText;
    ++totalDisLikes;
    ++totalRating;
    dislikes.innerText = totalDisLikes;
    rating.innerText = totalRating;
}