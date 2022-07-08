import { NewDiaryEntry, Visibility, Weather } from "./types";


const isString = (string: string): boolean => {
    return typeof string === 'string'
};
const isDate = (date: string): boolean =>{
    return Boolean(Date.parse(date))
}
const isWeather = (params: any): boolean =>{
    return Object.values(Weather).includes(params)
};
const isvisibility = (params: any): boolean =>{
    return Object.values(Visibility).includes(params)
};
const parseComment = (commnentFronRequest: any) =>{
    if(isString(commnentFronRequest)){
        throw new Error('Incorrect or missing commnet')
    }
    return commnentFronRequest;
};
const parseDate = ( dateFrontRequese: any) =>{
    if(!isString(dateFrontRequese) || !isDate(dateFrontRequese)){
        throw new Error("Is date is incorrect");
        
    }
    return dateFrontRequese
};
const parseWeather = (weatherFrontRequese: any): Weather => {
    if(!isString(weatherFrontRequese) || isWeather(weatherFrontRequese)){
        throw new Error("Incorrect or missing weather");
        
    }
    return weatherFrontRequese
};

const parseVisibility = (visivilityFrontRequese : any): Visibility =>{
    if(!isString(visivilityFrontRequese) || !isvisibility(visivilityFrontRequese)){
        throw new Error("Incorrect or missing visibility");
        
    }
    return visivilityFrontRequese
}

const toNewDiaryEntry = (obj:any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        date: parseDate(obj.date),
        weather: parseWeather(obj.weather),
        visibility: parseVisibility(obj.visibility),
        comment: parseComment(obj.comment)

    }
    return newEntry
}

export default toNewDiaryEntry;