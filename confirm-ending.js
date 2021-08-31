function confirmEnding(str, target) {
  const index = target.length * -1;
  return str.slice(index) === target ? true : false;
}

confirmEnding("Bastian", "n");
