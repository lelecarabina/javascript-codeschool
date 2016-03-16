var totalGen = 19;
var totalMW = 0;

for(var currentGen=1;currentGen<=totalGen;currentGen++){
  if(currentGen<=4 && currentGen%2==0){
    totalMW+=62;
    console.log("Generator #"+currentGen+" is on, adding 62 MW, for a total of "+totalMW+" MW!");

  } else if (currentGen<=totalGen && currentGen%2==0) {
    totalMW+=124;
    console.log("Generator #"+currentGen+" is on, adding 124 MW, for a total of "+totalMW+" MW!");

  } else {
    console.log("Generator #"+currentGen+" is off.");

  }

}
