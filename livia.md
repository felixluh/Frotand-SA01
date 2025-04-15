Objetivo do Projeto:
    O objetivo deste projeto foi criar uma versão interativa do Jogo da Velha utilizando HTML, CSS e JavaScript. O jogo permite que dois jogadores alternem jogadas, marcando um "X" ou "O" nas células de um tabuleiro 3x3, com o objetivo de alinhar três símbolos em uma linha, coluna ou diagonal. O jogo também deve identificar o vencedor ou se houve um empate, além de permitir reiniciar o jogo após o término.

Estrutura do Jogo:
    A estrutura do Jogo da Velha é dividida em três partes principais:

    HTML (Estrutura):

    O tabuleiro é formado por 9 células, representadas como divs com a classe cell. Cada célula tem um id único (ex: cell-0, cell-1, etc.) para facilitar a identificação no código.
    Também foi adicionado um botão de reinício, que permite ao usuário começar um novo jogo, e uma área de mensagem para mostrar o status do jogo (quem está jogando, se alguém venceu ou se houve empate).
    CSS (Estilo e Design):

    Utilizei o CSS Grid para criar um layout de 3x3, onde cada célula tem uma largura e altura fixa de 100px, com bordas visíveis.
    O design é simples e funcional, com foco em uma boa experiência de uso: as células têm fundo branco e ficam com bordas pretas visíveis para representar as casas do tabuleiro.
    Também adicionei estilos para o botão de reinício e a área de mensagem, tornando a interface mais agradável.
    JavaScript (Lógica e Interatividade):

    O JavaScript é responsável por toda a interatividade do jogo.
    Quando o jogador clica em uma célula, o conteúdo dessa célula é alterado para o símbolo do jogador da vez, seja "X" ou "O".
    O jogo verifica se houve um vencedor após cada jogada, comparando as combinações possíveis de vitória (linhas, colunas e diagonais).
    Se alguém vencer ou se der empate, o jogo exibe uma mensagem informando o resultado. O tabuleiro é bloqueado para impedir mais jogadas após o término.
    O botão "Reiniciar Jogo" reseta o estado do tabuleiro e permite que o jogo comece novamente.

Funcionalidade do Jogo:
    Aqui estão as funcionalidades principais que foram implementadas:

    Jogadores Alternados: O jogo alterna entre dois jogadores, representados pelos símbolos "X" e "O". O jogo começa com o jogador "X", e a cada jogada, o jogador muda.

    Verificação de Vitória: Após cada jogada, o código verifica se há uma combinação de três símbolos iguais em uma linha, coluna ou diagonal, que define um vencedor.

    As combinações vencedoras são:
    Linhas: (0, 1, 2), (3, 4, 5), (6, 7, 8)
    Colunas: (0, 3, 6), (1, 4, 7), (2, 5, 8)
    Diagonais: (0, 4, 8), (2, 4, 6)
    Empate: Se todas as células forem preenchidas e não houver vencedor, o jogo exibe a mensagem de empate.

    Reinício do Jogo: O botão de reinício permite que o jogador comece uma nova partida, limpando o tabuleiro e redefinindo o estado do jogo.

Desafios e Soluções:
    Alternância entre jogadores: A lógica de alternância entre "X" e "O" foi uma parte importante do código. Utilizamos uma variável chamada currentPlayer para controlar quem deve jogar. Após cada jogada, essa variável é trocada para garantir que a vez do jogador seja alternada.

    Verificação de Vitória: Um dos maiores desafios foi garantir que o código verificasse corretamente se um jogador venceu ou se o jogo deu empate. Utilizei um array de padrões de vitória (linhas, colunas e diagonais) para verificar se algum desses padrões foi atingido. Isso garante que o jogo funcione corretamente e possa identificar o vencedor em qualquer situação.

    Prevenção de Jogadas Inválidas: Outra parte importante foi garantir que o usuário não pudesse fazer jogadas em células já preenchidas. Para isso, o código verifica se a célula clicada já contém um "X" ou "O" antes de permitir uma nova jogada.

    Reinício do Jogo: Ao implementar o botão de reinício, foi necessário redefinir o estado do jogo, limpar o conteúdo das células e reiniciar a alternância de jogadores.

Conclusão:
    O Jogo da Velha foi implementado com sucesso utilizando HTML, CSS e JavaScript, focando na interatividade, lógica de vitória, e alternância entre os jogadores. O código é modular, permitindo fácil modificação e expansão para futuras melhorias, como uma interface mais avançada ou funcionalidades extras. A experiência de desenvolvimento foi muito enriquecedora, pois permitiu aplicar conceitos importantes de manipulação de DOM, controle de fluxo e eventos em JavaScript.

