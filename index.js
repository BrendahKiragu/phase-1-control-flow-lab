function scuberGreetingForFeet(distance){
  if (distance <= 400) {
  return `This one is on me!`;
  }
  else if (distance >400 && distance <2000) {
    return 'That will be twenty bucks.';
  }
  else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
//console.log(scuberGreetingForFeet(2300))
  

function ternaryCheckCity(city){
 return city === "NYC" ? `Ok, sounds good.` : `No go.`
}
//console.log(ternaryCheckCity('Nairobi'))


function switchOnCharmFromTip(){
  // Write your code here!
}