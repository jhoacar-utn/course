import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types';
import dataDiary from './data.json'

const diaries: DiaryEntry[] = dataDiary as DiaryEntry[];

export const getEntries = () => diaries;

export const getEntryById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find( d => d.id === id);
    if(entry){
        const {comment, ...restOfEntry} = entry;
        return restOfEntry; 
    }
    return undefined;
}

export const getEntiresWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
};

export const addDiary = (newDiaryEntry:NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
 diaries.push(newDiary)
 return newDiary;
};