



function handlecal(weight,height){
    e.preventDefault();
    if(weight===0 || height===0)
{
 alert("please enter information correctly")
}
else
{
 let bmiformula=(Weight/(Height*Height)*703)
 setBmi(bmiformula.toFixed(2));
 if(Bmi<=25)
 {
     alert("you are underweight")
 }
 else if(Bmi >25 || bmiformula<=30)
 {
     alert("you are healthy")
  }
 else if(Bmi>30)
   {
    alert("you are unhealthy please seek foor meedication");
  }
 }





}

