// problem-1

function newPrice(currentPrice, discount) {
  let num = (currentPrice * discount) / 100;
  let result = currentPrice - num;
  return result;
}
// let output = newPrice(2000,17.17);
// console.log(output);

// problem-2

function validOtp(otp) {
  if (otp.startsWith("ph") && otp.length === 8) {
    return true;
  } else {
    return false;
  }
}
// let output = validOtp("ph-123456746753")
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
