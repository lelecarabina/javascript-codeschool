var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber%4==0){
    numSheep/=4;//To calculate 75%, divide by 4 then below multiple result by 3 (numSheep*3).
    console.log("Removing "+(numSheep*3)+" sheep from the population.");

  } else if (numSheep>=10000){
    numSheep/=2;
    console.log("Removing "+numSheep+" sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
