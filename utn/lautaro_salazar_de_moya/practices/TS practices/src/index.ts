//Basic Types
let myTypeString:string = 'Hello World!';
let myTypeNumber:number = 20;
let myTypeBoolean:boolean = true;

//Arrays
let arrayNumber:number[] =[1,2,3]
let arrayStrings:Array<string> = ['one', 'two', 'etc']

//AnyTypes
let arrayAny:any[] = [10, 'diez', 'luky']

//tuple
let tuplePlayers: [string, number, boolean] = ['Lautaro', 10 , false]

//typescript asigna el valor automaticamente, inferencia de tipos

let myVariable = true;

//unions
let myVariable3: Array<string | number > = ['sarasa', 25 ]