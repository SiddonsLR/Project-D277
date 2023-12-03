// header
function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// carousel
let track =document.querySelector(".carousel_track");
let slides = Array.from(track.children);
let nextBtn = document.querySelector(".carousel_button-right");
let prevBtn = document.querySelector(".carousel_button-left");
 
let slideWidth =slides[0].getBoundingClientRect().width;


// arrange slides 
let setSlidePosition = ( slide, index)=>{
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

let moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

//nextBtn
prevBtn.addEventListener('click', e=>{
  let currentSlide = track.querySelector(".current-slide");
  let prevSlide = currentSlide.previousElementSibling;
  
  moveToSlide(track, currentSlide, prevSlide)
  
})
nextBtn.addEventListener('click' , e=> {
    let currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;
  
    moveToSlide(track, currentSlide, nextSlide)
})


