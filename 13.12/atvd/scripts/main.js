// Task 001: Coloque o atributo required nas tags input OKAY
// Task 002: Crie outro campo de senha e valide se os dois são iguais
// Task 003: Criar um campo nick, criar no JS um vetor pré-definido de nicks e verificar se já existe.
// Desafio: Reduzir o código das validações.

const nicks = ["patati", "patata"];

const meuForm = document.forms.meuForm;

meuForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  validator({
    form: meuForm,
    name: "nome_completo",
    check: (nome) => nome.split(" ").length <= 1,
    msgInvalid: "Digite nome e sobrenome!",
    msgValid: "Nome correto!",
    onInvalid: () => (valid = false)
  });
  validator({
    form: meuForm,
    name: "email",
    check: (email) => !email.includes("gmail"),
    msgInvalid: "Provedor inválido",
    msgValid: "Email correto!",
    onInvalid: () => (valid = false)
  });
  validator({
    form: meuForm,
    name: "senha",
    check: (senha) => senha.length < 8,
    msgInvalid: "Senha curta!",
    msgValid: "Senha adequada",
    onInvalid: () => (valid = false)
  }) &&
    validator({
      form: meuForm,
      name: "confirm_senha",
      check: (senha) => senha !== meuForm.senha.value,
      msgInvalid: "Senhas não são iguais",
      msgValid: "Senham são iguais",
      onInvalid: () => (valid = false)
    });

  validator({
    form: meuForm,
    name: "nickname",
    check: (nickname) => nicks.includes(nickname),
    msgInvalid: "Nickname já existe!",
    msgValid: "Nickname adequado",
    onInvalid: () => (valid = false)
  });
});

function validator({ form, name, check, msgInvalid, msgValid, onInvalid }) {
  const field = form[name];
  const fieldSmall = field.nextElementSibling;
  if (check(field.value)) {
    field.classList.remove("valid");
    field.classList.add("invalid");
    fieldSmall.classList.replace("valid", "invalid");
    fieldSmall.innerHTML = msgInvalid;
    onInvalid();
    return false;
  } else {
    field.classList.add("valid");
    field.classList.remove("invalid");
    fieldSmall.classList.replace("invalid", "valid");
    fieldSmall.innerHTML = msgValid;
    return true;
  }
}
