import express from 'express';
import {PORT} from './config.jsx';
const app = express();

app.listen(PORT)
console.log(`This is my ${PORT}`);
