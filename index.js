if(document.body.style.width<=550){
var ele=document.querySelector(".menu-icon");
ele.addEventListener("click",function(event){
    let dis=document.querySelector(".menu");
    if(dis.style.display==="" || dis.style.display==="none"){
        dis.style.display='inline-block';
    }
    else{
        dis.style.display='none';
    }
});
}

document.getElementById('scrollButton1').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box2').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});

document.getElementById('scrollButton2').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box3').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});
document.getElementById('scrollButton3').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box4').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});
document.getElementById('scrollButton4').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.cont').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});








// document.querySelector(".menu #scrollButton1").addEventListener('click', function() {
//     window.scrollTo({
//         top: 750, // The vertical pixel value to scroll to
//         behavior: 'smooth' // Optional for smooth scrolling
//     });
// });
document.querySelector('.menu #scrollButton1').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box2').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});

document.querySelector('.menu #scrollButton2').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box3').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});
document.querySelector('.menu #scrollButton3').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.box4').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});
document.querySelector('.menu #scrollButton4').addEventListener('click', function() {
    // Scroll to the target section
    document.querySelector('.cont').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});

// if(document.body.style.width>550){
//     let dis=document.querySelector(".navbar ul");
//     if(dis.style.display==="inline-block"){
//         dis.style.display='';
//     }
// }