
trouverJour(1,9,2023);

function trouverJour(day:number, month:number, year:number) {
  let D = 0;
  let z = 0;
  if (month >= 3 ) {
    z = year;
   D =  (Math.trunc((23*month)/9) + day + 4 + year + Math.trunc(z/4) - Math.trunc(z/100) + Math.trunc(z/400) - 2) % 7 ;
  }
  else
  {
    z = year - 1; 
    D =  (((23*month)/9) + day + 4 + year + Math.trunc(z/4) - Math.trunc(z/100) + Math.trunc(z/400)) % 7 ;
  }
switch (Math.trunc(D)) {
  case 0:
    console.log("Dimanche")
    break;
  case 1:
    console.log("lundi")
    break;
  case 2:
    console.log("Mardi")
    break;
  case 3:
    console.log("Mercredi")
    break;
  case 4:
    console.log("Jeudi")
    break;
  case 5:
    console.log("Vendredi")
    break;
  case 6:
    console.log("Samedi")
    break;
  

  default:
    console.log("Il y a un probleme dans ma plantation :) :) ")
    break;
}

 

}
