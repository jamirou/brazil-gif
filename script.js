// ==== Mensajes aleatorios flotando ====
const mensajesBonitos = [
  "🌸 ¡Eres increíble, Fer!",
  "💖 ¡Sigue brillando como siempre!",
  "✨ ¡Que todos tus sueños se cumplan!",
  "🎂 ¡Hoy es tu día especial!",
  "🥰 ¡Eres alguien especial!",
  "🌟 ¡Fer, eres un ser de luz!",
  "🎉 ¡A celebrar esta vida hermosa!",
  "🤍 ¡tqm Fer",
  "🥺 ¡Te mereces todo lo lindo del mundo!"
];

function mostrarMensajeFlotante() {
  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje-flotante');
  mensaje.textContent = mensajesBonitos[Math.floor(Math.random() * mensajesBonitos.length)];

  // Aparecer en un lugar aleatorio
  mensaje.style.position = 'fixed';
  mensaje.style.top = `${Math.random() * 80 + 10}%`; // margen de 10% arriba y abajo
  mensaje.style.left = `${Math.random() * 80 + 10}%`; // margen de 10% izquierda y derecha
  mensaje.style.opacity = '0';
  mensaje.style.transition = 'opacity 1s ease, transform 1s ease';
  mensaje.style.transform = 'scale(0.8)';
  const colores = [
    '#FFFFFF', // blanco puro
    '#FFE066', // amarillo suave
    '#FF8C94', // rosado coral
    '#FFD3B6', // durazno claro
    '#D291BC', // lavanda suave
    '#B5EAD7', // verde menta claro
    '#FFB6B9'  // rosado pastel
  ];
  mensaje.style.color = colores[Math.floor(Math.random() * colores.length)];
  mensaje.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)';

  document.body.appendChild(mensaje);

  // Activar la animación
  setTimeout(() => {
    mensaje.style.opacity = '1';
    mensaje.style.transform = 'scale(1)';
  }, 100);

  // Luego de un tiempo, desaparecer
  setTimeout(() => {
    mensaje.style.opacity = '0';
    mensaje.style.transform = 'scale(1.2)';
  }, 4000);

  // Finalmente eliminar el elemento
  setTimeout(() => {
    mensaje.remove();
  }, 5000);
}

// Mostrar un mensaje cada 5 segundos
setInterval(mostrarMensajeFlotante, 5000);
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


  const formularioDeseo = document.getElementById('form-deseo');
  const mensajeExito = document.getElementById('mensaje-exito');

  if (formularioDeseo) {
    formularioDeseo.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita redirección

      const inputDeseo = document.getElementById('input-deseo');
      const deseo = inputDeseo.value.trim();
      if (deseo === "") return;

      // Enviar a FormSubmit en segundo plano
      fetch('https://formsubmit.co/devjamiro@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `deseo=${encodeURIComponent(deseo)}&_captcha=false&_next=/`
      });

      // Mostrar el mensaje de éxito de inmediato
      const mensajeExito = document.getElementById('mensaje-exito');
      mensajeExito.textContent = '🎉 ¡Deseo enviado con amor! 🎉';
      mensajeExito.style.opacity = '1';
      mensajeExito.style.display = 'block';
      mensajeExito.style.transition = 'opacity 1s ease';

      setTimeout(() => {
        mensajeExito.style.opacity = '0';
        setTimeout(() => {
          mensajeExito.style.display = 'none';
          mensajeExito.textContent = '';
        }, 1000);
      }, 3000);

      // Limpiar el input
      inputDeseo.value = "";

      // Mostrar popup bonito
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
      overlay.style.display = 'flex';
      overlay.style.flexDirection = 'column';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '9999';

      const mensajePopup = document.createElement('div');
      mensajePopup.style.background = '#fff';
      mensajePopup.style.padding = '30px 50px';
      mensajePopup.style.borderRadius = '12px';
      mensajePopup.style.textAlign = 'center';
      mensajePopup.style.fontFamily = "'Poppins', sans-serif";
      mensajePopup.style.color = '#333';
      mensajePopup.innerHTML = `
        <h2 style="margin-bottom: 20px;">🎉 ¡Deseo enviado con éxito! 🎉</h2>
        <button id="cerrar-popup" style="padding:10px 20px; background:#76A8AD; border:none; border-radius:8px; color:white; font-size:1em; cursor:pointer;">Aceptar</button>
      `;

      overlay.appendChild(mensajePopup);
      document.body.appendChild(overlay);

      document.getElementById('cerrar-popup').addEventListener('click', () => {
        overlay.style.transition = 'opacity 0.8s ease';
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
        }, 800);
      });
    });
  }
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
  gato.style.pointerEvents = 'auto';

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

setInterval(() => {
  crearGatoCorriendo();
  if (Math.random() > 0.5) {
    setTimeout(crearGatoCorriendo, 1000); // Un segundo después, otro gato si sale "suerte"
  }
}, 8000); // Baja el intervalo a 8 segundos

