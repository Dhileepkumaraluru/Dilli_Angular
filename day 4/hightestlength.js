const strings = ["hello", "heyyyy", "howww"];

function highestLength(strings) {
  let highest = 0;
  for (let string of strings) {
    if (string.length > highest) {
      highest = string.length;
    }
  }
  return highest;
}

const highest = highestLength(strings);

console.log(highest);