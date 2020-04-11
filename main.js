const  carouselSlide =document.querySelector('.carousel-slide');
const  carouselImage =document.querySelectorAll('.carousel-slide  img');
var prev= document.getElementById('prevBtn');
var next= document.getElementById('nextBtn');
var r1 =document.getElementById('r1');
var r2 =document.getElementById('r2');
var r3 =document.getElementById('r3');
var r4 =document.getElementById('r4');
var r5 =document.getElementById('r5');
r1.onclick=function () {
    console.log('1');
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    carouselSlide.style.transform='translateX('+(-size*1)+'px)';

};

r2.onclick=function ()
{
    console.log('2');
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    carouselSlide.style.transform='translateX('+(-size*2)+'px)';
};
r3.onclick=function ()
{
    console.log('3');
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    carouselSlide.style.transform='translateX('+(-size*3)+'px)';
};
r4.onclick=function ()
{
    console.log('4');
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    carouselSlide.style.transform='translateX('+(-size*4)+'px)';
};
r5.onclick=function ()
{
    carouselSlide.style.transition="transform 0.4s ease-in-out";
    carouselSlide.style.transform='translateX('+(-size*5)+'px)';
};

let i=1;
const size=carouselImage[0].clientWidth;
carouselSlide.style.transform='translateX('+(-size*i)+'px)';


  // Here put the number of times you want to auto submit
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
