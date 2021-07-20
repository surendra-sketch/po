 


     
var btn =document.querySelector('.menu-btn');

btn.addEventListener('click',function(){
document.querySelector('.main-menu').classList.toggle('show');
// document.querySelector(".menu-btn").style.display = "none";
// document.querySelector(".menu-btnn").style.display = "block";

});


var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function mynav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
     }
     else{
         navbar.classList.remove("sticky");
     }
}

window.onscroll = function(){ mynav()};

























// var ji = document.querySelector(".menu-btn");
// ji.addEventListener('onmouseover', ()=>{
//     console.log("this is mouse over function")
// });


// var btnn = document.querySelector(".menu-btnn");
// btnn.addEventListener('click',function(){
//     document.querySelector('.main-menu').classList.toggle('close');
//     document.querySelector(".menu-btn").style.display = "block";
// document.querySelector(".menu-btnn").style.display = "none";

// });


// document.querySelector('.menu-btn').addEventListener
// ('click', () =>document.querySelector('.main-menu')
// .classList.toggle('show'));
 