const arr=['!','@','#','$','^','&','*','1','2','3','4','4','5','6','7','A','M','N','S','D','F','G','H','J','Z','X','C','V','B','Q','W'];
let copytext;
const password=document.querySelector('.inputbox input');
 document.querySelector('.generat-box').addEventListener('click',function(){    
    let rendomgeneratnum="";
    const length=12;
    for(j=0; j<length; j++){
        for(i=0 ;i<=arr.length ;i++){
            var rendomnum=Math.floor(i*Math.random());
        }
        rendomgeneratnum=rendomgeneratnum+arr[rendomnum];
    }
    console.log( rendomgeneratnum);
   password.value=rendomgeneratnum;
})
document.querySelector('#imgtag').addEventListener('click',function(){
    password.select();
       document.execCommand("copy");
})