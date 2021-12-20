import express  from "express";
import {selectSql} from "../database/sql";
//모듈 사용 

const router = express.Router();

router.get('/',async function(req,res) { //'/'는 '/select'를 의미 
    const airport = await selectSql.getAirport();
    const flight = await selectSql.getFlight();
    const flight_leg = await selectSql.getFlight_leg();
    res.render('select',{ //select.hbs를 호출
        title : '공항, 항공기, 항공편 정보',
    
        airport,
        flight,
        flight_leg
    });
});

module.exports = router;