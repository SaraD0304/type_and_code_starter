export const configurazione = {
  testo: "C",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 4,

  nascondiInterfaccia: true,
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
  let larghezza = map(sin(frameCount * 20), -1, 1, -100, 0);
  stroke("purple");

  ellipse(x, y, larghezza, 2);

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
  background("black");

  fill("black");
  disegnaTesto();
}

//Disegna sopra i punti
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
