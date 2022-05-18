
import { Animals } from './animals/Animals';

import Shark from './acuatics/Shark';
import Dolphin from './acuatics/Dolphin';

const acuaticAnimals: Animals.Acuatic[] = [];

acuaticAnimals.push(new Shark());
acuaticAnimals.push(new Dolphin());
acuaticAnimals.push({
    swim: function (s: string): boolean {
        return true;
    },
    toString: function():string{
        return "Otro objeto"
    }
});

function imprimir<AnyType>(element: AnyType): void {
    console.log(`${element}`)
}

acuaticAnimals.map((element)=>{
    imprimir(element);
})