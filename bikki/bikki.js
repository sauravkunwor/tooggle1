let string = "";
let i=0;
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(i<10){
        string = string + e.target.innerHTML;
        document.querySelector('.container2').innerHTML = string;
        i++;
    }
    else{
        alert("Only 10 values");
    }
  })
 
})

const btn=document.querySelector('.clear');
btn.addEventListener('click',()=>{
    console.log('heyyy');
    if(i==0){
        alert('No values');
    }
    else{
        string = string.slice(0,i-1);
        document.querySelector('.container2').innerHTML = string;
        i--;
    }
  })