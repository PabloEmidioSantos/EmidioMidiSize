  function alternarTema() {
    document.body.classList.toggle("dark");

    const msg = document.getElementById("mensagem-tema");
    const btn = document.getElementById("botao-tema");

    if (document.body.classList.contains("dark")) {
      msg.innerText = "Tema escuro ativado 🌙";
      btn.innerText = "☀️";
    } else {
      msg.innerText = "Tema claro ativado ☀️";
      btn.innerText = "🌙";
    }
  }

function mudarTema() {
  const body = document.body;
  body.classList.toggle("dark");

  const msg = document.getElementById("mensagem-tema");
  const btn = document.getElementById("botao-tema");

  if (body.classList.contains("dark")) {
    msg.innerText = "Tema escuro ativado 🌙";
    btn.innerText = "☀️";
  } else {
    msg.innerText = "Tema claro ativado ☀️";
    btn.innerText = "🌙";
  }
}

