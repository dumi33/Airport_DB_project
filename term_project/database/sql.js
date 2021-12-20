import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'airline', // 본인이 만든 데이터베이스 이름
    password: 'mfsiha$33', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

export const selectSql = {
  getAirport : async () => { // airport를 출력
    const [rows] = await promisePool.query(`select * from airport`);
    return rows
  },
  getFlight : async()=>{// flight를 출력
      const [rows] = await promisePool.query(`select * from flight`);
      return rows
    },
  getFlight_leg : async()=>{// flight_leg를 출력
      const [rows] = await promisePool.query(`select * from flight_leg`);
      return rows
  },
  getUsers : async () => { // user 테이블을 출력
    const [rows] = await promisePool.query(`select * from user`);
    return rows
  },
  getSeat_reservation : async () => { // seat_reservation를 출력
    const [rows] = await promisePool.query(`select * from seat_reservation`);
    return rows
  },
}

//insert 질의
export const insertSql = { 
  setAirport : async (data) => { //파라미터로 data를 받음
      const sql = `insert into airport values(  
          "${data.Airport_code}","${data.Name}","${data.City}" )`;
          //airport에 값을 넣는다. 
          await promisePool.query(sql);
  },
  setFlight : async (data) => {//파라미터로 data를 받음
      const sql = `insert into flight values(
          "${data.Flight_number}","${data.Airline}" )`;
          //flight에 값을 넣는다. 
          await promisePool.query(sql);
  },
  setFlight_leg : async (data) => {//파라미터로 data를 받음
    const sql = `insert into flight_leg values(
        "${data.Flight_no}","${data.Leg_no}","${data.Departure_airport_code}","${data.Arrival_airport_code}" ,
      "${data.Departure_time}", "${data.Arrival_time}")`;
        //flight_leg에 값을 넣는다. 
        await promisePool.query(sql);
  },
}

//delete 질의 

export const deleteSql = { 
    deleteAirport : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteAirport :`,data.Airport_code);
        const sql = `delete from Airport where Airport_code = ${data.Airport_code} `;
        await promisePool.query(sql); //sql넘겨주기 
    },
    deleteFlight : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteFlight :`,data.Flight_number); 
        const sql = `delete from Flight where Flight_number = ${data.Flight_number}`; // data의 Flight_number을 기존의 Flight_number 과 비교해서 동일한 것은 삭제하는 구문 
        await promisePool.query(sql); //sql넘겨주기 
    },
    deleteFlight_leg : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteFlight_leg :`,data.Leg_no); 
        const sql = `delete from Flight_leg where Leg_no = ${data.Leg_no} `; // data의 Leg_no을 기존의 Leg_no 과 비교해서 동일한 것은 삭제하는 구문 
        await promisePool.query(sql); //sql넘겨주기 
    },
    deleteSeat_reservation : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteSeat_reservation :`,data.Seat_number); 
        const sql = `delete from Seat_reservation where Seat_number = ${data.Seat_number} `; // data의 Seat_number을 기존의 Seat_number 과 비교해서 동일한 것은 삭제하는 구문 
        await promisePool.query(sql); //sql넘겨주기 
    },
}    

export const updateSql = { //where 조건에 만족하는 행이 update
  updateAirport : async (data) => { // 조건 설정
      const sql = `update airport set city = ${data.City} where Name = '제주국제공항'`;
      await promisePool.query(sql);

  },//where 조건에 만족하는 행이 update
  updateFlight : async (data) => { //조건 설정 
      const sql = `update flight set airline = "${data.Airline}" where Flight_number = 1`;
      await promisePool.query(sql); //sql넘겨주기 
  },
  updateFlight_leg : async (data) => { //조건 설정 
    const sql = `update Flight_leg set departure_time = "${data.Departure_time}" where Departure_airport_code = 1`;
    await promisePool.query(sql); //sql넘겨주기 
},
}  