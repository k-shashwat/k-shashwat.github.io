$(document).ready(function(){
    $('.sidenav').sidenav();
 });

$(".dropdown-trigger").dropdown();




  
function get1(){
    
  const target = document.querySelectorAll('.carousel')[0];
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        document.getElementById("car1").style.transform ="translateX(0)" 
        document.getElementById("car3").style.transform ="translateX(0)" 
      } 
    });
    
  }
  const options = {
      threshold: 0.5,
    }
  const observer = new IntersectionObserver(handleIntersection,options);
  
  observer.observe(target);
  

}

p = 0
j = 0
function get(){
    const newtarget = document.querySelectorAll('.row1')[0];
    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          document.getElementsByClassName("imagecont")[0].style.opacity ="1"
          document.getElementsByClassName("imagecont")[1].style.opacity ="1" 
          setTimeout(() => {
            setTimeout(() => {
              function typeWriter(){
                if (p < personal.length) {
                
                  document.getElementById("personal").innerHTML = document.getElementById("personal").innerHTML + personal.charAt(p);
                  p++;
                  setTimeout(typeWriter, speed);
                }
              }
              function typeWriter1(){
                if (j < coll.length){
                  document.getElementById("coll").innerHTML = document.getElementById("coll").innerHTML + coll.charAt(j);
                  j++;
                  setTimeout(typeWriter1, speed);
                }
              }
                typeWriter();
                typeWriter1();
            }, 500);
          }, 750);
          setTimeout(() => {
            document.getElementById("personal").style.border = "none"
            document.getElementById("coll").style.border = "none"
          }, 800 + 1200 + personal.length*speed + 400);
          setTimeout(() => {
            document.getElementsByClassName("para")[0].style.transform ="translateX(0)" 
          document.getElementsByClassName("para")[0].style.opacity ="1" 
          document.getElementsByClassName("para")[1].style.transform ="translateX(0)" 
          document.getElementsByClassName("para")[1].style.opacity ="1" 
          }, 750 + coll.length*speed + 50 + 400);
        } 
        
      });

      
    }
    const newoptions = {
        threshold: 0.3,
      }
    const observer = new IntersectionObserver(handleIntersection,newoptions);
    
    observer.observe(newtarget);
    
}



var career = 'Careers';
var team = 'Our Team';
var mission = 'Our Mission';
var Default = 'Default';
var speed = 70;
var personal = "Back to the Future";
var coll = "Tere Liye";

b = 0
function get4(){
  const newtarget = document.querySelectorAll('.screen')[0];
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        
        // function typeWriter(){
         
        //   if (b < mission.length) {
          
        //     document.getElementById("mission").innerHTML = document.getElementById("mission").innerHTML + mission.charAt(b);
        //     b++;
        //     setTimeout(typeWriter, speed);
        //   }
            document.getElementsByClassName("scont")[0].style.opacity = "1"
            document.getElementsByClassName("scont")[1].style.opacity = "1"
        // }
        // typeWriter();
        // setTimeout(() => {
          document.getElementById("mission").style.border = "none"
        // }, 800 + mission.length*speed + 400);

      } 
    });
    
  }
  const newoptions = {
      threshold: 0.4,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}
d=0
function get41(){
  const newtarget = document.querySelectorAll('.screen')[1];
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        
        function typeWriter(){
          if (d < Default.length) {
            document.getElementById("teaam").innerHTML = document.getElementById("teaam").innerHTML + Default.charAt(d);
            d++;
            setTimeout(typeWriter, speed);
          }
          
        }
        typeWriter();
        // setTimeout(() => {
        //   document.getElementById("teaam").style.border = "none"
        // }, 800 + 1200 + teaam.length*speed + 400);
        setTimeout(() => {
          document.getElementById("team2").style.opacity = "1"
        }, speed*Default.length);
        for (let i = 0; i < document.getElementsByClassName("face").length; i++) {
          setTimeout(() => {
          const element = document.getElementsByClassName("face")[i];
          element.style.transform = "scale(1)"
          element.style.opacity = "1"
          }, speed*Default.length + 300 + 20*i);
        }
        setTimeout(() => {
          document.getElementById("teaam").style.border = "none"
        }, 800 + Default.length*speed + 400);

      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}
