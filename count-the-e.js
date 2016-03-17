function countE(){
  var phrase=prompt("Which phrase would you like to examine?");
  if(typeof(phrase) != "string"){
    alert("Invalid input.");
    return false;
  } else{
    var eCount=0;
    for(var i=0;i<phrase.length;i++){
      if(phrase.charAt(i) == "e" || phrase.charAt(i) =="E"){
        eCount++;
      }
    }
    alert("There are "+eCount+" E's in \""+phrase+"\".");
    return true;
  }

}
