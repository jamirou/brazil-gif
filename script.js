function mostrarGif() {
  const gif = document.getElementById("gif-footer");
  if (gif.style.display === "none" || gif.style.display === "") {
    gif.style.display = "block";
    gif.style.opacity = 0;
    setTimeout(() => {
      gif.style.transition = "opacity 1s ease";
      gif.style.opacity = 1;
    }, 50);
  } else {
    gif.style.transition = "opacity 1s ease";
    gif.style.opacity = 0;
    setTimeout(() => {
      gif.style.display = "none";
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h1");
  titulo.style.opacity = 0;
  titulo.style.transform = "translateY(-20px)";
  setTimeout(() => {
    titulo.style.transition = "all 1s ease";
    titulo.style.opacity = 1;
    titulo.style.transform = "translateY(0)";
  }, 300);

  const mensaje = document.querySelector(".mensaje-cumple");
  if (mensaje) {
    mensaje.style.opacity = 0;
    mensaje.style.transform = "translateY(20px)";
    setTimeout(() => {
      mensaje.style.transition = "all 1.5s ease";
      mensaje.style.opacity = 1;
      mensaje.style.transform = "translateY(0)";
    }, 800);
  }

  // Crear partículas de brillo
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = (Math.random() * 5) + 's';
  }

  // Cargar animación de Lottie del regalo
  var animation = lottie.loadAnimation({
      container: document.getElementById('gift-container'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/gift-box.json'
  });

  // Cuando termine la animación, mostrar sorpresa
  animation.addEventListener('complete', function() {
      document.getElementById('gift-container').style.display = 'none';
      document.body.innerHTML += `
        <div style="text-align:center; margin-top:50px;">
          <h1>🎊 ¡Sorpresa especial, Fer! 🎊</h1>
          <p>Que tu día esté lleno de amor, alegría y miles de bendiciones. 🎂💖</p>
        </div>
      `;
  });

  const btnEnviarDeseo = document.getElementById('btn-enviar-deseo');
  btnEnviarDeseo.addEventListener('click', () => {
    const input = document.getElementById('input-deseo');
    const deseo = input.value.trim();
    if (deseo !== "") {
      const contenedorDeseo = document.getElementById('deseo-mostrado');
      contenedorDeseo.textContent = `🎂 "${deseo}" 🎉`;
      input.value = "";
    }
  });
});

document.addEventListener("click", (e) => {
  const emojis = ["🤍", "🎉", "❤️", "🥳"];
  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    const randomSize = 22 + Math.random() * 6; // Size between 22px and 28px
    emoji.style.fontSize = `${randomSize}px`;
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = 10;
    emoji.style.filter = "drop-shadow(0 0 8px white)";
    document.body.appendChild(emoji);

    const deltaX = (Math.random() - 0.5) * 200;
    const deltaY = (Math.random() - 0.5) * 200;
    emoji.animate([
      { transform: "scale(0.5) translate(0, 0)", opacity: 1 },
      { transform: "scale(1.2) translate(20px, -20px)", opacity: 1 },
      { transform: `scale(1) translate(${deltaX}px, ${deltaY}px)`, opacity: 0 }
    ], {
      duration: 1200 + Math.random() * 500,
      easing: "ease-out"
    });

    setTimeout(() => {
      emoji.remove();
    }, 1500);
  }
});

// ==== Reloj Chile y Brasil ====
function crearReloj() {
  const reloj = document.createElement('div');
  reloj.id = 'reloj-mundial';
  reloj.style.position = 'fixed';
  reloj.style.bottom = '20px';
  reloj.style.right = '20px';
  reloj.style.background = 'rgba(0, 0, 0, 0.5)';
  reloj.style.padding = '10px 20px';
  reloj.style.borderRadius = '12px';
  reloj.style.color = '#fff';
  reloj.style.fontFamily = "'Poppins', 'Roboto', sans-serif";
  reloj.style.fontWeight = '300';
  reloj.style.fontSize = '1em';
  reloj.style.letterSpacing = '0.5px';
  reloj.style.textShadow = '1px 1px 2px rgba(255,255,255,0.3)';
  reloj.style.boxShadow = '0 0 10px #000';
  reloj.style.zIndex = 20;
  document.body.appendChild(reloj);

  function actualizarHora() {
    const ahoraChile = new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const ahoraBrasil = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit' });

    reloj.innerHTML = `
      <div style="margin-bottom:5px;">
        🇧🇷 <strong>Fer:</strong> ${ahoraBrasil}
      </div>
      <div>
        🇨🇱 <strong>Jamir:</strong> ${ahoraChile}
      </div>
    `;
  }

  actualizarHora();
  setInterval(actualizarHora, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  crearReloj();
});

// ==== Gatos corriendo ====
function crearGatoCorriendo() {
  const gato = document.createElement('img');
  
  // Diferentes opciones de gatos
  const gatosDisponibles = [
    "https://i.gifer.com/PYn.gif",
    "https://i.gifer.com/y2.gif", 
    "https://i.gifer.com/nUq.gif"
  ];
  
  gato.src = gatosDisponibles[Math.floor(Math.random() * gatosDisponibles.length)];
  gato.style.position = 'fixed';
  gato.style.height = '80px';
  gato.style.zIndex = 5;
  gato.style.pointerEvents = 'none';

  const direccion = Math.random() > 0.5 ? 'izquierda' : 'derecha';
  const posicionVertical = Math.random() * (window.innerHeight - 100); // Para variar la altura

  if (direccion === 'izquierda') {
    gato.style.left = '-100px';
    gato.style.top = `${posicionVertical}px`;
    gato.style.transform = 'scaleX(1)';
    document.body.appendChild(gato);

    gato.animate([
      { transform: 'translateX(0) scaleX(1)' },
      { transform: `translateX(${window.innerWidth + 200}px) scaleX(1)` }
    ], {
      duration: 7000,
      easing: 'linear'
    });

  } else {
    gato.style.right = '-100px';
    gato.style.top = `${posicionVertical}px`;
    gato.style.transform = 'scaleX(-1)';
    document.body.appendChild(gato);

    gato.animate([
      { transform: 'translateX(0) scaleX(-1)' },
      { transform: `translateX(-${window.innerWidth + 200}px) scaleX(-1)` }
    ], {
      duration: 7000,
      easing: 'linear'
    });
  }

  setTimeout(() => {
    gato.remove();
  }, 7000);
}

setInterval(crearGatoCorriendo, 15000); // Un gato nuevo cada 15 segundos