function init () {
    const menu = document.querySelector('nav ul')

//recupera o user do session storage e converte de volta para objeto
const user  = JSON.parse(sessionStorage.getItem("user"))

//verificar se existe um user para ser alterado
  if (user) {
      menu.innerHTML += `
      
      <li>
          <a href="./pages/usuarios/usuarios.html">Usuários</a>
      </li>
      <li>
          <h2>Úsuario: ${user.name}</h2>
      </li>
      <li>
          <button id="logout" >Sair</button>
      </li>
    `
    const Logoutbutton = document.querySelector("#logout")
    Logoutbutton.addEventListener("click", logout)

    return
   }
   
   //se não existe user, mostra as opções de login e cadastro
   menu.innerHTML += ` 
   <li>
        <a href="./pages/login/login.html">Usuários</a>
    </li>
   `
}

init ()

function logout() {
    //remover o user do session storage
    sessionStorage.removeItem("user")
    alert("Logout realizado com sucesso! Volte sempre!")
    //recarregar a página
    window.location.reload()
}               