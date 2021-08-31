function bouncer(arr) {
  const newArr = arr.filter((el) => !!el === true);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
