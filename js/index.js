//change nav bar color
let about = $("#abouts").offset().top;
let services = $("#servicess").offset().top;
let work = $("#works").offset().top;
let clients = $("#clientss").offset().top;
let blog = $("#team").offset().top;
let contact = $("#contacts").offset().top;
$(document).on('scroll',function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll > about -50){
        $(".navbar").css('backgroundColor',`rgba(0,0,0,0.878)`);
        $(".nav-link").css('color', 'white');
    }
    if(windowScroll < about ){
        $(".navbar").css('backgroundColor','transparent');
        $(".nav-link").css('color','white');
    }
    if(windowScroll > services -30){
        $(".navbar").css('backgroundColor','teal')
    }
    if(windowScroll > clients -30){
        $(".navbar").css('backgroundColor','#09c')
    }
    if(windowScroll > work){
        $(".navbar").css('backgroundColor','darkslategray')
    }
    if(windowScroll > blog -30){
        $(".navbar").css('backgroundColor','lightseagreen')
    }
    if(windowScroll > contact){
        $(".navbar").css('backgroundColor',`rgb(23, 60, 23)`)
    }
})
///choose color for website
let boxColor = $('.color');
for (let i = 0; i < boxColor.length; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    boxColor.eq(i).css('backgroundColor', `rgb(${red},${green},${blue})`);
}


/////
boxColor.click(function(e){
let bgColor = $(e.target).css('backgroundColor');
$('.change').css('color',bgColor)
})
///change img
$(".img-item").click(function(e){
let imgSrc = $(e.target).attr('src');
    $('.header').css('backgroundImage', `url(${imgSrc}`)
})

//to hide boxcolor
$("#icon").on('click',function(){
    let widthBox = $(".sidebox").outerWidth();
    if ($('#sidebar').css('left')== '0px'){
        $("#sidebar").animate({left:`-${widthBox}`}, 1500);
    }
    else{
        $("#sidebar").animate({left:'0px'}, 1000)
    }
    
})