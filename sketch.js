let video;
let sonido;
let estado = 0; // Inicio del programa, guarda el valor
let fraseActual = "CONSTRUCTIVISM";
let velocidad = 2; // Controla la velocidad de aparición de formas
let margen = 15;

function preload() {
  sonido = loadSound('Audio.mp3');
}

function setup() {
  createCanvas(600, 600);
  video = createVideo('Ojo.mp4');
  video.hide();
  let boton = createButton('SIGUIENTE');
boton.mousePressed(cambiarEstado);
}

function draw() {
  background(0, 0, 0);
// Si estado es 0 dibuja el inicio del programa
  if (estado == 0) {
    dibujarInicio();
  } else if (estado == 1) {
    dibujarPresentacion();
  } else if (estado == 2) {
    dibujarInteractivo();
  }
}

function dibujarInicio() {
// Triángulo rojo
  fill(204, 34, 0);
  // Sin borde
  noStroke();
// Puntos en los cuales se genera el triángulo
  triangle(0, height, 0, height/2, width/2, height);
// Círculo rojo
  fill(204, 34, 0);
  ellipse(500, 100, 500, 500);
// Triángulo blanco
  fill(255, 255, 255);
  triangle(width/2, 0, width, 0, width, height/2);
// Bucle que genera rectángulos
  for (let i = 0; i < 3; i++) {
    fill(204, 34, 0);
// Rectángulos que se generan cada vez que pasan por el bucle, 50px más abajo
    
    rect(0, 60 + i * 50, width - margen, 15);
    rect(0, 80 + i * 50, width - margen, 15);
}
// Texto
  fill(255);
  // Tamaño texto
  textSize(16);
  textAlign(CENTER, CENTER);
  // Texto + su posición
  text("HAZ CLICK PARA INICIAR", width/2, height - 50);
// Texto constructivismo
push(); // Guarda el estado
  translate(50, height - 10); // Mueve el texto hacia la esquina
  rotate(-HALF_PI); // Rota 90° el texto hacia arriba
  fill(255);
  textSize(65);
  textStyle(BOLD); // Letra gruesa
  textAlign(LEFT, CENTER);
  text("CONSTRUCTIVISM", 0, 0);
  pop(); // Restaura el estado
}

function dibujarPresentacion() {
  background(0, 0, 0);
  for (let i = 0; i < 2; i++) {
    rect(0, 500 + i * 30, width, 15);
  }
 // triangulo blanco
  fill(255);
  triangle(0, height, 0, height/2, 200, height);
  
  // Línea roja diagonal
  fill(204, 34, 0);
  noStroke;
  triangle(0, 0, 0, height, 80, height);

  // Línea roja diagonal derecha
  triangle(width, 0, width, height, width - 80, 0);

  // Circulo rojo
  ellipse(500, 500, 450, 450);
  
  // Video del ojo
  image(video, 230, 120, 150, 150);
  // Frases aleatorias que cambian con las teclas
  noStroke;
  fill(255);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(fraseActual, width/2, height/2);

  fill(255);
// Tamaño texto
  textSize(10);
  textAlign(CENTER, CENTER);
  // Texto + su posición
  text("PRESIONA UNA TECLA", width/2, height - 20);
  }
  
function dibujarInteractivo() {
  background(0, 0, 0);
// map() controla el tamaño de las formas con el mouse
  let tamano = map(mouseX, 0, width, 20, 120);
// Bucle que genera rectángulos en posiciones random
  for (let i = 0; i < 6; i++) {
    fill(204, 34, 0);
    noStroke();
    rect(random(width), random(height), tamano, tamano);
}
  image(video, mouseX - 50, mouseY - 50, 100, 100);
}
  
function cambiarEstado() {
  if (estado == 0) { // Si estoy en el inici0
    estado = 1; // Pasa al estado 1
    sonido.loop(); // Comienza el sonido
    video.loop(); // Comienza el video
  } else if (estado == 1) { // Si estoy en la presentacion
    estado = 2; // Pasa al estado 2
  }
}
  function keyPressed() {
  let frases = ["EL OJO TODO LO VE", "KONSTRUKT", "FUTURO Y PODER", "Делать искусство"];
    fraseActual= frases[floor(random(frases.length))];
  }
