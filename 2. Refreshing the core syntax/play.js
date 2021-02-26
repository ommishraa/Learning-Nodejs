var name = "Om Mishra";
var age = 18;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "user name is " +
    userName +
    ", user age is " +
    userAge +
    ", user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, hasHobbies));
