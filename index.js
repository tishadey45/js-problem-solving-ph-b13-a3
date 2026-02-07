// problem-1

function newPrice(currentPrice, discount) {
  let num = (currentPrice * discount) / 100;
  let result = currentPrice - num;
  return result;
}
// let output = newPrice(2000,17.17);
// console.log(output);


// problem-2

function validOtp(otp){
  if(otp.startsWith("ph")&& (otp.length===8)){
   return true;
  }else{
   return false;
  }
}
// let output = validOtp("ph-123456746753")
// console.log(output);
