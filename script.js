window.onload = function() {
    alert('Seja bem-vindo') //O alert cria uma caixa de texto na pagina 
    var confirmacao = confirm('Deseja fazer o cadastro?') //O confirm cria uma caixa de confirmação na pagina
    if(confirmacao){
        let nome = prompt('Insira seu nome') //O var armazena essa informação (variavel), o "=" significa recebe, o prompt cria uma caixa de texto onde você insere os dados 
        let sobrenome = prompt('Insira seu sobrenome') 
        let idade = parseFloat(prompt('Insira sua idade'))
        let elemento = document.querySelector('#main')
        if (idade >=18){
            alert(`Olá ${nome} ${sobrenome}!! Seja bem vindo!`)
            //elemento.innerText = 'Texto inserido na div'
            elemento.innerText = `Ola ${nome}`

        }
        if (idade <18){
            alert (`Olá ${nome} ${sobrenome}!! Verificamos que você é novo demais para acessar nosso site. Lamento :(`)
        }
    }

    console.log(nome, sobrenome, idade)
} 
        