const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  signUpEagle();
});

async function signUpEagle() {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const age = document.querySelector("#age").value;
  const nickname = document.querySelector("#nickname").value;
  const password = document.querySelector("#password").value;

  if (!name || !email || !age || !nickname || !password) {
    alert("Preencha todas as informações");
    return;
  }

  const user = { name, email, age, nickname, password };

  try {
    const response = await fetch("http://localhost:3333/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    const data = await response.json();
    alert(data.message); // certifique-se que o backend retorna "message"

    window.location.href = "../index.html";
  } catch (err) {
    console.error(err);
    alert("Erro ao cadastrar usuário!");
  }
}
