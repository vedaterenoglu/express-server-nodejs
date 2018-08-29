/*
We import express as well as our router and then we add the body parser and router to express and specify which port (in this example port 4200) we want to run on.
*/

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', router);

app.listen(4200, function () {
    console.log('app listening on port 4200!')
});