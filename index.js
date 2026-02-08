// problem-1

function newPrice(currentPrice, discount) {
  if (typeof currentPrice === "number" && typeof discount === "number") {
    if (discount < 0 && discount > 100) {
      return "Invalid";
    } else {
      let num = (currentPrice * discount) / 100;
      let result = (currentPrice - num).toFixed(3);
      return result;
    }
  } else {
    return "Invalid";
  }
}

// let output = newPrice(500, "5");
// console.log(output);

// problem-2

function validOtp(otp) {
  if (typeof otp == "string") {
    if (otp.startsWith("ph") && otp.length === 8) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
// let output = validOtp([12345678]);
// console.log(output);

// problem-3

function finalScore(omr) {
  let value = omr.right + omr.wrong + omr.skip;
  if (value == 100) {
    let num = omr.right * 1 - omr.wrong * 0.5 + omr.skip * 0;
    let result = Math.round(num);
    return result;
  } else {
    return "Invalid";
  }
}

// let output = finalScore(["Raj"]);
// console.log(output);

// problem-4

function gonoVote(array) {
  if (Array.isArray(array)) {
    let totalHa = 0;
    let totalNa = 0;
    for (const element of array) {
      if (element == "ha") {
        totalHa = totalHa + 1;
      } else if (element == "na") {
        totalNa = totalNa + 1;
      }
    }
    if (totalHa > totalNa) {
      return true;
    } else if (totalHa == totalNa) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid"
  }
}

// let output = gonoVote(["ha", "na", "ha", "na"]);
// console.log(output);

// problem-5

function analyzeText(str) {
  if (typeof str == "string" && str.length !== 0) {
    let words = str.split(" ");
    let longWords = "";
    for (let word of words) {
      if (word.length > longWords.length) {
        longWords = word;
      }
    }
    let stringLength = words.join("").length;
    return {
      longwords: longWords,
      token: stringLength,
    };
  } else {
    return "Invalid";
  }
}

// const output = analyzeText(12345  )
// console.log(output);
