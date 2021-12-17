const log = console.log;

class Suma {
  constructor() {
    this.timeInterval = 1000;
    this.saveTimeInterval = this.timeInterval;
    this.puntos = 0;
    this.repreguntarNombre();
    this.render();
  }

  repreguntarNombre() {
    this.nombre = prompt("Ingresa tu nombre");
    if (!this.nombre) {
      thisrepreguntarNombre();
    }
  }
  preguntarNombre() {
    console.log("Un gusto " + this.nombre);
    return false;
  }

  render() {
    this.aNumber = Math.floor(Math.random() * 1000);
    this.bNumner = Math.round(Math.random() * 1000);
    const timing = document.getElementById("time");
    this.seconds = 0;
    const level = document.querySelector("#level");
    level.textContent = `Nivel: ${this.puntos}`;
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      timing.textContent = "Tiempo: " + this.seconds++ + "/30";
      if (this.seconds > 30) {
        clearInterval(this.intervalo);
        this.flag = true;
      }
    }, this.timeInterval);
    this.flag = false;
    this.renderAsk();
    this.renderAnwers();
  }

  renderAsk() {
    const Ask = document.querySelector(".Q");
    Ask.textContent = `Rápido, ¿cuánto es ${this.aNumber}+ ${this.bNumner}?`;
  }

  renderAnwers() {
    this.allButtons = document.querySelectorAll(".button");
    this.result = this.aNumber + this.bNumner;
    const correctAnswer = Math.floor(Math.random() * this.allButtons.length);
    log(`Respuesta: ${correctAnswer}`);
    for (let i = 0; i < this.allButtons.length; i++) {
      if (correctAnswer != i) {
        this.allButtons[i].textContent = Math.round(
          Math.random() * this.result
        );
      } else {
        this.allButtons[i].textContent = this.result;
      }
    }
  }

  reset() {
    log("Hola");
    this.render();
  }

  verifyAnswer(button) {
    if (this.flag == false) {
      this.flag = true;
      clearInterval(this.intervalo);
      if (parseInt(button.textContent) == this.result) {
        button.textContent = "Correcto";
        this.puntos++;
        this.timeInterval = -Math.pow(this.puntos, 2) + this.saveTimeInterval;
      } else {
        button.textContent = "Incorrecto";
        clearTimeout(this.autoreset);
        this.autoreset = setTimeout(() => {
          this.reset();
        }, 3000);
      }
    }
  }
}

const suma = new Suma();

const resetQuiz = document.getElementById("reset");
resetQuiz.addEventListener("click", () => {
  suma.render();
});

suma.allButtons.forEach((b) =>
  b.addEventListener("click", () => {
    suma.verifyAnswer(b);
  })
);
