
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

//RIGHT:
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen<=(totalGen-15)){//OR (currentGen<=4)
    totalMW+=62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}

for(;currentGen<=totalGen;currentGen++){//OR (currentGen=5;currentGen<=totalGen;currentGen++)
 	  totalMW+=124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");

}

//WRONG:
/*
while(currentGen<=(totalGen.length-15)){
    totalMW+=62;
    console.log("Generator #" + currentGen + " is on, adding " + 62 + " MW , for a total of " + totalMW + " MW!");
    currentGen++;
}

for(var gens5To19=5;gens5To19<totalGen.length;gens5To19++){
 	  totalMW+=124;
    console.log("Generator #" + currentGen + " is on, adding " + 124 + " MW , for a total of " + totalMW + " MW!");
    currentGen++;
}
*/
