function scaleBalance(strArr) {
  let scaleArr = changeToNumArr(strArr[0]);
  let weightsArr = changeToNumArr(strArr[1]);

  function changeToNumArr(givenArr) {
    let newArr = [];
    for (let x in givenArr) {
      if (!isNaN(parseInt(givenArr[x]))) {
        newArr.push(parseInt(givenArr[x]));
      }
    }
    return newArr;
  }

  let sortedScale = scaleArr.sort(function(a, b) {
    return a - b;
  });
  let sortedWeights = weightsArr.sort(function(a, b) {
    return a - b;
  });

  let scaleDiff = sortedScale[1] - sortedScale[0];
  let answer = [];

  if (sortedWeights.includes(scaleDiff)) {
    answer.push(scaleDiff);
  }
  for (let i = 0; i < sortedWeights.length; i++) {
    for (let j = 0; j < sortedWeights.length; j++) {
      if (sortedWeights[i] + scaleDiff === sortedWeights[j]) {
        answer.push(sortedWeights[i]);
        answer.push(sortedWeights[j]);
      }
    }
  }
  if (answer.length === 1 || answer.length === 2) {
    return answer.join();
  } else {
    return "not possible";
  }
}

module.exports = scaleBalance;
