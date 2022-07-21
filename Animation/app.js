
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".header").css("background" , "black");
        }
        else{
            $(".header").css("background" , "transparent");  	
        }
    })
  })

let video = document.getElementById("main_video")

// video.onmouseover = (e) =>{
//     e.target.setAttribute('autoplay','')
// console.log(e.target);
// }