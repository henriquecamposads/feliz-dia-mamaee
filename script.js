// Adiciona um "ouvinte de evento" ao documento inteiro.

// O evento 'DOMContentLoaded' é disparado quando todo o HTML da página foi completamente carregado e analisado pelo navegador.

// A função dentro do 'addEventListener' só será executada DEPOIS que o HTML estiver pronto.

// Isso é importante para garantir que todos os elementos (botões, divs, etc.) já existam antes de tentarmos manipulá-los com JavaScript.

document.addEventListener('DOMContentLoaded', function() {

    // Busca o elemento HTML que tem o ID 'showMessageButton' (nosso botão) e armazena uma referência a ele na constante 'button'.

    // 'const' significa que o valor de 'button' não será alterado depois.

    const button = document.getElementById('showMessageButton');

    // Busca o elemento HTML que tem o ID 'specialMessage' (nossa div vazia) e armazena na constante 'specialMessageDiv'.

    const specialMessageDiv = document.getElementById('specialMessage');

    // Cria um array (uma lista ordenada) de strings (textos). Cada string é uma mensagem diferente.

    // Estes são os textos que aparecerão na 'specialMessageDiv' quando o botão for clicado.

    const messages = [

        "Com você, a vida não tem 'bugs'!",

        "Obrigado por 'debugar' nossos problemas com tanto amor!",

        "Seu amor é o 'kernel' que mantém nosso sistema funcionando!",

        "Você transforma qualquer 'erro 404' da vida em 'página encontrada' com sucesso!",

        "Mãe: nossa 'desenvolvedora full-stack' de felicidade!"

    ];

    // Declara uma variável 'messageIndex' e a inicializa com 0.

    // 'let' significa que o valor de 'messageIndex' pode mudar depois.

    // Esta variável será usada para controlar qual mensagem do array 'messages' será exibida.

    let messageIndex = 0;

    // Verifica se o elemento 'button' realmente foi encontrado na página.

    // É uma boa prática para evitar erros caso o ID do botão esteja errado no HTML ou o elemento não exista.

    if (button) {

        // Adiciona um ouvinte de evento ao 'button'.

        // Queremos ouvir pelo evento 'click'. Quando o botão for clicado, a função anônima '() => { ... }' será executada.

        button.addEventListener('click', () => {

            // 1. Efeito de "Fade Out" (Desaparecer Suavemente):

            //    Muda o estilo 'opacity' da 'specialMessageDiv' para 0.

            //    Como definimos uma 'transition' para 'opacity' no CSS, essa mudança será animada (suave).

            specialMessageDiv.style.opacity = 0;

            // 2. Atraso para Mudar o Texto:

            //    'setTimeout' executa uma função após um certo tempo (em milissegundos).

            //    Aqui, esperamos 400ms (0.4 segundos) antes de executar a função interna.

            //    Isso dá tempo para a animação de fade out (opacity 0) terminar antes de mudarmos o texto.

            setTimeout(() => {

                // Atualiza o conteúdo de texto da 'specialMessageDiv' com a mensagem atual do array 'messages'.

                // 'messages[messageIndex]' acessa o item no array 'messages' na posição indicada por 'messageIndex'.

                specialMessageDiv.textContent = messages[messageIndex];

                // 3. Efeito de "Fade In" (Aparecer Suavemente):

                //    Muda o estilo 'opacity' de volta para 1 (totalmente visível).

                //    Novamente, a transição CSS fará isso suavemente.

                specialMessageDiv.style.opacity = 1;

                // 4. Prepara para a Próxima Mensagem:

                //    Incrementa 'messageIndex' em 1.

                //    O operador '%' (módulo) calcula o resto da divisão.

                //    'messageIndex % messages.length' garante que, se 'messageIndex' ultrapassar o tamanho do array, ele volte para 0.

                //    Isso cria um ciclo, exibindo as mensagens em loop.

                messageIndex = (messageIndex + 1) % messages.length;

            }, 400); // Tempo em milissegundos para o atraso.

        });

    } // Fim do if (button)

    // --- Início da seção do Efeito de Corações Caindo (Funcionalidade Opcional) ---

    // Define uma função chamada 'createHeart'. Funções são blocos de código reutilizáveis.

    function createHeart() {

        // Cria um novo elemento HTML <div> dinamicamente usando JavaScript.

        // Este div ainda não está na página, está apenas na memória.

        const heart = document.createElement('div');

        // Adiciona a classe CSS 'heart' ao novo div. Os estilos para '.heart' estão no arquivo 'estilo.css'.

        heart.classList.add('heart');

        // Define a posição horizontal inicial do coração de forma aleatória.

        // 'Math.random()' gera um número decimal entre 0 (inclusivo) e 1 (exclusivo).

        // Multiplicar por 100 e adicionar 'vw' (viewport width) faz o coração aparecer em qualquer lugar da largura da tela.

        heart.style.left = Math.random() * 100 + 'vw';

        // Define a duração da animação de queda de forma aleatória (entre 3 e 5 segundos).

        // Isso faz com que os corações caiam em velocidades ligeiramente diferentes, tornando o efeito mais natural.

        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // (0 a 1.99...) + 3 = 3 a 4.99... segundos

        // Define o conteúdo HTML do novo div como o símbolo de coração (♥).

        // '&#10084;' é o código HTML para um caractere de coração.

        heart.innerHTML = '&#10084;';

        // Adiciona o 'heart' (o novo div que criamos e estilizamos) como um filho do elemento <body> da página.

        // Agora o coração se torna visível e a animação CSS começa.

        document.body.appendChild(heart);

        // Remove o coração da página após 5 segundos (5000 milissegundos).

        // Isso é importante para não sobrecarregar o navegador com milhares de elementos de coração

        // se a página ficar aberta por muito tempo, o que poderia causar lentidão.

        // O tempo aqui (5000ms) deve ser igual ou um pouco maior que a duração máxima da animação 'fall' no CSS.

        setTimeout(() => {

            heart.remove(); // Remove o elemento 'heart' do DOM (da estrutura da página).

        }, 5000);

    }

    // 'setInterval' executa uma função repetidamente em um intervalo de tempo específico.

    // Aqui, a função 'createHeart' será chamada a cada 300 milissegundos (0.3 segundos).

    // Isso cria o efeito contínuo de corações caindo.

    // Se você quiser remover o efeito de corações, basta comentar ou apagar esta linha e a função createHeart().

    setInterval(createHeart, 300);

    // --- Fim da seção do Efeito de Corações Caindo ---

}); // Fim do ouvinte de evento 'DOMContentLoaded'

