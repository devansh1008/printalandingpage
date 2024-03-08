console.log("hellow developers");

var circle = document.querySelector("#circle");

window.addEventListener("mousemove",function(dets){
   // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
   // console.log(dets.clientX,dets.clientY)
   gsap.to(circle,{
      x: dets.clientX,
      y: dets.clientY,
      duration: .3,
      ease: Expo
   })
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 document.querySelector('#c1').addEventListener('click',function(){
    document.getElementById("c1").style.backgroundColor = "black";
    document.getElementById("c1").style.scale = "1.5";
    document.getElementById("container1").style.display = "block";
   //  document.querySelector(".container").style.transition = "all 2s";
    //------------------------------------------------------
    document.getElementById("c3").style.backgroundColor = "";
    document.getElementById("c3").style.scale = "";
    document.getElementById("container3").style.display = "none"
    //-----------------------------------------------------
    document.getElementById("c2").style.backgroundColor = "";
    document.getElementById("c2").style.scale = "";
    document.getElementById("container2").style.display = "none"
 })

 document.getElementById("c2").addEventListener("click",function(){
    document.getElementById("container2").style.display = "block";
    document.getElementById('c2').style.background = "black";
    this.style.scale = "1.5";
   //  document.querySelector(".container").style.transition = "all 2s";

    //------------------------------------------------------
    document.getElementById("c1").style.backgroundColor = "";
    document.getElementById("c1").style.scale = "";
    document.getElementById("container1").style.display = "none"
    //------------------------------------------------------
    document.getElementById("c3").style.backgroundColor = "";
    document.getElementById("c3").style.scale = "";
    document.getElementById("container3").style.display = "none"

 })

 document.getElementById("c3").addEventListener('click',function(){
    document.getElementById("container3").style.display = "block";
    document.getElementById("c3").style.scale = "1.5";
    document.getElementById('c3').style.background = "black";
   //  document.querySelector(".container").style.transition = "all 2s";

    //--------------------------------------------------------
    document.getElementById("c1").style.backgroundColor = "";
    document.getElementById("c1").style.scale = "";
    document.getElementById("container1").style.display = "none";
    //-------------------------------------------------------
    document.getElementById("c2").style.backgroundColor = "";
    document.getElementById("c2").style.scale = "";
    document.getElementById("container2").style.display = "none";

 })

 //====================================================================
 //=======----Nav_Button_Effect---=====================================
 document.getElementById("nbtn").addEventListener('mousemove',function(){

    gsap.to(".ci1,.ci2",{
        left: "30%",
        duration: .4,
    })
    gsap.to(".ci2",{
      scale: 12,
      delay: .6,
       left: "60%"
  })

 })
 document.querySelector("#nbtn").addEventListener('mouseleave',function(){

   gsap.to(".ci1,.ci2",{
      left: "0%",
      duration: .4,
      scale: 0,
  })
  gsap.to(".ci2",{
    scale: 0,
    delay: .6,
    left: "-10%"
})
})

 var mbtn = document.querySelector(".mbtn").addEventListener('mouseover',function(){
   gsap.to(".ci3",{
      left: "60%",
      duration: .4,
   })
  gsap.to(".ci3",{
      scale:15,
      delay:.3,
      duration:.5,
   })
})

// =================================================
var mywindow;
document.getElementById('cir3').addEventListener('click',function(){
   this.style.display = "none";
     document.querySelector(".video img").style.display = "none";
    mywindow = window.open("https://garantiwebdesign.com/wordpress/printa/wp-content/uploads/2022/10/templatemonster2.mp4","","width=500px,height=500px,left=500px,top=500px");

})
// document.getElementById('').addEventListener('click',function(){
//      mywindow.window.close();
//     })
//======================================================================

 document.querySelector('#plus1').addEventListener('click',function(){
   document.getElementById('text1').style.display = "block";
   document.getElementById('plus1').style.transform = 'rotate(40deg)';
  
})

document.getElementById('plus1').addEventListener('dblclick',function(){
   document.getElementById('text1').style.display = "none";
   document.getElementById('plus1').style.transform = 'rotate(0deg)';
  
})
//------------------------------------------
document.querySelector('#plus2').addEventListener('click',function(){
   document.getElementById('text2').style.display = "block";
   document.getElementById('plus2').style.transform = 'rotate(40deg)';
  
})

document.getElementById('plus2').addEventListener('dblclick',function(){
   document.getElementById('text2').style.display = "none";
   document.getElementById('plus2').style.transform = 'rotate(0deg)';
  
})
//------------------------------------------
document.querySelector('#plus3').addEventListener('click',function(){
   document.getElementById('text3').style.display = "block";
   document.getElementById('plus3').style.transform = 'rotate(40deg)';
  
})

document.getElementById('plus3').addEventListener('dblclick',function(){
   document.getElementById('text3').style.display = "none";
   document.getElementById('plus3').style.transform = 'rotate(0deg)';
  
})
//--------------------------------------------
document.querySelector('#plus4').addEventListener('click',function(){
   document.getElementById('text4').style.display = "block";
   document.getElementById('plus4').style.transform = 'rotate(40deg)';
  
})

document.getElementById('plus4').addEventListener('dblclick',function(){
   document.getElementById('text4').style.display = "none";
   document.getElementById('plus4').style.transform = 'rotate(0deg)';
  
})
//---------------------------------------------
document.querySelector('#plus5').addEventListener('click',function(){
   document.getElementById('text5').style.display = "block";
   document.getElementById('plus5').style.transform = 'rotate(40deg)';
  
})

document.getElementById('plus5').addEventListener('dblclick',function(){
   document.getElementById('text5').style.display = "none";
   document.getElementById('plus5').style.transform = 'rotate(0deg)';
  
})

//=========================  Animation Part     ===============================================
function mainPageAnimation(){
   gsap.from("#main #container1",{
      y: "-10%",
      duration:1,
      opacity:.2,
      
   })
   gsap.from("nav",{
      y: "-50%",
      duration:1,
      opacity:.2,
      delay:.1,
   })
   gsap.from("nav #right",{
      y: "-50%",
      duration:1.5,
      opacity:.2,
      delay:.1,
   })
}
//------------------main2_i---------------------------------
function main2_i(){
   gsap.from('#main2_i .row',{
      scale: .8,
      duration: .3,
      opacity: .5,
      scrollTrigger: {
         trigger: '.row',
         scroll: '#main2_i',
         scrub: 3,
         // markers: true,
         start: 'top 90%',
         end: 'top 90%',
         
      }
   },"same1")
   gsap.from('#main2_i .row3 ul li',{
      scale: .8,
      duration: .3,
      opacity: .5,
      ease: Power1,
      scrollTrigger: {
         trigger: '.row3 ul ',
         scroll: '#main2_i',
         scrub: 3,
         // markers: true,
         start: 'top 90%',
         end: 'top 90%',
         stagger: 2,
      }
   },"same1")
}

//------------------  main2_ii  ----------------------------------------

function main2_ii(){
   var tl = gsap.timeline({
      scrollTrigger:{
         trigger: '.Mleft',
         scroll: '#main2_ii',
         start: 'top 80%',
         end : 'top 80%',
         // markers: true,
         scrub: 5,
         pin: true,
      }
   })
   
   tl.
     from('#main2_ii .Mleft img',{
      // left: '-30%',
      opacity: .5,
      scale: .5,
      ease: Power1,
      delay: .5,
    },'same2')
   .from('#main2_ii .Mright .text',{
      // right: '-30%',
      opacity: .3,
      scale: .5,
      ease: Power1,   
      delay: .5,
   },'same2')
   
   .from('.Mleft .cir1,.cir2',{
      top: '50%',
      left: '50%',
      ease: Power1,
      duration: 2,
   },'same2')
}

//-----------------main2_iii------------------------------
function main2_iii(){
   var tl1 = gsap.timeline({
      scrollTrigger: {
         trigger: '#main2_iii .row .box',
         scroll: '#main2_iii',
         start: 'top 70%',
         end : 'top 80%',
         scrub: 5,
         pin: true,
         // markers: true,
      }
   })
   
   tl1
    .from('#main2_iii .content h2',{
      opacity:.0,
      ease: Power1,
      stagger: 1,
      duration:3,
     },'same3')
     .from('#main2_iii .content p',{
      opacity:.0,
      ease: Power1,
      stagger: 1,
      duration:3,
     },'same3')
     .from('#main2_iii .row .box',{
      opacity:.0,
      ease: Power1,
      stagger: 1,
      duration:3,
     },'same3')
     .from('#main2_iii .row .box',{
      scale: .8,
      ease: Power1,
      stagger: 1,
      duration:3,
     },'same3')
   
}
//---------------------main2_iv----------------------------
function main2_iv(){
   var tl2 = gsap.timeline({
      scrollTrigger: {
         trigger: '#main2_iv ',
         scroll: 'main2_iv',
         start: 'top 50%',
         end: 'top 55%',
         scrub: 5,
         // markers: true,
         pin: true,
      }
   })
   tl2
   .from('#main2_iv h1',{
      y: '-55%',
      opacity: .0,
      ease: Power1,
      delay:.5,
   },'same4')
   .from('#main2_iv p',{
      y: '-55%',
      opacity: .0,
      ease: Power1,
      delay:.5,
   },'same4')
     .from('#main2_iv .cir1,.cir2',{
      ease: Power1,
      top: '5%',
      left: '50%',
      stagger: 0,
      opacity: 0,
   },'same4')
}
//--------------------main2_v--------------------------
function main2_v(){
   var tl3 = gsap.timeline({
      scrollTrigger: {
         trigger: '#main2_v .box',
         scroll: '#main2_v',
         start: 'top 70%',
         end : 'top 70%',
         // markers: true,
         pin: true,
         scrub: 2,
      }
   })
   tl3
      .from('#main2_v .box',{
         scale: .5,
         opacity: 0,
          ease: Power1,
          stagger: .2,
          x: '-30%'
      })
}
//-----------------main2_vi----------------------------
function main2_vi(){
   var tl4 = gsap.timeline({
      scrollTrigger: {
         trigger: '#main2_vi .box',
         scroll: '#main2_vi',
         start: 'top 70%',
         end: 'top 70%',
         // markers: true,
         pin: true,
         scrub: 5,
      }
   })
   tl4
     .from('#main2_vi .top_t',{
      x: '-10%',
      ease: Power1,
      stagger: .1,
      opacity: 0,
     },'same5')
      .from('#main2_vi .box ',{
         scale:0,
         opacity:0,
         ease: Power2,
         stagger: .2,
         // delay: .5,
      },'same5')
      .from('#main2_vi .box .text',{
         left: '10%',
         ease: Power1,
         stagger: .2,
      })
}
//---------------main2_vii-------------------------
gsap.from('#main2_vii',{
   scale:0,
   opacity:.5,
   scrollTrigger: {
      trigger: "#main2_vii .vii_inner",
      scroll: "#main2_vii",
      start: "top 80%",
      end: 'top 80%',
      // markers: true,
      pin: true,
      scrub: 2,
   }
})
//-----------------main2_viii-------------------------
function main2_viii(){
   var tl5 = gsap.timeline({
      scrollTrigger: {
         trigger: "#main2_viii ",
         scroll: "#main2_vii",
         start: "top 80%",
         end: 'top 80%',
         // markers: true,
         pin: true,
         scrub: 2,
      }
   })
   tl5
      .from('#main2_viii .circle1,.circle2',{
         top: '10%',
         left: '50%',
         opacity: 0,
         ease: Power1,
      },'same6')
    tl5.from('#main2_viii h2',{
         x: '-20%',
         opacity: 0,
         ease: Power1,
      },'same6')
      tl5.from('#main2_viii p',{
         x: '-20%',
         opacity: 0,
         ease: Power1,
      },'same6')
}
//----------------main2_ix--------------------------------
gsap.from('#main2_ix img',{
   scale:0,
   opacity:.5,
   stagger: .3,
   scrollTrigger: {
      trigger: "#main2_ix .img_container",
      scroll: "#main2_ix",
      start: "top 80%",
      end: 'top 80%',
     // markers: true,
      pin: true,
      scrub: 2,
   }
})
//------------main2_x-----------------------
gsap.from('#main2_x .container',{
   scale:0,
   opacity:.5,
   stagger: .3,
   y: '200%',
   delay: .5,
   scrollTrigger: {
      trigger: "#main2_x ",
      scroll: "#main2_x",
      start: "top 80%",
      end: 'top 80%',
      // markers: true,
      pin: true,
      scrub: 2,
   }
})
//============================================================================================
mainPageAnimation();
main2_i();
main2_ii();
main2_iii();
main2_iv();
main2_v();
main2_vi();
main2_viii();