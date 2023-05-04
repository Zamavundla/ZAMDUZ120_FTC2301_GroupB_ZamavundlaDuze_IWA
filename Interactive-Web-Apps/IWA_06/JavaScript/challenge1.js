/*const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number === primaryPhone 
const secondaryValid = typeof number === secondaryPhone

console.log(primaryValid)
console.log(secondaryValid)

if(primaryValid || secondaryValid, typeof number === primaryPhone){
    console.log(false)
}
else if (primaryValid || secondaryValid, typeof number === secondaryPhone){

    console.log(true)}
 console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )
    */



    const primaryPhone = 'O748105141';
    const secondaryPhone = '0219131568';
    
    // Only change below this line
    
    const primaryValid = !isNaN(primaryPhone) && primaryPhone !== '';
    const secondaryValid = !isNaN(secondaryPhone) && secondaryPhone !== '';
    
    console.log('Primary phone is valid numerical string:', primaryValid);
    console.log('Secondary phone is valid numerical string:', secondaryValid);
    
    if (primaryValid === false && secondaryValid === true) {
      console.log(true);
    } else {
      console.log(false);
    }
    

