import readline from "readline";
import { Operation } from "./brainOperation/operation.service.js";

export class InitialGame {
  async startGame() {
    const op = new Operation();
    let random;
    console.log(
      " --Guess Random Number--\n\n*Bienvenido*\nEl juego consta de adivinar el numero aleatorio pensado por la maquina."
    );
    const difficult = await this.getCLI(
      "Elige la dificultad con la que quieres jugar:\n- Facil (15 intentos)\n- Medio (10 intentos) \n- Dificil (5 intentos)\n"
    );
    switch (difficult) {
      case "Facil":
        random = op.generateRandomNumber();
        await op.guessRandom(15, random);
        break;
      case "Medio":
        random = op.generateRandomNumber();
        await op.guessRandom(10, random);
        break;
      case "Dificil":
        random = op.generateRandomNumber();
        await op.guessRandom(5, random);
        break;

      default:
        console.log("Eliga un nivel adecuado");
        return await this.startGame();
        break;
    }
  }

  async getCLI(query) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      rl.question(query, (answer) => {
        // Cerrar la interfaz de readline después de recibir la respuesta
        rl.close();
        // Resolver la promesa con la respuesta
        resolve(answer);
      });
    });
  }
}
const start = new InitialGame();
start.startGame();
