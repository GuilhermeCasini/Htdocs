function Login() {
    const login = document.querySelector("form");
    const { user, pws } = login.elements;
    fetch("./ft/javascript/usuario.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const users = data.users;
            const User = users.find((us) => {
                return us.user === user.value && us.pws === pws.value;
            });
            User
                ? (window.location.href = "http://localhost/JS/Desafio2/panel.html")
                : alert("Usuário Não encontrado!");
        });

}






/* teste 1
    var users=[
        {
          "user" : "Master",
          "pws"  : "12345"
        },
        
        {
          "user" : "Marcelo",
          "pws"  : "senha"
        }
    ] ;
  
  
    function Login() {
        var usuario = document.getElementsByName('user')[0].value;
        var senha = document.getElementsByName('pws')[0].value;
    
        for (var u in users) {
            var us = users[u];
            if (us.user === usuario && us.pws === senha) {
                window.location = "http://localhost/JS/Desafio2/panel.html";
                
            }
               
        }
        alert("Usuário Não encontrado!");
    return false;
    }
   
 */


