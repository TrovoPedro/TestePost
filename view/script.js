let btn = document.querySelector("button")
let form = document.querySelector("form")

btn.addEventListener('click', enviarDados)

function enviarDados(event){

    event.preventDefault();
    let inputNome = form.nomeProduto
    let inputPreco = form.precoProduto

    //pegando o valor do inputs
    let nome = inputNome.value
    let preco = inputPreco.value

    form.reset()
    incluirDados(nome, preco)
}

function incluirDados(nome, preco){
    let url = "http://localhost/test_post/controller/POST_incluirProduto.php"
    fetch(url, {
        method: 'POST',
        body: form
    })
    .then(function (response){
        return response.json()
    })
    .then(function (response){
        console.log(response.status)
    })
}