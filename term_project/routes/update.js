import express from "express";
import { selectSql,updateSql } from "../database/sql";

const router = express.Router();
//update/airport
router.get('/airport',async(req,res) => { // get -> 데이터를 보여준다. 
    const airport_res = await selectSql.getAirport();
    res.render('updateAirport',{
        title : "공항 테이블 갱신",
        airport_res
    })
});
//update/flight
router.get('/flight',async(req,res)=>{// get -> 데이터를 보여준다. 
    const flight_res = await selectSql.getFlight();
    res.render('updateFlight', {
        title : "항공기 테이블 갱신",
        flight_res
    });
});
//update/flight_leg
router.get('/flight_leg',async(req,res)=>{// get -> 데이터를 보여준다. 
    const flight_leg_res = await selectSql.getFlight_leg();
    res.render('updateFlight_leg', {
        title : "항공편 테이블 갱신",
        flight_leg_res
    });
});

router.post ('/airport', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.city);
    
    const data = {  // 입력받은 ciey을 data에 저장
        City : vars.city
    }
    await updateSql.updateAirport(data); //data를 인수로 보내 update 
    res.redirect ('/select'); //localhost:3000/select  // 반영되었는지 바로 확인 가능
});

router.post ('/flight', async (req,res)=> { // post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.airline);

    const data = {  // 입력받은 airline을 data에 저장
        Airline : vars.airline
    }

    await updateSql.updateFlight(data);
    res.redirect ('/select');
});



router.post ('/flight_leg', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.departure_time);
    
    const data = {  // 입력받은 departure_time을 data에 저장
        Departure_time : vars.departure_time
    }
    await updateSql.updateFlight_leg(data); //data를 인수로 보내 update 
    res.redirect ('/select'); //localhost:3000/select  // 반영되었는지 바로 확인 가능
});
module.exports = router;