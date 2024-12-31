function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

function greetArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeter(user[0])); //Correct
console.log(greetArray(user)); //Correct