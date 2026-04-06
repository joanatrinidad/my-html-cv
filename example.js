function variableExample() {
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
}

function updateTitle(title) {
  var jobTitle = document.getElementById("job-title");
  console.warn(jobTitle, typeof jobTitle);

  jobTitle.innerHTML = title;
  console.warn(jobTitle, typeof jobTitle);
}

variableExample();
updateTitle("Fullstack");

function jsonWithFunctions() {
  console.log(typeof variableExample);
  console.log(typeof document);
  console.log(typeof document.getElementById);

  var person = {
    age: 29,
    name: "Nick",
    learn: function () {
      console.info("I'm learning JS");
    },
    play: function () {
      console.info("I'm playing. my name is ", this.name);
    },
  };

  person.learn();
  person.play();
  var action = "learn"; //learn
  person[action]();
}

// jsonWithFunctions();