// ==== Cartita secreta escondida ====
document.addEventListener("DOMContentLoaded", () => {
  const carta = document.createElement('div');
  carta.id = 'carta-secreta';
  carta.innerHTML = '📩';
  carta.style.position = 'fixed';
  carta.style.bottom = '20px';
  carta.style.left = '20px';
  carta.style.fontSize = '2em';
  carta.style.cursor = 'pointer';
  carta.style.zIndex = '1000';
  carta.title = "Haz clic para abrir una cartita secreta 🎀";
  document.body.appendChild(carta);

  carta.addEventListener('click', () => {
    const mensajeCarta = document.createElement('div');
    mensajeCarta.id = 'mensaje-carta';
    mensajeCarta.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.95); padding: 20px 30px; border-radius: 12px; box-shadow: 0 0 15px rgba(0,0,0,0.3); text-align: center;">
        <h2 style="font-family:'Great Vibes', cursive; font-size:2.5em; color:#FF8C94;"> Para ti, Fer 😅🤍</h2>
        <p style="font-family:'Poppins', sans-serif; font-size:1.2em; color:#555; margin-top:10px;">Cada momento contigo es una bendición. Nunca olvides lo especial que eres ✨🥺</p>
        <button id="cerrar-carta" style="margin-top:20px; padding:10px 20px; background:#76A8AD; color:white; border:none; border-radius:8px; cursor:pointer; font-family:'Poppins', sans-serif;">Cerrar 🤍</button>
      </div>
    `;
    mensajeCarta.style.position = 'fixed';
    mensajeCarta.style.top = '50%';
    mensajeCarta.style.left = '50%';
    mensajeCarta.style.transform = 'translate(-50%, -50%)';
    mensajeCarta.style.zIndex = '9999';
    document.body.appendChild(mensajeCarta);

    // document.getElementById('cerrar-carta').addEventListener('click', () => {
    //   mensajeCarta.style.transition = 'opacity 0.8s ease';
    //   mensajeCarta.style.opacity = '0';
    //   setTimeout(() => {
    //     mensajeCarta.remove();
    //   }, 800);
    // });
  });
});

// ==== Cierre global de cartita secreta ====
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'cerrar-carta') {
    const mensajeCarta = document.getElementById('mensaje-carta');
    if (mensajeCarta) {
      mensajeCarta.style.transition = 'opacity 0.8s ease';
      mensajeCarta.style.opacity = '0';
      setTimeout(() => {
        mensajeCarta.remove();
      }, 800);
    }
  }
});

// ==== Click en los gatitos para ponerles nombre ====
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG' && e.target.src.includes('gifer.com')) {
    const overlayNombre = document.createElement('div');
    overlayNombre.style.position = 'fixed';
    overlayNombre.style.top = '0';
    overlayNombre.style.left = '0';
    overlayNombre.style.width = '100vw';
    overlayNombre.style.height = '100vh';
    overlayNombre.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlayNombre.style.display = 'flex';
    overlayNombre.style.flexDirection = 'column';
    overlayNombre.style.alignItems = 'center';
    overlayNombre.style.justifyContent = 'center';
    overlayNombre.style.zIndex = '9999';
    overlayNombre.id = 'popup-nombre-gato';

    const contenido = document.createElement('div');
    contenido.style.background = '#fff';
    contenido.style.padding = '30px 40px';
    contenido.style.borderRadius = '12px';
    contenido.style.textAlign = 'center';
    contenido.style.fontFamily = "'Poppins', sans-serif";
    contenido.style.color = '#333';
    contenido.innerHTML = `
      <h2 style="margin-bottom: 20px;">🐾 Ponle un nombre a este gatito</h2>
      <input type="text" id="nombre-gato" placeholder="Escribe un nombre..." style="padding:10px; width:80%; max-width:250px; margin-bottom:20px; border-radius:8px; border:1px solid #ccc; font-size:1em;">
      <br>
      <button id="enviar-nombre-gato" style="padding:10px 20px; background:#76A8AD; border:none; border-radius:8px; color:white; font-size:1em; cursor:pointer;">Bautizar</button>
      <br><br>
      <button id="cancelar-nombre-gato" style="padding:8px 16px; background:#ccc; border:none; border-radius:8px; font-size:0.9em; cursor:pointer;">Cancelar</button>
    `;

    overlayNombre.appendChild(contenido);
    document.body.appendChild(overlayNombre);

    document.getElementById('enviar-nombre-gato').addEventListener('click', () => {
      const nombre = document.getElementById('nombre-gato').value.trim();
      if (nombre) {
        contenido.innerHTML = `
          <h2 style="color:#76A8AD;">🎉 ¡Ahora este gatito se llama ${nombre}! 🎉</h2>
        `;
        setTimeout(() => {
          overlayNombre.style.opacity = '0';
          setTimeout(() => {
            overlayNombre.remove();
          }, 800);
        }, 2500);
      }
    });

    document.getElementById('cancelar-nombre-gato').addEventListener('click', () => {
      overlayNombre.style.opacity = '0';
      setTimeout(() => {
        overlayNombre.remove();
      }, 800);
    });
  }
});