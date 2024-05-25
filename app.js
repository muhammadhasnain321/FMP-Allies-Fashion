// alert("welcome");

var num=0

function minusbtn() {
   var counter = document.getElementById("counter");
    num--
    if(num<0){
        num = 0
    }
    else{
        counter.innerHTML=num

    }
}

function plusbtn() {
  var counter = document.getElementById("counter");
  num++
  if(num>10){
    num = 0
}
else{
    counter.innerHTML=num

}


}