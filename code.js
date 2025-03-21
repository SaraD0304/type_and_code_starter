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
  //const size = sin((frameCount + indice) * 5) * ((volume * 20) / 2);
  let lunghezza = map(volume, 0, 1, 0, 50);

  noStroke();
  strokeWeight(10);
  fill("red");
  rotate(x, y);
  rect(0, 0, lunghezza, lunghezza);
}

export function caricamentoRisorse() {}

//Imposta le impostazioni iniziali
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

//Disegna sotto i punti
export function sotto(disegnaTesto) {
  background("white");

  fill("black");
  disegnaTesto();
}

//Disegna sopra i punti
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
