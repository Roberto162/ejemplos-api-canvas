function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  // Limpia todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =============================
  // RECTÁNGULO RELLENO
  // =============================
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);

  ctx.clearRect(45, 45, 60, 60);

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // =============================
  // TRIÁNGULO
  // =============================
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(200, 150);
  ctx.lineTo(200, 50);
  ctx.closePath();
  ctx.fillStyle = "#f97316";
  ctx.fill();

  // =============================
  // CARITA CON arc()
  // =============================
  ctx.beginPath();

  // Círculo externo
  ctx.arc(300, 100, 50, 0, Math.PI * 2, true);

  // Boca
  ctx.moveTo(335, 100);
  ctx.arc(300, 100, 35, 0, Math.PI, false);

  // Ojo izquierdo
  ctx.moveTo(290, 90);
  ctx.arc(285, 90, 5, 0, Math.PI * 2, true);

  // Ojo derecho
  ctx.moveTo(320, 90);
  ctx.arc(315, 90, 5, 0, Math.PI * 2, true);

  ctx.strokeStyle = "#1e293b";
  ctx.lineWidth = 2;
  ctx.stroke();

       // Triángulo relleno
     ctx.beginPath();
    ctx.moveTo(400, 25);
    ctx.lineTo(480, 25);
    ctx.lineTo(400, 105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(500, 125);
    ctx.lineTo(500, 45);
    ctx.lineTo(420, 125);
    ctx.closePath();
    ctx.stroke();


    //varios circulos
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 550 + j * 26; // Coordenada x
        const y = 30 + i * 26; // Coordenada y
        const radius = 10; // Radio del Arco
        const startAngle = 0; // Punto inicial del Círculo
        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }

    // Ejemplo de curvas cuadráticas
    ctx.beginPath();
    ctx.moveTo(75, 175);
    ctx.quadraticCurveTo(25, 175, 25, 212.5);
    ctx.quadraticCurveTo(25, 250, 50, 250);
    ctx.quadraticCurveTo(50, 270, 30, 275);
    ctx.quadraticCurveTo(60, 270, 65, 250);
    ctx.quadraticCurveTo(125, 250, 125, 212.5);
    ctx.quadraticCurveTo(125, 175, 75, 175);
    ctx.stroke();


     // Ejemplo de curvas cúbicas
    ctx.beginPath();
    ctx.moveTo(250, 190);
    ctx.bezierCurveTo(250, 187, 245, 175, 225, 175);
    ctx.bezierCurveTo(195, 175, 195, 212.5, 195, 212.5);
    ctx.bezierCurveTo(195, 230, 215, 252, 250, 270);
    ctx.bezierCurveTo(285, 252, 305, 230, 305, 212.5);
    ctx.bezierCurveTo(305, 212.5, 305, 175, 275, 175);
    ctx.bezierCurveTo(260, 175, 250, 187, 250, 190);
    ctx.fill();

    //Pac - man
    const offsetX = 320;
    const offsetY = 160;

    roundedRect(ctx, 12 + offsetX, 12 + offsetY, 150, 150, 15);
    roundedRect(ctx, 19 + offsetX, 19 + offsetY, 150, 150, 9);
    roundedRect(ctx, 53 + offsetX, 53 + offsetY, 49, 33, 10);
    roundedRect(ctx, 53 + offsetX, 119 + offsetY, 49, 16, 6);
    roundedRect(ctx, 135 + offsetX, 53 + offsetY, 49, 33, 10);
    roundedRect(ctx, 135 + offsetX, 119 + offsetY, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37 + offsetX, 37 + offsetY, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31 + offsetX, 37 + offsetY);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16 + offsetX, 35 + offsetY, 4, 4);
    }

    for (let i = 0; i < 6; i++) {
      ctx.fillRect(115 + offsetX, 51 + i * 16 + offsetY, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16 + offsetX, 99 + offsetY, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83 + offsetX, 116 + offsetY);
    ctx.lineTo(83 + offsetX, 102 + offsetY);
    ctx.bezierCurveTo(83 + offsetX, 94 + offsetY, 89 + offsetX, 88 + offsetY, 97 + offsetX, 88 + offsetY);
    ctx.bezierCurveTo(105 + offsetX, 88 + offsetY, 111 + offsetX, 94 + offsetY, 111 + offsetX, 102 + offsetY);
    ctx.lineTo(111 + offsetX, 116 + offsetY);
    ctx.lineTo(106.333 + offsetX, 111.333 + offsetY);
    ctx.lineTo(101.666 + offsetX, 116 + offsetY);
    ctx.lineTo(97 + offsetX, 111.333 + offsetY);
    ctx.lineTo(92.333 + offsetX, 116 + offsetY);
    ctx.lineTo(87.666 + offsetX, 111.333 + offsetY);
    ctx.lineTo(83 + offsetX, 116 + offsetY);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91 + offsetX, 96 + offsetY);
    ctx.bezierCurveTo(88 + offsetX, 96 + offsetY, 87 + offsetX, 99 + offsetY, 87 + offsetX, 101 + offsetY);
    ctx.bezierCurveTo(87 + offsetX, 103 + offsetY, 88 + offsetX, 106 + offsetY, 91 + offsetX, 106 + offsetY);
    ctx.bezierCurveTo(94 + offsetX, 106 + offsetY, 95 + offsetX, 103 + offsetY, 95 + offsetX, 101 + offsetY);
    ctx.bezierCurveTo(95 + offsetX, 99 + offsetY, 94 + offsetX, 96 + offsetY, 91 + offsetX, 96 + offsetY);

    ctx.moveTo(103 + offsetX, 96 + offsetY);
    ctx.bezierCurveTo(100 + offsetX, 96 + offsetY, 99 + offsetX, 99 + offsetY, 99 + offsetX, 101 + offsetY);
    ctx.bezierCurveTo(99 + offsetX, 103 + offsetY, 100 + offsetX, 106 + offsetY, 103 + offsetX, 106 + offsetY);
    ctx.bezierCurveTo(106 + offsetX, 106 + offsetY, 107 + offsetX, 103 + offsetY, 107 + offsetX, 101 + offsetY);
    ctx.bezierCurveTo(107 + offsetX, 99 + offsetY, 106 + offsetX, 96 + offsetY, 103 + offsetX, 96 + offsetY);
    ctx.fill();

    ctx.fillStyle = "black";

    ctx.beginPath();
    ctx.arc(101 + offsetX, 102 + offsetY, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89 + offsetX, 102 + offsetY, 2, 0, Math.PI * 2);
    ctx.fill();

// Uso de path 2d rectangulo y circulo
    const rectangle = new Path2D();
    rectangle.rect(520, 170, 50, 50);

    const circle = new Path2D();
    circle.arc(610, 195, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);


}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}


function initUI() {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  document
    .getElementById("btnRedraw")
    .addEventListener("click", draw);

  window.addEventListener("resize", draw);

  draw();
}

initUI();
