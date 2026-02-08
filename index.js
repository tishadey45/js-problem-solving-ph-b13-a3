// problem-1
// let result = num.toFixed(3);
function newPrice(currentPrice, discount) {

  //  let new = newPrice
if(typeof currentPrice==="number"&& typeof discount ==="number"){
    if (discount < 0 && discount > 100) {
    return "invalid";
  } else {
    let num = (currentPrice * discount) / 100;
    let result = (currentPrice - num).toFixed(3);
    return result;
  }
}else{
return "invalid"
}

}

let output = newPrice(500, "5");
console.log(output);

// problem-2

function validOtp(otp) {
  if (otp.startsWith("ph") && otp.length === 8) {
    return true;
  } else {
    return false;
  }
}
// let output = validOtp(12345678);
// console.log(output);

// problem-3

function finalScore(omr) {
  let value = omr.right + omr.wrong + omr.skip;
  if (value == 100) {
    let num = omr.right * 1 - omr.wrong * 0.5 + omr.skip * 0;
    let result = Math.round(num);
    return result;
  } else {
    return "invalid";
  }
}

// let output = finalScore(["Raj"]);
// console.log(output);

// problem-4
