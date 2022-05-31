import { Animals } from '../animals/Animals';

export default class Shark implements Animals.Acuatic {
    swim(s: string): boolean {
        console.log("Shark swimming");
        return true;
    }
    toString(): string {
        return "Estoy como un tiburon";
    }
}
