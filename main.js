const  carouselSlide =document.querySelector('.carousel-slide');
const  carouselImage =document.querySelectorAll('.carousel-slide  img');
var prev= document.getElementById('prevBtn');
var next= document.getElementById('nextBtn');
let i=1;
const size=carouselImage[0].clientWidth;
carouselSlide.style.transform='translateX('+(-size*i)+'px)';


  //Here put the number of times you want to auto submit
(function submit(){
    next.click();
    setTimeout(submit, 3000);   //Each second
})();
next.addEventListener('click',()=>
{
    if(i>=carouselImage.length-1)return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    i++;
    carouselSlide.style.transform='translateX('+(-size*i)+'px)';
});

prev.addEventListener('click',()=>
{
    if(i<=0)return;
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    i--;
    carouselSlide.style.transform='translateX('+(-size*i)+'px)';
});
carouselSlide.addEventListener('transitionend',()=>{
   if(carouselImage[i].id==='lastClone')
    {
        carouselSlide.style.transition="none";
        i=carouselImage.length-2;
        carouselSlide.style.transform='translateX('+(-size*i)+'px)';
    }
    if(carouselImage[i].id==='firstClone')
    {
        carouselSlide.style.transition="none";

        i=carouselImage.length-i;
        carouselSlide.style.transform='translateX('+(-size*i)+'px)';
    }
});
