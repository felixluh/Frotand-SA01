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
  
  // Mapeamento das teclas do teclado físico
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
  
  // Função para tocar a nota
  function playNote(note) {
    const frequency = noteFrequencies[note];
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
  
    oscillator.type = 'sine'; // tipo de onda (pode trocar para 'square', 'triangle', etc.)
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
  
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
    oscillator.stop(audioContext.currentTime + 1);
  }
  
  // Quando o mouse clica nas teclas do piano
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const note = key.dataset.note;
      playNote(note);
    });
  });
  
  // Quando o teclado físico é pressionado
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase(); // Torna a tecla minúscula
    if (keyMapping[key]) {
      playNote(keyMapping[key]);
    }
  });
  