
import express from "express";
import logger from "morgan";
import path from "path";
//모듈을 불러온다. 

import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import userselectRouter from "../routes/userselect";
import userdeleteRouter from "../routes/userdelete";
import deleteRouter from "../routes/delete";
import updateRouter from "../routes/update";
import insertRouter from "../routes/insert";
//폴더의 위치를 명시하여 해당 파일을 참조
const PORT = 3000;

const app = express();
//app이라는 객체 이름으로 명명 

app.use(express.urlencoded({extended : false }));
app.use(express.json());
//데이터 다루기 편하기위해서

app.set('views',path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
//hbs사용

app.use(logger("dev"));

app.use('/',loginRouter); //홈화면
app.use('/select', selectRouter);
app.use('/delete',deleteRouter); 
app.use('/update',updateRouter); 
app.use('/insert',insertRouter); 
app.use('/userselect',userselectRouter); 
app.use('/userdelete',userdeleteRouter);

app.listen(PORT, () => { //서버 실행
    console.log(`Example app listening at http://localhost:${PORT}`)
})