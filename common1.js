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
		


	var position = $(window).scrollTop(); 
        $(window).scroll(function() { 
    var scroll = $(window).scrollTop(); 
    if (scroll > position) { 
		document.getElementById("nav11").style.opacity ="0"
		document.getElementById("gotop").style.opacity='1'
      respbool = true
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

function expand1(){
	document.getElementById("linkcont1").style.overflow = "visible";
  }
  function deExpand1(){
	document.getElementById("linkcont1").style.overflow = "hidden";
  }
function expand(){
	document.getElementById("linkcont").style.overflow = "visible";
  }
  function deExpand(){
	document.getElementById("linkcont").style.overflow = "hidden";
  }

  for (let i = 0; i < document.getElementsByClassName("phs").length; i++) {
	  const element = document.getElementsByClassName("phs")[i];
	  document.getElementsByClassName("phs")[i].innerHTML = " 7893616574 <br> 8158065049<br> support@nurturecult.com"
	  
  }