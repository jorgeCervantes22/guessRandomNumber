import { InitialGame } from "../service.js";
export class Operation{
    generateRandomNumber(){
        const min = Math.ceil(0);
        const max = Math.floor(100);
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        return random
    }
    async guessRandom(level, random) {
        const initialGame = new InitialGame()
        let trys = 1;
        let clientNumber;
        do {
          clientNumber = await initialGame.getCLI("Ingrese un numero: ");
          if (clientNumber == random) {
            console.log("¡¡¡FELICIDADES, HAZ ADIVINADO!!!");
            console.log(`Haz adivinado en: ${trys} intentos`)
            console.log("Vamos de nuevo");
            return await initialGame.startGame();
          }
          if (clientNumber < random) {
            console.log(`UPS...El numero es mayo a ${clientNumber}`);
            console.log("Intentelo de nuevo");
          } else {
            console.log(`UPS...El numero es menor a ${clientNumber}`);
            console.log("Intentelo de nuevo");
          }
          trys = trys + 1;
        } while (trys <= level);
        console.log('¡¡¡PERDISTE!!!')
        console.log(`EL numero era: ${random}`)
        console.log("Vamos de nuevo");
        await initialGame.startGame()
      }
}