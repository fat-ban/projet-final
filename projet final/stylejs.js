
const toggleButton = document.querySelector('.toggle-button')
const navbarLink =document.querySelector('.navbar-links')
toggleButton.addEventListener('click', () => {
   navbarLink.classList.toggle('active')
})
/////////////////////
let ulChoose = document.querySelectorAll('.chooseDiv li')
let divChoose = document.querySelectorAll('#divChoose')
let divChooseEducation  = document.querySelector('.bestEducation ')
let liChooseEducation = document.querySelector('.bestEducation li')
let listIcon = document.querySelectorAll('.chooseDiv .icon')


//for(let i =0;i<ulChoose.length;i++){
   // ulChoose[i].addEventListener('click',function(){
        //if(divChoose[i].style.display = "none"){
            //divChoose[i].style.display = "flex"
        //}
        
   // })
//}
ulChoose[0].addEventListener('click',function(){
    
       if(divChooseEducation.style.display = "none"){
        divChooseEducation.style.display = "flex"
        listIcon[0].style.color = '#f5a425'
      listIcon[1].style.color = 'white'
      listIcon[2].style.color = 'white'
        divChoose[0].style.display = "none"
      
        divChoose[1].style.display = "none"
       }
      
    })

    ///
    ulChoose[1].addEventListener('click',function(){
    
        if(divChoose[0].style.display = "none"){
         divChoose[0].style.display = "flex"
         listIcon[1].style.color = '#f5a425'
         listIcon[0].style.color = 'white'
      listIcon[2].style.color = 'white'
         divChooseEducation.style.display = "none"

         divChoose[1].style.display = "none"
        }
 
         
     })
     ///
     ulChoose[2].addEventListener('click',function(){
    
        if(divChoose[1].style.display = "none"){
            divChoose[1].style.display = "flex"
            listIcon[2].style.color = '#f5a425'
            listIcon[1].style.color = 'white'
           listIcon[0].style.color = 'white'
            divChooseEducation.style.display = "none"
            divChoose[0].style.display = "none"
        }
 
         
     })


  /* if(divChooseEducation.display='flex'){
      listIcon[0].style.color = 'red'
      listIcon[1].style.color = 'white'
      listIcon[2].style.color = 'white'
   }
   else if(divChoose[0].display='flex'){
      listIcon[1].style.color = 'red'
      listIcon[0].style.color = 'white'
      listIcon[2].style.color = 'white'
   }
   else if(divChoose[1].display='flex'){
      listIcon[2].style.color = 'red'
      listIcon[0].style.color = 'white'
      listIcon[1].style.color = 'white'
   }*/
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
 // Get today's date and time
 var now = new Date().getTime();
    
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
   
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
 // Output the result in an element with id="demo"
 //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
 //+ minutes + "m " + seconds + "s ";
   let daysNumb = document.querySelector('.days')
   
   let hoursNumb = document.querySelector('.hours')
   let minuteNumb =document.querySelector('.minute')
   let secondsNumb =document.querySelector('.seconds')
 daysNumb.innerHTML = days 
 hoursNumb.innerHTML = hours
 minuteNumb.innerHTML = minutes
 secondsNumb.innerHTML = seconds
   // If the count down is over, write some text 
 if (distance < 0) {
   clearInterval(x);
   document.getElementById("demo").innerHTML = "EXPIRED";
 
}
}, 1000);