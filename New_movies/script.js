let genre_dafault = document.getElementById("genre_default");
let movie_type = document.querySelectorAll('.type_select')

let action = document.getElementsByClassName('action_movies')[0];
let drama = document.getElementsByClassName('drama_movies')[0];
let scifi = document.getElementsByClassName('scifi_movies')[0];


movie_type.forEach(movie =>{
 
    movie.addEventListener('click',(e) =>{

        let types = ['action', 'drama', 'scifi'];
        document.getElementsByClassName(e.target.id + '_movies')[0].style.display = 'flex';
        for(let i=0 ; i<types.length ; i++) {
            if(e.target.id != 'all' && types[i] != e.target.id){
                document.getElementsByClassName(types[i] + '_movies')[0].style.display = 'none';
                
                
            }
            
            if(e.target.id == 'all') {
                document.getElementsByClassName(types[i] + '_movies')[0].style.display = 'flex';
            }

            
        }
        console.log(e.target.id)
      //  let movieTypeName = e.target.id;
      //  movieTypeName = movieTypeName = ;
       genre_dafault.innerText = movieTypeName;
    })

});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

}


function findMovie(movie) {
  console.log(movie)
    movie = movie.toLowerCase();
    
    let movies_title = document.querySelectorAll('.movie_title');
    movies_title.forEach(m => {
        // console.log(m)
        let txt = m.firstChild.textContent;
        txt = txt.toLowerCase();
        if(txt.includes(movie)) {
            // console.log(m.parentElement);
            m.parentElement.style.display = 'block'
        }
        else {
            m.parentElement.style.display = 'none';
        }
    })

    


}