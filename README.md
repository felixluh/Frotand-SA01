# Frotand-SA01

PIANO EXPLICAÇÃO

INDEX.HTML--------
O <!DOCTYPE html> declara o tipo de documento e a versão do HTML que estamos utilizando (HTML5).

A tag <html lang="pt-BR"> define o idioma da página como português do Brasil (pt-BR).

<meta charset="UTF-8"> define o conjunto de caracteres da página como UTF-8, que é um padrão que inclui caracteres de praticamente todos os idiomas.

<title>Piano</title> define o título da página, que será exibido na aba do navegador.

<link rel="stylesheet" href="styles.css"> referencia um arquivo CSS externo chamado styles.css para estilizar os elementos da página.

O título da página, <h1>Piano Das Divas</h1>, é um cabeçalho principal que provavelmente será exibido no topo da página.

Piano Virtual:

O piano é representado dentro da <div class="piano">, que possui várias <div class="key">. Cada uma dessas <div> representa uma tecla do piano.

As teclas do piano são representadas por duas classes principais:

Classe key white: As teclas brancas, que são notas naturais (C, D, E, F, G, A, B).

Classe key black: As teclas pretas, que são as notas alteradas (C#, D#, F#, G#, A#).

Cada tecla tem um atributo data-note que contém o nome da nota musical correspondente a ela (por exemplo, "C", "C#", etc.).

O estilo de left é usado para posicionar as teclas ao longo da horizontal, imitando a disposição das teclas de um piano real.

Exemplo:

A tecla branca de "C" não possui um valor style="left", o que a posiciona no começo (0px).

As teclas pretas têm um deslocamento em relação às teclas brancas, por exemplo, a tecla preta de "C#" tem um deslocamento de 40px (definido por style="left: 40px;").

Este script é referenciado no final do corpo do HTML. O arquivo script.js provavelmente contém a lógica JavaScript necessária para tornar o piano funcional, como detectar o clique nas teclas e tocar os sons correspondentes a cada nota.



STYLES.CSS----------

*BODY (CORPO DA PAGINA)
text-align: center;
Centraliza todo o conteúdo horizontalmente na página.

background-color: #749993;
Define a cor de fundo da página como um tom esverdeado/cinza.

color: white;
Define a cor padrão do texto como branca.

font-family: 'Segoe UI', sans-serif;
Usa a fonte Segoe UI (ou sans-serif como alternativa) para todo o texto da página.


*H1 (TITULO PRINCIPAL)
margin-top: 20px;
Adiciona um espaçamento de 20 pixels acima do título.


*PIANO (AREA DO PIANO)
position: relative;
Permite que os elementos dentro da .piano (como as teclas) sejam posicionados absolutamente em relação a essa área.

width: 700px;
Define a largura total do piano como 700 pixels.

height: 250px;
Define a altura do piano.

margin: 50px auto;
Centraliza o piano horizontalmente e coloca um espaço de 50px acima e abaixo.


*KEY (TECLAS EM GERAL)
position: absolute;
Permite que cada tecla seja posicionada livremente dentro da área do piano (.piano).

bottom: 0;
Faz com que as teclas fiquem coladas na base da div .piano.

border: 1px solid #333;
Coloca uma borda escura ao redor das teclas.

display: flex; justify-content: center; align-items: flex-end;
Centraliza o conteúdo horizontalmente e alinha o texto ao final da tecla (útil para mostrar a nota, como "C", "D", etc.).

padding-bottom: 10px;
Espaço interno na parte inferior da tecla, para o texto não ficar colado na borda.

cursor: pointer;
Muda o cursor para "mãozinha" quando passa por cima — indicando que é clicável.

user-select: none;
Impede que o texto dentro das teclas seja selecionado ao clicar.


*WHITE (TECLAS BRANCAS)
width: 60px;
Largura de cada tecla branca.

height: 250px;
Altura total da tecla — igual à altura da div .piano.

background: white;
Cor de fundo branca.

z-index: 1;
Define a camada onde a tecla branca fica — atrás das teclas pretas.


BLACK (TECLAS PRETAS)
width: 40px;
Largura menor que a das teclas brancas.

height: 160px;
As teclas pretas são mais curtas que as brancas.

background: black;
Cor preta de fundo.

color: white;
Define a cor do texto (caso exista) como branca.

z-index: 2;
Faz com que a tecla preta fique por cima da branca.

top: 0;
Cola a tecla preta no topo da div .piano.


ACTIVE (EFEITO DO CLICK)
:active é um pseudoestado que altera o estilo de um elemento enquanto ele está sendo clicado.

Quando a tecla branca é clicada:
background: #ccc; — muda o fundo para um cinza claro.

Quando a tecla preta é clicada:
background: #444; — muda o fundo para um cinza escuro.


SCRPIT.JS-------

FREQUENCIA DAS NOTAS
const noteFrequencies = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88
};
Aqui estamos definindo um objeto JavaScript chamado noteFrequencies que associa nomes de notas musicais com suas frequências em Hz.

Por exemplo: A (Lá) tem 440 Hz, que é o padrão para afinação musical.


MAPEAMENTO DO TECLADO
const keyMapping = {
  'z': 'C',
  's': 'C#',
  'x': 'D',
  'd': 'D#',
  'c': 'E',
  'v': 'F',
  'g': 'F#',
  'b': 'G',
  'h': 'G#',
  'n': 'A',
  'j': 'A#',
  'm': 'B'
};
Esse objeto associa teclas do teclado físico a notas musicais.

Exemplo: Se você apertar a tecla z no teclado, ele tocará a nota C.

Isso permite que você use o teclado do computador como um pianinho virtual.


FUNÇÃO PARA TOCAR A NOTA
function playNote(note) {
  const frequency = noteFrequencies[note];
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
note: é o nome da nota (ex: "C"), passada como parâmetro.

noteFrequencies[note]: pega a frequência associada à nota.

AudioContext: é a API de áudio do navegador, usada para gerar sons.

oscillator: é o gerador de som, que cria uma onda sonora.

gainNode: controla o volume do som.

js
Copiar
Editar
  oscillator.type = 'sine'; // tipo de onda (senoidal)
  oscillator.frequency.value = frequency;
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
Define o tipo de som como sine (onda senoidal) — som suave.

Define a frequência do oscilador.

Conecta tudo para que o som vá até as "caixas de som" do computador.

js
Copiar
Editar
  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
  oscillator.stop(audioContext.currentTime + 1);
}
Começa o som imediatamente.

Faz o som diminuir gradualmente até sumir em 1 segundo.

Para o som depois de 1 segundo.


CLIQUE DO MOUSE
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playNote(note);
  });
});
Seleciona todas as teclas do piano com a classe .key.

Para cada tecla, adiciona um evento de clique.

Quando você clica em uma tecla, ele pega a nota associada com data-note="..." e chama a função playNote() para tocar o som.


PRECIONANDO AS TECLAS DO TELADO FÍSICO
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (keyMapping[key]) {
    playNote(keyMapping[key]);
  }
});
Escuta eventos de teclas pressionadas no teclado físico.

event.key.toLowerCase(): garante que a tecla seja lida como minúscula (evita bugs com Shift, por exemplo).

Se a tecla pressionada existir no keyMapping, ele toca a nota correspondente.
