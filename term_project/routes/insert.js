import express  from "express";
import {insertSql,selectSql } from "../database/sql";
//삽입관련 모듈 (insertSql)

const router = express.Router();

router.get('/',(req,res)=> {
    res.render('insert'); //insert.hbs를 웹브라우져에 출력
});

router.post('/',(req,res)=>{
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; //넘어오는 data의 개수로 구분

    if(var_lenth == 2){
        const data = { // data 객체 
            Flight_number : vars.flight_number,
            Airline : vars.airline
        };
        insertSql.setFlight(data);
    }
    else if(var_lenth == 3){ // 3이라면 airport 
        const data ={ // data 객체 
            Airport_code : vars.airport_code,
            Name : vars.name,
            City : vars.city
        };
        insertSql.setAirport(data); // data를 airport로 설정 
    }
    else{
        const data = { // data 객체 
            Flight_no : vars.flight_no,
            Leg_no :  vars.leg_no,
            Departure_airport_code : vars.departure_airport_code,
            Arrival_airport_code : vars.arrival_airport_code,
            Departure_time : vars.daparture_time,
            Arrival_time : vars. arrival_time
        };
        insertSql.setFlight_leg(data);
    }
    res.redirect('/select'); //입력후 새로고침 (같은 주소로 )
})
module.exports = router;