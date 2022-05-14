enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

const workedDays: number[] = [Days.Monday];


const addDay = (myDays:number[], ...days: number[]):number =>{

    console.log(...days);
    return myDays.push(...days);
}


console.log(workedDays);

console.log(addDay(workedDays, Days.Tuesday, Days.Wednesday, Days.Thursday));

console.log(workedDays);




