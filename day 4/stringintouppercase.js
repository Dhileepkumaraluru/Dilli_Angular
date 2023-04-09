const strings = ["hello", "heyy"];
const result = [];

function uppercase(string) {
  for (let x of string) {
    result.push(x.toUpperCase());
  }
}

strings.forEach(uppercase);

console.log(result.join(''));
