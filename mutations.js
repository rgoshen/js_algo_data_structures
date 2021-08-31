function mutation(arr) {
  let testCase = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();

  for (let i = 0; i < testCase.length; i++) {
    if (target.indexOf(testCase[i]) === -1) return false;
  }
  return true;
}

mutation(["hello", "hey"]);
