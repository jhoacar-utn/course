import express from 'express';
import 'dotenv/config';
import api from './routes/api';
import web from './routes/web';

const app = express();

const PORT = process.env.PORT || 4000;

app.use("/api/v1",api);
app.use("/",web);

app.listen(PORT,()=>{
    console.log(`Server is listenning on http://localhost:${PORT}`);
});