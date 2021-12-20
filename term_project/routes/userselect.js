import express  from "express";
import {selectSql} from "../database/sql";
//모듈 사용 

const router = express.Router();

router.get('/',async function(req,res) { //'/'는 '/select'를 의미 
    const seat_reservation = await selectSql.getSeat_reservation();
    res.render('userselect',{ //userselect.hbs를 호출
        title : '예약정보',
        seat_reservation
    });
});

module.exports = router;