tt=0
function get42(){
  const newtarget = document.querySelectorAll('.screen')[1];
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting ) {
        
        
        function typeWriter(){
          if (tt < career.length) {
            document.getElementById("career").innerHTML = document.getElementById("career").innerHTML + career.charAt(tt);
            tt++;
            setTimeout(typeWriter, speed);
          }
          
        }
        typeWriter();
        setTimeout(() => {
          document.getElementById("career").style.border = "none"
        }, 800 + career.length*speed + 400);
        setTimeout(() => {
          document.getElementById("caree").style.opacity = "1"
        }, speed*Default.length);
        
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}

c=0
teamInit = 0
function get11(){
  const newtarget = document.getElementById("teamcontmain");
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting && teamInit == 0) {
        teamInit++
        function typeWriter(){
          if (c < team.length) {
            document.getElementById("tteam").innerHTML = document.getElementById("tteam").innerHTML + team.charAt(c);
            c++;
            setTimeout(typeWriter, speed);
          }
        }
        typeWriter();
        document.getElementById("teamsub").style.opacity = "1"
        setTimeout(() => {
          document.getElementById("tteam").style.border = "none"
        }, 800 + 1200 + team.length*speed + 400);
        setTimeout(() => {
          for (let x = 0; x < document.getElementsByClassName("teamcard").length -2; x++) {
            const element = document.getElementsByClassName("teamcard")[x];
            setTimeout(() => {
              element.style.opacity = 1
            }, 100*x);
          }

        }, team.length*speed + 200);
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}

function get51(){
  const newtarget = document.getElementById("card-cont");
  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        for (let q = 0; q < document.getElementsByClassName("hcard").length; q++) {
          const element = document.getElementsByClassName("hcard")[q];
          element.style.opacity = "1"
        }
        setTimeout(() => {
          for (let q = 0; q < document.getElementsByClassName("hcard").length; q++) {
            const element = document.getElementsByClassName("hcard")[q];
            element.style.transform = "translateX(0px)"
          }
        }, 200);
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.6,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}

 function tin(x){
  document.getElementsByClassName("tface")[x].style.boxShadow = "0px 0px 0px 180px #e9d6002c"
  document.getElementsByClassName("tname")[x].style.opacity = "0"
  document.getElementsByClassName("tscr2")[x].style.opacity = "1"
}
 function tout(x){
  document.getElementsByClassName("tface")[x].style.boxShadow = "0px 0px 0px 0px #e9d6002c"
  document.getElementsByClassName("tscr2")[x].style.opacity = "0"
  document.getElementsByClassName("tname")[x].style.opacity = "1"
}


