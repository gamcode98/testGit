const ada = require("./sinceAda");

const create = async () => {
  const newUser = await createUSer();
  console.log("Probando git");
  const ko = "Osas sobreponerte?";
  return newUser;
};

console.log(ada());
