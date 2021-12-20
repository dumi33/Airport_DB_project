import express from "express";
import { selectSql,deleteSql } from "../database/sql";

const router = express.Router();

//기존값 불러오기 
router.get('/',async(req,res) => { // get -> 데이터를 보여준다. //localhost:3000/delete
    const seat_reservation = await selectSql.getSeat_reservation();
    res.render('deleteSeat_reservation',{
        title : "예약 정보 삭제",
        seat_reservation
    })
});


router.post ('/', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.delBtn);
    const data = {  // 입력받은 name을 data.Seat_number에 저장
        Seat_number : vars.delBtn 
    };
    await deleteSql.deleteSeat_reservation(data);  // data를 인수로 deleteStudent를 실행 
    
    res.redirect ('/userdelete'); //localhost:3000/userdelete // 반영되었는지 바로 확인 가능
});

module.exports = router;