function get88(){
  const newtarget = document.querySelectorAll('.parallax-container')[0];
  function handleIntersection(entries) {
    entries.map((entry) => { 
    if (!entry.isIntersecting) {
      
      document.getElementById("nav11").style.backgroundColor ="white"
      for (let s = 0; s < document.getElementsByClassName("links").length; s++) {
        const element = document.getElementsByClassName("links")[s];
        element.style.color = "black"
        }		
        
        for (let s = 0; s < document.getElementsByClassName("dlinks").length; s++) {
        const element = document.getElementsByClassName("dlinks")[s];
        element.style.color = "black"
        }		

    } 
    });
    
  }
  const newoptions = {
    threshold: 0.5	,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
  }


  a=0

function getnew(){
  const newtarget = document.getElementsByClassName("newcont")[0];
  function handleIntersection(entries) {
    entries.map((entry) => {
      
      if (entry.isIntersecting ) {
        header19 = "Back to the future"
        function typeWriter(){
          if (a< header19.length) {
            document.getElementsByClassName("newtxt")[0].innerHTML = document.getElementsByClassName("newtxt")[0].innerHTML + header19.charAt(a);
            a++;
            setTimeout(typeWriter, speed);
          }
          
        }
        typeWriter();
        
          document.getElementsByClassName("grootcont")[0].style.opacity = "1"
          document.getElementsByClassName("newpara")[0].style.opacity = "1"

        setTimeout(() => {
          document.getElementsByClassName("newtxt")[0].style.border = "none"
        }, 800 + header19.length*speed + 1000);
        
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}
abc = 0
function getneww(){
  const newtarget = document.getElementsByClassName("newcont")[1];
  function handleIntersection(entries) {
    entries.map((entry) => {
      
      if (entry.isIntersecting ) {
        
        function typeWriter(){
          if (abc < coll.length) {
            document.getElementsByClassName("newtxt")[1].innerHTML = document.getElementsByClassName("newtxt")[1].innerHTML + coll.charAt(abc);
            abc++;
            setTimeout(typeWriter, speed);
          }
          
        }
        
        typeWriter();
        
          document.getElementsByClassName("grootcont")[1].style.opacity = "1"
          document.getElementsByClassName("newpara")[1].style.opacity = "1"
        setTimeout(() => {
          document.getElementsByClassName("newtxt")[1].style.border = "none"
        }, 800 + coll.length*speed + 1000);
        
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}
abc1 = 0
groot = "We are gRoot"
function getnewww(){
  const newtarget = document.getElementsByClassName("newcont")[2];
  function handleIntersection(entries) {
    entries.map((entry) => {
      
      if (entry.isIntersecting ) {
        
        function typeWriter(){
          if (abc1 < groot.length) {
            document.getElementsByClassName("newtxt")[2].innerHTML = document.getElementsByClassName("newtxt")[2].innerHTML + groot.charAt(abc1);
            abc1++;
            setTimeout(typeWriter, speed);
          }
          
        }
        
        typeWriter();
        
          document.getElementsByClassName("grootcont")[2].style.opacity = "1"
          document.getElementsByClassName("newpara")[2].style.opacity = "1"
        setTimeout(() => {
          document.getElementsByClassName("newtxt")[2].style.border = "none"
        }, 800 + groot.length*speed + 1000);
        
      } 
    });
    
  }
  const newoptions = {
      threshold: 0.8,
    }
  const observer = new IntersectionObserver(handleIntersection,newoptions);
  
  observer.observe(newtarget);
  
}

function Switch(a){
  x = a - 1
  for (let i = 0; i < document.getElementsByClassName("dynscr").length; i++) {
    const element = document.getElementsByClassName("dynscr")[i];
    if(i == x){
      element.style.opacity = "1"
      element.style.display = "flex"
    }else{
      element.style.opacity = "0"
      element.style.display = "none"
    }
  }
  
  bg = document.getElementsByClassName("dyncont")[0]
  switch (x) {
    case 1:
      bg.style.background = "linear-gradient(45deg, #2c3e50, #fd746c)"
      document.getElementById("dyn1").style.color = 'rgba(255, 255, 255, 0.5)'
      document.getElementById("dyn2").style.color = 'white'
      document.getElementById("dyn3").style.color = 'rgba(255, 255, 255, 0.5)'
      break;
    case 2:
      bg.style.background = "linear-gradient(45deg, #0f3443, #34e89e)"
      document.getElementById("dyn1").style.color = 'rgba(255, 255, 255, 0.5)'
      document.getElementById("dyn2").style.color = 'rgba(255, 255, 255, 0.5)'
      document.getElementById("dyn3").style.color = 'white'

      break;
    case 0:
      bg.style.background = "linear-gradient(45deg, #360033, #0b8793)"
      document.getElementById("dyn1").style.color = 'white'
      document.getElementById("dyn2").style.color = 'rgba(255, 255, 255, 0.5)'
      document.getElementById("dyn3").style.color = 'rgba(255, 255, 255, 0.5)'

      break;
    default:
      break;
  }
  
}

Switch(1);
var position = $(window).scrollTop(); 
  


dbool  = false
dbooll  = true
respbool = true
function showrespmenu(){
  if(!respbool){
    document.getElementsByClassName("resp-menu")[0].style.display ="block "
    respbool = true	
  }else{
    document.getElementsByClassName("resp-menu")[0].style.display ="none"
    respbool = false
  }
}
showrespmenu()	
function drop1(){
  if(dbool){
    for (let i = 0; i < document.getElementsByClassName("resp-link drop1").length; i++) {
      const element = document.getElementsByClassName("resp-link drop1")[i];
      element.style.height = "fit-content"
      element.style.opacity = "1"
      element.style.padding = "4px"
      element.style.display = "block"
    }
    dbool = false
  }else{
    for (let i = 0; i < document.getElementsByClassName("resp-link drop1").length; i++) {
      const element = document.getElementsByClassName("resp-link drop1")[i];
      element.style.display = "none "
    }
    dbool = true
  }
}
drop

function drop2(){
  if(dbooll){
    for (let i = 0; i < document.getElementsByClassName("resp-link drop2").length; i++) {
      const element = document.getElementsByClassName("resp-link drop2")[i];
      element.style.height = "fit-content"
      element.style.opacity = "1"
      element.style.padding = "4px"
      element.style.display = "block"
      dbooll = false
    }
  }else{
    for (let i = 0; i < document.getElementsByClassName("resp-link drop2").length; i++) {
      const element = document.getElementsByClassName("resp-link drop2")[i];
      element.style.height = "0px"
      element.style.opacity = "0"
      element.style.padding = "0px"
      element.style.display = "none"
      dbooll = true
    }
  }
}


dbool  = false
dbooll  = true
respbool = true
function showrespmenu(){
  if(!respbool){
    document.getElementsByClassName("resp-menu")[0].style.display ="block "
    respbool = true	
  }else{
    document.getElementsByClassName("resp-menu")[0].style.display ="none"
    respbool = false
  }
}
function drop1(){
  if(dbool){
    for (let i = 0; i < document.getElementsByClassName("resp-link drop1").length; i++) {
      const element = document.getElementsByClassName("resp-link drop1")[i];
      element.style.height = "fit-content"
      element.style.opacity = "1"
      element.style.padding = "4px"
      element.style.display = "block"
    }
    dbool = false
  }else{
    for (let i = 0; i < document.getElementsByClassName("resp-link drop1").length; i++) {
      const element = document.getElementsByClassName("resp-link drop1")[i];
      element.style.display = "none "
    }
    dbool = true
  }
}

function drop2(){
  if(dbooll){
    for (let i = 0; i < document.getElementsByClassName("resp-link drop2").length; i++) {
      const element = document.getElementsByClassName("resp-link drop2")[i];
      element.style.height = "fit-content"
      element.style.opacity = "1"
      element.style.padding = "4px"
      element.style.display = "block"
      dbooll = false
    }
  }else{
    for (let i = 0; i < document.getElementsByClassName("resp-link drop2").length; i++) {
      const element = document.getElementsByClassName("resp-link drop2")[i];
      element.style.height = "0px"
      element.style.opacity = "0"
      element.style.padding = "0px"
      element.style.display = "none"
      dbooll = true
    }
  }
}





$(window).scroll(function() { 
    var scroll = $(window).scrollTop(); 
    if (scroll > position) { 
      document.getElementById("nav11").style.opacity ="0"
      document.getElementById("gotop").style.opacity='1'
      respbool = false
      alert("hey")
      showrespmenu()
      document.getElementsByClassName("dynswitch")[0].style.top = "100px"
      setTimeout(() => {
        document.getElementsByClassName("dynswitch")[0].style.zIndex = "1001"
      document.getElementById("nav11").style.zIndex ="1000" 
      }, 700);     
    } else { 
        document.getElementById("nav11").style.opacity ="1"
        document.getElementById("gotop").style.opacity='0'
        respbool = true
      showrespmenu()
        document.getElementsByClassName("dynswitch")[0].style.zIndex = "999"
        document.getElementsByClassName("dynswitch")[0].style.top = "160px"
        setTimeout(() => {
          document.getElementsByClassName("dynswitch")[0].style.zIndex = "1000"
        document.getElementById("nav11").style.zIndex ="1001" 
        }, 700);  

    } 
    position = scroll; 
}); 



for (let i = 0; i < document.getElementsByClassName("dlinks").length; i++) {
  const element = document.getElementsByClassName("dlinks")[i];
  element.addEventListener("click", function(){
    document.getElementById("nav11").style.opacity ="0";
  });
  
}
for (let i = 0; i < document.getElementsByClassName("footerLink").length; i++) {
  const element = document.getElementsByClassName("footerLink")[i];
  element.addEventListener("click", function(){
    document.getElementById("nav11").style.opacity ="0";
  });
  
}

function gotop(){
  document.getElementById("gotop").style.opacity='0'
}
document.getElementsByTagName("video")[0].controls = true


