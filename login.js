// document.getElementById("formLogin").addEventListener('submit',
// function(event){

//     alert('banana barato supermercado tal <h2)')
// })

function ola(){
    alert('Ola mundo')
    
//               html       pegar o elemento  id     pegar o valor
    let email = document.getElementById("email.form").value
    let senha = document.getElementById("senha.form").value

    console.log(email,senha)

    if(email =="" || senha==""){
        alert('Login Recusdo')
    }else{
        alert('login aprovado')
    }
}
console("teste") 