alert('Seja bem-vindo') //O alert cria uma caixa de texto na pagina 
        confirm('Deseja fazer o cadastro?') //O confirm cria uma caixa de confirmação na pagina
        var nome = prompt('Insira seu nome') //O var armazena essa informação (variavel), o "=" significa recebe, o prompt cria uma caixa de texto onde você insere os dados 
        var sobrenome = prompt('Insira seu sobrenome') 
        var idade = prompt('Insira sua idade')
        document.write(`Ola ${nome}`)
        document.write(` ${sobrenome}, `)
        document.write(`${idade} anos`)
        if (idade >=18){
            alert('Seja bem vindo')
        }
        if (idade < 18){
            alert('Atençaõ somente maiores de 18 anos são permitidos nesse site')
        }