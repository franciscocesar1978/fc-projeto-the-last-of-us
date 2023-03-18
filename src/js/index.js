/*
    OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botoes 

    - passo 2 - dar um jeito de indentificar o clique do usuario no botao

    - passo 3 - desmarcar o botao selecionado anterior

    - passo 4 - marcar o botao clicado como se estivesse selecionado

    - passo 5 - esconder a imagem de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado

 */

      // passo 1 - dar um jeito de pegar o elemento HTML dos botoes
      const botoesCarrossel = document.querySelectorAll('.botao');
      const imagens = document.querySelectorAll('.imagem');

        // passo 2 -dar um jeito de indentificar o clique do usuario no botao
        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {


        // passo 3 - desmarcar o botao selecionado anterioe
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 -marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');

       // passo 5 - esconder a imagem de fundo anterior
       const imagemAtiva = document.querySelector('.ativa');
       imagemAtiva.classList.remove('ativa');

       // passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicar
       imagens[indice].classList.add('ativa');

      })
   } )

   




