export const configurazione = {
  testo: "C",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 10,
  densitàPuntiBase: 1,

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
  const size = sin(frameCount * 6) * ((volume * 200) / 2) * 10;
  let lunghezza = map(volume * 60, 0, 1, 0, 50);

  stroke("white");
  strokeWeight = lunghezza;
  translate(width / 2, height / 2);
  rotate(lunghezza);
  fill("white");
  ellipse(0, 0, 10, lunghezza);
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("white");

  // [INFO] Rimuovi il commento per disegnare il testo
  fill("darkred");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
