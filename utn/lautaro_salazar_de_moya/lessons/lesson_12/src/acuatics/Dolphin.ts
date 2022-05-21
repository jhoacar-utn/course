import { Animals } from '../animals/Animals';

export default class Dolphin implements Animals.Acuatic {
    swim(s: string): boolean {
        console.log("Dolphin swimming");
        return true;
    }
    toString(): string {
        return "Estoy como un delfin"
    }
}
