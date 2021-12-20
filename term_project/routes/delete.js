import express from "express";
import { selectSql,deleteSql } from "../database/sql";

const router = express.Router();

//기존값 불러오기 
router.get('/airport',async(req,res) => { // get -> 데이터를 보여준다. //localhost:3000/delete/airport
    const airport = await selectSql.getAirport();
    res.render('deleteAirport',{
        title : "airport 삭제",
        airport // airport의 값 출력
    })
});
router.get('/flight',async(req,res) => { // get -> 데이터를 보여준다. //localhost:3000/delete/flight
    const flight = await selectSql.getFlight();
    res.render('deleteFlight',{
        title : "flight 삭제",
        flight// flight의 값 출력
    })
});
router.get('/flight_leg',async(req,res) => { // get -> 데이터를 보여준다. //localhost:3000/delete/flight_leg
    const flight_leg = await selectSql.getFlight_leg();
    res.render('deleteFlight_leg',{
        title : "Flight_leg 삭제",
        flight_leg// flight_leg의 값 출력
    })
});

router.post ('/airport', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.delBtn);
    const data = {  // 입력받은 data을 data.Airport_code에 저장
        Airport_code : vars.delBtn 
    }; 
    await deleteSql.deleteAirport(data);  // data를 인수로 deleteAirport를 실행 
    
    res.redirect ('/delete/airport'); //localhost:3000/delete/airport  // 반영되었는지 바로 확인
});
router.post ('/flight', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.delBtn2);
    const data = {   // 입력받은 data을 data. Flight_number에 저장
        Flight_number: req.body.delBtn2 
    
    };
    await deleteSql.deleteFlight(data);  // data를 인수로 deleteFlight를 실행 
    
    res.redirect ('/delete/flight'); //localhost:3000/delete/flight  // 반영되었는지 바로 확인
});
router.post ('/flight_leg', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.delBtn3);
    const data = {  // 입력받은 data을 data. Leg_no에 저장
        Leg_no: req.body.delBtn3 
    
    }; 
    await deleteSql.deleteFlight_leg(data);  // data를 인수로 deleteFlignt_leg를 실행 
    
    res.redirect ('/delete/flight_leg'); //localhost:3000/delete/flight_leg // 반영되었는지 바로 확인
});
module.exports = router;