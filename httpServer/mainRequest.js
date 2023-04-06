import http from "http";
import fs from "fs";
import mysql from "mysql";
import htmlBox from "../htmlBox.js";
import ValueCheck from "../ValueCheck.js";
import { parse } from "path";
import callMain from "./callMain.js";
import cmServer from "./commonServer.js";
import signupResult from "./signupResultRoute.js";
import dupCheck from "./dupCheckRoute.js";
import callPostImage from "./callPostImage.js";
import callPostLogin from "./callPostLogin.js";
import callPostDangMap from "./callPostDangMap.js";

import callLoginGet from "./callLoginGet.js";
import dangMapServer from "./dangMapServer.js";
import myPage from "./myPage.js";


// import mapMerker from "./mapMerker.js";
// import markerJson from "./markerJson.json" assert { type: "json" };

//db 연동이 되어있으니 아래 테이블을 따로 만들 필요 없음
// 집에서 수정하려면 만들어야함
/* 필요한 테이블 이름 : [
  CREATE TABLE userinfo(
    id varchar(20),
    PW varchar(20),
    question int,
    answer varchar(20),
    dogName varchar(20),
    dogGender int,

    primary key(id)
  );
  CREATE TABLE map_tables(
    latitude decimal(17,14),
    longitude decimal(17,14)
  )
]*/

const mysqlInfo = {
  host: "192.168.0.93",
  user: "guest",
  password: "0000",
  database: "mungta",
};

const server = http.createServer(function (request, response) {
  //로그인
  let body = "";
  if (request.method === "GET") {
    callLoginGet(request, response);

    //메인화면
    callMain(request, response);
    //회원가입
    let splitURLbyJin = request.url.split("/")[1];
    if (splitURLbyJin === "signUp") {
      response.writeHead(200);
      response.write(htmlBox.htmlFunc(htmlBox.signupPage));
      response.end();
    }
    if (splitURLbyJin === "signupstyle.js") {
      cmServer.fileDirectory(`signup.js`, response);
    }
    if (splitURLbyJin === "signupResultStyle.js") {
      cmServer.fileDirectory(`signupResult.js`, response);
    }
    if (splitURLbyJin === "favicon") {
      cmServer.fileDirectory(`graphic/dogpaw.png`, response);
    }
    if (request.url.startsWith("/dupCheck")) {
      dupCheck(request, response);
    }

    //댕맵
    dangMapServer(request, response);

    //마이페이지
    myPage(request, response);
  }

  // post request
  if (request.method === 'POST') {

    //업로드, 유저 이미지
    callPostImage(request, response);

    //댕맵 - 지도에 발자국 표시, 발자국 드래그
    callPostDangMap(request, response);
    callPostLogin(request, response);
    if (request.url.startsWith("/signUpResult")) {
      signupResult(request, response)
    }
  }
}
);


// 서버 포트 설정
server.listen(2080, function (error) {
  if (error) {
    console.error("서버 안돌아감");
  } else {
    console.log("서버 돌아감");
  }
});
