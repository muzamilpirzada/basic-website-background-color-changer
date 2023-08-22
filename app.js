let btn =document.querySelector('#btn1');
//  var index=0

 // change random number into hexa code for color; 
 const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

//   var randonNumber=(Math.random()*0xfffff*1000000).toString(16);
//   console.log('#'+randonNumber.slice(0, 6));

 function changeColors(){
    // var color =["red","blue","green","yellow","brown"];
    document.body.style.backgroundColor =randomHexColorCode();
    


    // document.body.style.backgroundColor=color[index++];
    // if(index>color.length-1){
    //     index= 0;
    // }
 }
 changeColors();
btn.addEventListener('click',()=>{
    changeColors();
})