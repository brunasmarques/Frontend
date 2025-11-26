const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpEagle()
}

async function signUpEagle() {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    if(email === "" || password === "") {
        alert("Preencha todas as informações")
        return
    }

    const user = {
    email,
    password
    }


    const response = await fetch("http://localhost:3333/login", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json())


    if (response.message) {
    alert(response.message)
    // recarrega a página
    window.location.reload()
    return
}

   // desestruturar id e name de response
   const { id, name } = response

   // guardar a informação no sessionStorage convertida em JSON
   sessionStorage.setItem("user", JSON.stringify({ id, name }))
   alert("Login realizado com sucesso!")

  window.location.href = "../../index.html"

}
