export const configurazione = {
  testo: "C",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 4,

  nascondiInterfaccia: false,
};

export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  push();
  translate(x, y);
  stroke("white");
  let g = map(gamma, -90, 90, -unita, unita);
  let b = map(beta, -90, 90, -unita, unita);
  line(0, 0, g, b);
  pop();
}

export function caricamentoRisorse() {}

//Imposta le impostazioni iniziali
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

//Disegna sotto i punti
export function sotto(disegnaTesto) {
  background("lightblue");

  fill("lightblue");
  disegnaTesto();
}

//Disegna sopra i punti
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
