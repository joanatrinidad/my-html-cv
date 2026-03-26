console.log(true);
console.info("page loaded");
console.warn(10 / 2);
console.error("hello" + "there");

var employed = true;
console.info("employed", employed);

var age = 24;
console.warn("age", age);

var name = "Nick";
console.info("my name is ", name, typeof name);

var skills = ["HTML", "CSS", "JS"];
console.log(skills, typeof skills);

var person = {
  employed: true,
  age: 24,
};

console.info(person, person.age, typeof person);

var jobTitle = document.getElementById("job-title");
console.warn(jobTitle, typeof jobTitle);

console.info(jobTitle.innerHTML);

jobTitle.innerHTML = "Fullstack";
console.warn(jobTitle, typeof jobTitle);
