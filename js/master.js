let homePage = document.querySelector(".header")

// Get Arr of imgs
let imageArray = ["img-1.jpg","img-2.jpg","img-3.jpeg","img-5.png","img-6.jpg","img-7.jpg","img-8.jpg"]


setInterval(() => {

    let randomNumber = Math.floor(Math.random()*imageArray.length);

     // Change background image url
    homePage.style.backgroundImage = 'url("imgs/'+ imageArray[randomNumber]+'")';
},2000)


//smoothscrolling
$("nav a").on("click", function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html,body").animate({scrollTop : $(hash).offset().top -100},800);
    }
});

