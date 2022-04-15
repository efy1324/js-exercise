function  Abbreviate(Name,Lastname){
  return Name[0] + "." + Lastname[0];
} 

function  Abbreviate1(fullName){
  let Fullname = fullName.split(" ");
   return Fullname[0][0]+ "."+ Fullname[1][0];
} 
console.log(Abbreviate("Efraim","Levi"));
console.log(Abbreviate1("Efraim Levi"));
