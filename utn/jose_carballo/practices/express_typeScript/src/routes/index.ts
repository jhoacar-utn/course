import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) =>{
    res.send(diaryServices.getEntiresWithoutSensitiveInfo())
});

router.get('/:id', (req, res) => {
    const diary = diaryServices.getEntryById(+req.params.id) // '+' Air Operator tranforma un string a number 
    return diary ? res.json(diary) : res.status(404).json({msg:'Not Fount'})
});

router.post('/', (req, res) =>{
    try {
        const newDiaryEntry =  toNewDiaryEntry(req.body);
        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);
    res.json(addedDiaryEntry)
    } catch (error) {
        res.status(400).send(error)
    }
    const {date, weather, visibility, comment} = req.body;
    const newDiaryEntry = diaryServices.addDiary({date, weather, visibility, comment});
    res.json(newDiaryEntry)
});

export default router;