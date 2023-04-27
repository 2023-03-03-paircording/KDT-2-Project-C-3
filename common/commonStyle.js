const stylePropertyUnion = {
  colorTheme: {
    peach: "#F7786B",
    beige: "#F3EDE8",
    beigeTypeB : '#EBE4DF',
    beigeTypeC : '#D9D3CE',
    lightGray: "#E6E6E6",
    blue: "#2353FF",
    gray : "gray",
    black : "black",
    white: "white",
    whiteTypeA : "#F8F8F8",
    whiteTypeB : "#E6E6E6",
    whiteTypeC : "#F9F9F9",
    whiteTypeD : "#F3EDE8",

  },
  width: {
    widthP100: "100%",
    widthP95: "95%",
    widthP90: "90%",
    widthP80: "80%",
    widthP70: "70%",
    widthP60: "60%",
    widthP40: "40%",
    widthP30: "30%",
    width500: "500px",
    width450: "450px",
    width400: "400px",
    width390: "390px",
    width300: "300px",
    width288: "288px",
    width250: "250px",
    width200: "200px",
    width180: "180px",
    width150: "150px",
    width120: "120px",
    width100: "100px",
    width80: "80px",
    width90: "90px",
    width50: "50px",
    width40: "40px",
    width30: "30px",
    width25: "25px",
    width9: "9px",
    width3: "3px",
  },
  height: {
    height100vh: "100vh",
    height85vh: "85vh",
    heightP100: "100%",
    heightP90: "90%",
    heightP70: "70%",
    heightP50: "50%",
    heightP30: "30%",
    height2000: "2000px",
    height1700: "1700px",
    height1300: "1300px",
    height1000: "1000px",
    height730: "730px",
    height690: "690px",
    height500: "500px",
    height450: "450px",
    height400: "400px",
    height350: "350px",
    height308: "308px",
    height300: "300px",
    height260: "260px",
    height200: "200px",
    height154: "154px",
    height150: "150px",
    height140: "140px",
    height132: "132px",
    height130: "130px",
    height126: "126px",
    height100: "100px",
    height90: "90px",
    height70: "70px",
    height83: "83px",
    height80: "80px",
    height52: "52px",
    height50: "50px",
    height40: "40px",
    height30: "30px",
    height24: "24px",
    height9: "9px",
    height3: "3px",
  },
  flexRowCenter : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flexColCenter : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  flexRowBetweenCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  flexColumnTopCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  },
  marginTop: {
    marginTop156: "156px",
    marginTop110: "110px",
    marginTop60: "60px"
  },
  marginBottom: {
    marginBottom80: "80px",
    marginBottom50: "50px",
  },
  marginLeft:{
    marginLeft_144: "-144px",
  },
  borderRadius: {
    borderRadiusP50: "50%",
    borderRadius52: "52px",
    borderRadius15: "15px",
    borderRadius9: "9px",
  },
  fontSizeSet : {
    smaller : "12px",
    small : "16px",
    medium : "20px",
    mediumLarge : "30px",
    large : "42px"
  },
  transitionSet : {
    normal : "all ease 0.6s"
  },
  fontWeightSet : {
    thin : "200",
    regular : "400",
    bold : "700"

  },
  defaultBoxShadow: {
    ConBoxSdw: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    defBoxSdw: "0 5px 20px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.22)"
  }
}
const targetStyle = {
  
  topMenu: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height126,
    position: "relative",
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    ...stylePropertyUnion.flexRowCenter
  },
  bottomMenu: {
    width: stylePropertyUnion.width.width500,
    height: stylePropertyUnion.height.height90,
    position: "fixed",
    bottom: "0px",
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: "2"
  },
  unreadCircle: {
    width: '25px',
    height: '25px',
    ...stylePropertyUnion.flexRowCenter,
    position: "absolute",
    borderRadius : '50%',
    backgroundColor : '#2353FF',
    color : 'white',
    fontSize: "12px",
    fontWeight: "300",
    right : '-8px',
    top : '-8px'
  },
  mainRoot: {
    width: stylePropertyUnion.width.width500,
    height: stylePropertyUnion.height.height2000,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  mainWeatherBanner: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height83,
    position: "relative",
    ...stylePropertyUnion.flexRowCenter,
    backgroundColor: stylePropertyUnion.colorTheme.beige,
    fontSize: stylePropertyUnion.fontSizeSet.medium,
    fontWeight: stylePropertyUnion.fontWeightSet.bold
  },
  mainMap: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height500,
    position: "relative"
  },
  mainSlideWrap: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height260,
    position: "relative",
    overflow: "hidden",
    transition: stylePropertyUnion.transitionSet.normal
  },
  mainFindingDogs: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height690,
    position: "relative"
  },
  mainSlideCover: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.heightP100,
    position: "relative",
    overflow: "hidden"
  },
  mainSlideLeftBtn: {
    position: "absolute",
    width: stylePropertyUnion.width.width40,
    height: stylePropertyUnion.height.height40,
    backgroundColor: stylePropertyUnion.colorTheme.black,
    opacity: "0.3",
    borderRadius: "50%",
    top: "41%",
    left: "10px",
    cursor: "pointer",
    ...stylePropertyUnion.flexRowCenter,
    fontSize: stylePropertyUnion.fontSizeSet.mediumLarge,
    color: stylePropertyUnion.colorTheme.gray,
    zIndex: "1"
  },
  mainSlideRightBtn: {
    position: "absolute",
    width: stylePropertyUnion.width.width40,
    height: stylePropertyUnion.height.height40,
    backgroundColor: stylePropertyUnion.colorTheme.black,
    opacity: "0.3",
    borderRadius: "50%",
    top: "41%",
    right: "10px",
    cursor: "pointer",
    ...stylePropertyUnion.flexRowCenter,
    fontSize: stylePropertyUnion.fontSizeSet.mediumLarge,
    color: stylePropertyUnion.colorTheme.gray,
    zIndex: "1"
  },
  mainSlideDotWrap: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "10px",
    display: "flex",
    gap: "10px",
    zIndex: "1"
  },
  mainSlideDot: {
    width: stylePropertyUnion.width.width9,
    height: stylePropertyUnion.height.height9,
    borderRadius: "9px",
    backgroundColor: stylePropertyUnion.colorTheme.black,
    opacity: "0.4",
    cursor: "pointer",
    transition: stylePropertyUnion.transitionSet.normal
  },
  // loginPage

  // dangMap
  menuMapRoot: {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height100vh,
    margin : "auto",
    display : "flex",
    flexDirection : "column",
    position : "relative",
    overflow : "hidden"
  },
  menuMap: {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height85vh,
    position : "relative",
  },
  // 댕맵 하단 슬라이드 바
  menuMapSlide: {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height308,
    position: "absolute",
    backgroundColor : stylePropertyUnion.colorTheme.beigeTypeC,
    display : "flex",
    flexDirection : "column",
    justifyContent : "flex-start",
    zIndex : "1",
    bottom : "-155px"
  },

  menuMapSlideBar: {
    width : stylePropertyUnion.width.width25,
    height : stylePropertyUnion.height.height3,
    backgroundColor : stylePropertyUnion.colorTheme.gray,
    position: "absolute",
    top : "8px",
    left : "50%",
    transform: "translateX(-50%)",
  },
  menuMapSlideWrap: {
    // width: stylePropertyUnion.width.widthP100,
    // height: stylePropertyUnion.height.heightP100,
    marginTop: "18px",
    // marginLeft: "0",
    padding: "0px 10px 10px 10px",
    display: "grid",
    gridAutoFlow: "column",
    // position: "absolute",
    gridTemplateColumns: "repeat(16, 160px)",
    gridTemplateRows: "repeat(2, 110px)",
  },
  menuMapSlideItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuMapSlideUserBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection : 'column',
    width : '80%',
    height : '80%',
    backgroundColor : stylePropertyUnion.colorTheme.beigeTypeB,
    borderRadius : '10px',
    boxShadow : "0 1px 20px rgba(0,0,0,0.21), 0 1px 1px rgba(0,0,0,0.22)"
  },

  //댕맵 슬라이드 메뉴의 팔로우 검색창
  menuMapSlideSearch: {
    width : stylePropertyUnion.width.width390,
    height : stylePropertyUnion.height.height40,
    top : "5px",
    // bottom : "15px",
    left: "50%",
    position : "relative",
    marginLeft: "-195px",
    display : "flex",
    alignItems : "center",
  },
  menuMapSlideSearchBar : {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.heightP100,
    border : `1px ${stylePropertyUnion.colorTheme.lightGray} solid`,
    paddingLeft : "20px",
    paddingright : "50px",
    borderRadius : "20px",
    backgroundColor : stylePropertyUnion.colorTheme.white,
    position : "absolute"
  },
  menuMapSlideSearchButton: {
    width : stylePropertyUnion.width.width80,
    height : stylePropertyUnion.height.height30,
    borderRadius : "15px",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    position : "relative",
    left: "300px",
    color : stylePropertyUnion.colorTheme.white,
    cursor : "pointer",
    ...stylePropertyUnion.flexRowCenter,
    paddingBottom : "3px"
  },
  menuMapSlideSearchResult: {
    width : stylePropertyUnion.width.width400,
    height : stylePropertyUnion.height.height40,
    top : "5%",
    left: "10%",
    position : "relative",
    // position : "absolute",
    // marginLeft: "-195px",
    display : "flex",
    alignItems : "center",
  },
  menuMapSlideSearchResultList:{
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height40,
    cursor : "pointer",
    borderRadius : "15px",
    padding : "5px",
    paddingLeft : "20px",
    paddingRight : "20px",
    border : "0px",
    fontSize : stylePropertyUnion.fontSizeSet.small,
    // textAlign : "center"
  },
  //댕맵 남은 발자국 개수
  countFootprintBox: {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height40,
    top : "45px",
    left: "50%",
    position : "absolute",
    marginLeft: "-150px",
    zIndex : "3",
    display : "flex",
    alignItems : "center"
  },
  countFootprintText: {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.heightP100,
    border : `1px ${stylePropertyUnion.colorTheme.lightGray} solid`,
    paddingLeft : "20px",
    paddingright : "50px",
    borderRadius : "20px",
    backgroundColor : stylePropertyUnion.colorTheme.white,
    position : "absolute",
    ...stylePropertyUnion.flexRowCenter,
    justifyContent: "start",
  },
  countFootprintCount: {
    width : stylePropertyUnion.width.width80,
    height : stylePropertyUnion.height.height30,
    borderRadius : "15px",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    position : "relative",
    left : "210px",
    color : stylePropertyUnion.colorTheme.white,
    ...stylePropertyUnion.flexRowCenter,
    paddingBottom : "3px"
  },
  //댕맵 검색창
  menuMapSearchBarWrap: {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height40,
    top : "45px",
    left: "50%",
    position : "absolute",
    marginLeft: "-150px",
    zIndex : "3",
    display : "flex",
    alignItems : "center"
  },
  menuMapSearchBar : {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.heightP100,
    border : `1px ${stylePropertyUnion.colorTheme.lightGray} solid`,
    paddingLeft : "20px",
    paddingright : "50px",
    borderRadius : "20px",
    backgroundColor : stylePropertyUnion.colorTheme.white,
    position : "absolute"
  },
  menuMapSearchButton: {
    width : stylePropertyUnion.width.width80,
    height : stylePropertyUnion.height.height30,
    borderRadius : "15px",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    position : "relative",
    left : "210px",
    color : stylePropertyUnion.colorTheme.white,
    cursor : "pointer",
    ...stylePropertyUnion.flexRowCenter,
    paddingBottom : "3px"
  },
  menuMapSlideImageStyle : {
    width : stylePropertyUnion.width.width40,
    height : stylePropertyUnion.height.height40,
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    borderRadius : "50%",
    position : "relative",
    ...stylePropertyUnion.flexRowCenter,
    overflow : "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  menuMapSlideImageWrapStyle : {
    width : '44px',
    height : '44px',
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    borderRadius : "50%",
    position : "relative",
    ...stylePropertyUnion.flexRowCenter,
    overflow : "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  menuMapSlideTextStyle : {
    fontSize : '15px'
  },

  //회원가입 결과창
  signupResultRoot: {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height1000,
    margin : "auto",
    ...stylePropertyUnion.flexColCenter,
    position : "relative",
    backgroundColor : stylePropertyUnion.colorTheme.beige,
  },
  signupResultWrap: {
    width : stylePropertyUnion.width.width450,
    padding : stylePropertyUnion.height.height30,
    borderRadius : "10px",
    display : "flex",
    flexDirection : "column",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    gap : "10px",
    boxShadow : "0 5px 20px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.22)",
    color : stylePropertyUnion.colorTheme.white,
    // fontSize : "23px",
    fontSize : stylePropertyUnion.fontSizeSet.medium,
    fontWeight : stylePropertyUnion.fontWeightSet.bold
  },
  signupResultMent: {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height70,
    position : "relative",
    ...stylePropertyUnion.flexRowCenter
  },
  signupResultBackBtn: {
    color : stylePropertyUnion.colorTheme.black,
    fontSize : stylePropertyUnion.fontSizeSet.medium,
    cursor : "pointer",
    backgroundColor : stylePropertyUnion.colorTheme.white,
    borderRadius : "10px",
    boxShadow : "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"

  },
    // signUp
    signUpMain: {
      width : stylePropertyUnion.width.width500,
        height : stylePropertyUnion.height.height1000,
        margin : "auto",
        flexDirection : "column",
        position : "relative",
        backgroundColor : stylePropertyUnion.colorTheme.beige,
        ...stylePropertyUnion.flexRowCenter,
    },
    signUpContainer: {
      width : stylePropertyUnion.width.width450,
      padding : "30px",
      borderRadius : "10px",
      display : "flex",
      position: "relative",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : stylePropertyUnion.colorTheme.peach,
      gap : "2px",
      boxShadow : stylePropertyUnion.defaultBoxShadow.ConBoxSdw
    },
    signUpListBox: {
      width : stylePropertyUnion.width.width300,
      height : stylePropertyUnion.height.height70,
      position : "relative",
      ...stylePropertyUnion.flexRowCenter,
      flexWrap : "wrap"
    },
    signUpTitle: {
      color : stylePropertyUnion.colorTheme.white,
      fontSize : stylePropertyUnion.fontSizeSet.large,
      fontWeight : stylePropertyUnion.fontWeightSet.bold
    },
    signUpListWithoutID: {
      width : stylePropertyUnion.width.width300,
      height : stylePropertyUnion.height.height40,
      cursor : "pointer",
      borderRadius : "10px",
      padding : "5px",
      paddingLeft : "20px",
      paddingRight : "20px",
      border : "0px",
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    },
    signUpListID: {
      width : stylePropertyUnion.width.width200,
      height : stylePropertyUnion.height.height40,
      cursor : "pointer",
      borderRadius : "10px",
      padding : "5px",
      paddingLeft : "20px",
      paddingRight : "20px",
      border : "0px",
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    },
    signUpDupCheck: {
      width : stylePropertyUnion.width.width90,
      height : stylePropertyUnion.height.height40,
      marginLeft : "10px",
      fontSize : stylePropertyUnion.fontSizeSet.small,
      cursor : "pointer",
      ...stylePropertyUnion.flexRowCenter,
      borderRadius : "10px",
      padding : "5px",
      border : "0px",
      backgroundColor : stylePropertyUnion.colorTheme.white,
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    },
    signUpDupCheckModal: {
      width : stylePropertyUnion.width.width300,
      height : stylePropertyUnion.height.height140,
      padding : "10px",
      borderRadius : "10px",
      flexDirection : "column",
    ...stylePropertyUnion.flexRowCenter,
      backgroundColor : stylePropertyUnion.colorTheme.beige,
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
      position : "absolute",
      top : "16%",
      left: "50%",
      gap : "30px",
      marginLeft: "-150px",
    },
    signUpOKBtn: {
      width : stylePropertyUnion.width.width90,
      height : stylePropertyUnion.height.height30,
      padding : "10px",
      fontSize : stylePropertyUnion.fontSizeSet.small,
      color : stylePropertyUnion.colorTheme.white,
      borderRadius : "10px",
      cursor : "pointer",
      ...stylePropertyUnion.flexRowCenter,
      alignItems : "center",
      backgroundColor : stylePropertyUnion.colorTheme.peach,
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    },
    
    findUserInfoRoot: {
      width : stylePropertyUnion.width.width500,
      height : stylePropertyUnion.height.height1000,
      margin : "auto",
      ...stylePropertyUnion.flexColCenter,
      position : "relative",
      backgroundColor : stylePropertyUnion.colorTheme.beige,
    },
    findUserInfoWrap: {
      width : stylePropertyUnion.width.width450,
      height : stylePropertyUnion.height.height500,
      padding : stylePropertyUnion.height.height30,
      borderRadius : "10px",
      display : "flex",
      flexDirection : "column",
      backgroundColor : stylePropertyUnion.colorTheme.peach,
      gap : "10px",
      boxShadow : "0 5px 20px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.22)",
      color : stylePropertyUnion.colorTheme.white,
      // fontSize : "23px",
      fontSize : stylePropertyUnion.fontSizeSet.medium,
      fontWeight : stylePropertyUnion.fontWeightSet.bold
    },
    findUserInfoInput: {
      width : "100%",
      height : "50px",
      border : "0px",
      paddingLeft : "14px",
      color : stylePropertyUnion.colorTheme.black,
      fontSize : stylePropertyUnion.fontSizeSet.smaller,
      backgroundColor : stylePropertyUnion.colorTheme.white,
      borderRadius : "10px",
      boxShadow : "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  
    },
    findUserInfoUpdatePWModal: {
      width : stylePropertyUnion.width.width390,
      height : stylePropertyUnion.height.height450,
      padding : "10px",
      borderRadius : "10px",
      flexDirection : "column",
    ...stylePropertyUnion.flexRowCenter,
      backgroundColor : stylePropertyUnion.colorTheme.beige,
      color : stylePropertyUnion.colorTheme.black,
      boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
      position : "absolute",
      top : "50%",
      left: "50%",
      gap : "30px",
      marginTop: "-225px",
      marginLeft: "-195px",
    },

}
//console.log(targetStyle.topMenu);

const mypageStyle = {
  mypageRoot : {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height1700,
    margin : "auto",
    position : "relative",
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    display : "flex",
    flexDirection : "column",
    alignItems : "center"
  },
  mypageTopMenu : {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height126,
    position : "relative",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    ...stylePropertyUnion.flexRowCenter

  },
  mypageTitle : {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height80,
    position : "relative",
    marginTop : "30px",
    ...stylePropertyUnion.flexRowCenter,
    fontSize : stylePropertyUnion.fontSizeSet.mediumLarge,
    fontWeight : stylePropertyUnion.fontWeightSet.bold
  },
  mypageImageStyle : {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height300,
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    borderRadius : "50%",
    position : "relative",
    ...stylePropertyUnion.flexRowCenter,
    marginTop : "20px",
    fontSize : stylePropertyUnion.fontSizeSet.medium,
    fontWeight : stylePropertyUnion.fontWeightSet.bold,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  mypageButtonWrap : {
    width : stylePropertyUnion.width.widthP60,
    height : stylePropertyUnion.height.height30,
    marginTop : "40px",
    position : "relative",
    borderRadius : "10px",
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : "center",
    backgroundColor : stylePropertyUnion.colorTheme.lightGray
  },
  mypageButton : {
    width : stylePropertyUnion.width.widthP40,
    height : "70%",
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeA,
    cursor : "pointer",
    borderRadius : "5px",
    ...stylePropertyUnion.flexRowCenter
  },
  mypageUserinfoBox :{
    width : stylePropertyUnion.width.widthP90,
    height : stylePropertyUnion.height.height300,
    marginTop : "40px",
    position : "relative",
    borderRadius : "10px",
    ...stylePropertyUnion.flexColCenter,
    gap : "10px",
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeB
  },
  mypageUserinfoBoxInnerStyle : {
    width : stylePropertyUnion.width.widthP90,
    height : stylePropertyUnion.height.height24,
    borderRadius : "5px",
    paddingLeft : "10px",
    paddingRight : "10px",
  },
  mypageUserinfoBoxSelfIntroduce : {
    height : stylePropertyUnion.height.height130,
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeC
  },
  mypageCalender : {
    width : stylePropertyUnion.width.widthP90,
    height : stylePropertyUnion.height.height450,
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeB,
    marginTop : "40px",
    position : "relative",
    borderRadius : "10px",
    ...stylePropertyUnion.flexRowCenter
  },
  mypageUploadModal : {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height140,
    padding : "10px",
    borderRadius : "10px",
    ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeD,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    position : "absolute",
    top : "550px",
    left: "50%",
    gap : "10px",
    marginLeft: "-150px",
  },
  mypageUploadModalButtonWrap : {
    display : "flex",
    gap : "10px"
  },
  mypageUploadModalButtonStyle : {
    border : "0px",
    width : stylePropertyUnion.width.width90,
    height : stylePropertyUnion.height.height30,
    padding : "10px",
    fontSize : stylePropertyUnion.fontSizeSet.smaller,
    color : stylePropertyUnion.colorTheme.whiteTypeA,
    borderRadius : "10px",
    cursor : "pointer",
    ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw
  },
};

const keepStyle={

  pageRoot :{
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height1700,
    margin : "auto",
    position : "relative",
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    ...stylePropertyUnion.flexColumnTopCenter,
  },


  pageTopMenu : {
    width : stylePropertyUnion.width.widthP100,
    height : stylePropertyUnion.height.height126,
    position : "relative",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    ...stylePropertyUnion.flexRowCenter
  },
  //root1 제목부분 '산돌이를 찾아주세요'
  pageTitleBox : {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height40,
    position : "relative",
    backgroundColor:stylePropertyUnion.colorTheme.lightGray,
    ...stylePropertyUnion.flexRowCenter,
    fontSize : stylePropertyUnion.fontSizeSet.mediumLarge,
    fontWeight : stylePropertyUnion.fontWeightSet.bold,
  },
  pageTitle: {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height40,
    resize: "none",
  },
  // root2 이미지부분
  pageuploadImg: {
    width: stylePropertyUnion.width.width500,
    height: stylePropertyUnion.height.height500,
    ...stylePropertyUnion.flexRowCenter,
    border: `1px solid ${stylePropertyUnion.colorTheme.peach}`,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius9,
  },

  // root3 본문부분, '산돌이는 대전에서 잃어버렸어요'
  pagemainTextBox : {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height400,
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    position : "relative",
    ...stylePropertyUnion.flexRowCenter,
    fontSize : stylePropertyUnion.fontSizeSet.medium,
    fontWeight : stylePropertyUnion.fontWeightSet.bold,
    overflow : "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  pageButtonWrap : {
    width : stylePropertyUnion.width.width500,
    height : stylePropertyUnion.height.height100,
    // marginTop : "20px",
    position : "relative",
    borderRadius : "20px",
    display : "flex",
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : "center",
    
  },
  pageButton : {
    width : stylePropertyUnion.width.widthP40,
    height : "40%",
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeA,
    cursor : "pointer",
    borderRadius : "5px",
    ...stylePropertyUnion.flexRowCenter
  },
  pageUploadModal : {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height140,
    padding : "10px",
    borderRadius : "10px",
    ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeD,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    position : "absolute",
    top : "1200px",
    left: "30%",
    gap : "10px",
    marginLeft: "-150px",
  },
  pageUploadModalButtonWrap : {
    display : "flex",
    gap : "10px"
  },
  pageUploadModalButtonStyle : {
    border : "0px",
    width : stylePropertyUnion.width.width90,
    height : stylePropertyUnion.height.height30,
    padding : "10px",
    fontSize : stylePropertyUnion.fontSizeSet.smaller,
    color : stylePropertyUnion.colorTheme.whiteTypeA,
    borderRadius : "10px",
    cursor : "pointer",
    ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw
  },
// root 3.1 카테고리 버튼
showCategoryModalbt :{
  width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height140,
    padding : "10px",
    borderRadius : "10px",
    ...stylePropertyUnion.flexColCenter,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    position : "absolute",
    top : "1200px",
    left: "50%",
    gap : "10px",
    margileft: "200px",
},
showcategoryModalButtonWrap:{
display : "flex",
gap : "10px"
},
showcategoryModalButton:{
  border : "0px",
  width : stylePropertyUnion.width.width100,
  height : stylePropertyUnion.height.height30,
  padding : "10px",
  fontSize : stylePropertyUnion.fontSizeSet.smaller,
  color : stylePropertyUnion.colorTheme.whiteTypeA,
  borderRadius : "10px",
  cursor : "pointer",
  ...stylePropertyUnion.flexColCenter,
  backgroundColor : stylePropertyUnion.colorTheme.peach,
  boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw
},
showcategoryclosebutton:{
  border : "0px",
  width : stylePropertyUnion.width.width100,
  height : stylePropertyUnion.height.height30,
  padding : "10px",
  fontSize : stylePropertyUnion.fontSizeSet.smaller,
  color : stylePropertyUnion.colorTheme.whiteTypeA,
  borderRadius : "10px",
  cursor : "pointer",
  ...stylePropertyUnion.flexColCenter,
  backgroundColor : stylePropertyUnion.colorTheme.peach,
  boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
  top : "1100px",
    left: "30%",
},
// 4. 페이지 서브밋
  pageSubmit : {
  width : stylePropertyUnion.width.width500,
  height :stylePropertyUnion.height.height154,
  backgroundColor : stylePropertyUnion.colorTheme.whiteTypeA,
  cursor : "pointer",
  borderRadius : "20px",
  marginBottom: "150px",
  alignItems : "center",
  ...stylePropertyUnion.flexRowCenter
},

bottomMenu :{
  width : stylePropertyUnion.width.width500,
  height : stylePropertyUnion.height.height126,
  // position : "relative",
  backgroundColor : stylePropertyUnion.colorTheme.peach,
  ...stylePropertyUnion.flexRowCenter

}




}




const loginPageStyle = {
  loginPageRoot: {
    width: stylePropertyUnion.width.width500,
    height: stylePropertyUnion.height.height100vh,
    ...stylePropertyUnion.flexColumnTopCenter,
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    margin: "auto",
  },
  loginPageLogoWrap: {
    width : stylePropertyUnion.width.width250,
    height : stylePropertyUnion.height.height100,
    marginTop : stylePropertyUnion.marginTop.marginTop156,
  },
  loginPageLogo:{
    width : stylePropertyUnion.width.widthP100,
  },
  loginPageImgWarp: {
    width : stylePropertyUnion.width.width150,
    height : stylePropertyUnion.height.height150,
    marginTop : stylePropertyUnion.marginTop.marginTop60,
    borderRadius : stylePropertyUnion.borderRadius.borderRadiusP50,
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    ...stylePropertyUnion.flexRowCenter,
    overflow : 'hidden',
  },
  loginPageImg: {
    height: stylePropertyUnion.height.heightP100,
  },
  loginPageFormWrap: {
    width : stylePropertyUnion.width.width390,
    height : stylePropertyUnion.height.height154,
  },
  loginPageForm: {
    display : 'flex',
    flexDirection : 'column',
    marginTop : stylePropertyUnion.marginTop.marginTop110,
  },
  loginPageFormId: {
    marginBottom : stylePropertyUnion.marginBottom.marginBottom50,
    height : stylePropertyUnion.height.height52,
    borderRadius : stylePropertyUnion.borderRadius.borderRadius52,
    border : 'none',
    paddingLeft : '25px',
    fontSize : stylePropertyUnion.fontSizeSet.medium,
  },
  loginPageFormPw: {
    marginBottom : stylePropertyUnion.marginBottom.marginBottom80,
    height : stylePropertyUnion.height.height52,
    borderRadius : stylePropertyUnion.borderRadius.borderRadius52,
    border : 'none',
    paddingLeft : '25px',
    fontSize : stylePropertyUnion.fontSizeSet.medium,
  },
  loginPageFormBtnWrap: {
    ...stylePropertyUnion.flexRowBetweenCenter
  },
  loginPageFormBtnLogin: {
    border : '1px solid #999',
    borderRadius : stylePropertyUnion.borderRadius.borderRadius15,
    width : stylePropertyUnion.width.width180,
    height : stylePropertyUnion.height.height52,
    cursor : 'pointer',
    fontSize : stylePropertyUnion.fontSizeSet.medium,
  },
  loginPageFormBtnSignup: {
    border : '1px solid #999',
    borderRadius : stylePropertyUnion.borderRadius.borderRadius15,
    backgroundColor : '#D9D9D9',
    color : stylePropertyUnion.colorTheme.black,
    textDecoration : 'none',
    width : stylePropertyUnion.width.width180,
    height : stylePropertyUnion.height.height52,
    ...stylePropertyUnion.flexRowCenter,
    fontSize : stylePropertyUnion.fontSizeSet.medium,
    cursor : 'pointer',
  },
  loginPageFormBtnFindUserInfo: {
    marginTop : "10px",
    border : '1px solid #999',
    borderRadius : stylePropertyUnion.borderRadius.borderRadius15,
    backgroundColor : '#D9D9D9',
    color : stylePropertyUnion.colorTheme.black,
    textDecoration : 'none',
    width : stylePropertyUnion.width.width390,
    height : stylePropertyUnion.height.height24,
    ...stylePropertyUnion.flexRowCenter,
    fontSize : stylePropertyUnion.fontSizeSet.smaller,
    cursor : 'pointer',
  }
};

// 댕맵 오버레이 창
const dangMapOverlay = {
  wrap: {
    position: "absolute",
    left: "0",
    bottom: "10px",
    width: stylePropertyUnion.width.width250,
    height: stylePropertyUnion.height.height132,
    marginLeft: stylePropertyUnion.marginLeft.marginLeft_144,
    textAlign: "left",
    overflow: "hidden",
    fontSize: stylePropertyUnion.fontSizeSet.smaller,
  },
  info: {
    width: stylePropertyUnion.width.widthP100,
    height: "120px",
    borderRadius: "5px",
    // border: `1px solid ${stylePropertyUnion.colorTheme.peach}`,
    overflow: "hidden",
    backgroundColor: stylePropertyUnion.colorTheme.whiteTypeC,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw
  },
  title: {
    padding: "5px 0 5px 10px",
    height: "30px",
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    fontSize: stylePropertyUnion.fontSizeSet.small,
    fontWeight: "bold",
    lineHeight: 1,
    color: stylePropertyUnion.colorTheme.white
  },
  body: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height90,
    borderBottom: `2px solid ${stylePropertyUnion.colorTheme.peach}`,
    // border: `1px solid ${stylePropertyUnion.colorTheme.peach}`,
    padding: "10px",
    // boxShadow: `0px 1px 10px ${stylePropertyUnion.colorTheme.peach}`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
  },
  desc: {
    position: "relative",
    margin: "5px 0 0 30px",
  },
  image: {
    width: "70px",
    height: "70px",
    borderRadius: "35px",
  },
  btnStyle: {
    width: "65px",
    height: "30px",
    backgroundColor: stylePropertyUnion.colorTheme.lightGray,
    textAlign: "center",
    appearance: "none",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    cursor: "pointer",
    transition: "0.5s",
    border: `0px solid ${stylePropertyUnion.colorTheme.gray}`,
    fontSize: stylePropertyUnion.fontSizeSet.smaller

  },
  close: {
    width: "15px",
    height: "20px",
    backgroundColor: stylePropertyUnion.colorTheme.white,
    lineHeight: 1,
    position: "absolute",
    top: "5px",
    right: "5px",
    border: "0px",
    appearance: "none",
    borderRadius: "4px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    cursor: "pointer",
    transition: "0.5s",
  }
}

//댕댕마켓 게시글 스타일

const market = {
  //게시글 목록 part
  root: {
    width: stylePropertyUnion.width.width500,
    // height: stylePropertyUnion.height.height2000,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  addWrite: {
    width: stylePropertyUnion.width.width50,
    height: stylePropertyUnion.height.height50,
    position: "absolute",
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    bottom: "110px",
    right: "20px",
    zIndex: "2",
    borderRadius: "30px",
    textAlign: "center",
    cursor : 'pointer',
    ...stylePropertyUnion.flexRowCenter,
    fontSize : '30px',
    transform : 'rotate(135deg)'
  },
  listContainer: {
    width: stylePropertyUnion.width.widthP100,
    border: "1px solid red",
    position: "relative",
    zIndex: "1",
    ...stylePropertyUnion.flexColCenter,
  },
  listBox: {
    width: stylePropertyUnion.width.widthP80,
    height: stylePropertyUnion.height.height200,
    border: "1px solid black",
    margin: "10px 0 10px 0",
    ...stylePropertyUnion.flexRowCenter,
    textDecoration: 'none',
    color: stylePropertyUnion.colorTheme.black,
  },
  listImg: {
    width: stylePropertyUnion.width.width100,
    height: stylePropertyUnion.height.height100,
    border: "1px solid black",
    margin: "5px",
  },
  listText: {
    width: stylePropertyUnion.width.width300,
    height: stylePropertyUnion.height.height100,
    ...stylePropertyUnion.flexColCenter,
  },
  listTitle: {
    width: stylePropertyUnion.width.widthP90,
    height: stylePropertyUnion.height.heightP30,
    margin: "3px 0 3px 0",
    fontSize: "20px",
    fontWeight: "700",
  },
  listElementText: {
    width: stylePropertyUnion.width.widthP90,
    height: stylePropertyUnion.height.heightP70,
    marginBottom: "3px",
  },

  //게시글 part
  marketPost: {
    width: stylePropertyUnion.width.width500,
    height: stylePropertyUnion.height.height100vh,
    ...stylePropertyUnion.flexColumnTopCenter,
    backgroundColor: stylePropertyUnion.colorTheme.peach,
    margin: "auto",
    // borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
  },
  marketPostImageArea: {
    width: stylePropertyUnion.width.width400,
    height: stylePropertyUnion.height.height300,
    backgroundColor: stylePropertyUnion.colorTheme.white,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
  },
  marketPostImgNameAdd: {
    width: stylePropertyUnion.width.width400,
    height: stylePropertyUnion.height.height100,
    backgroundColor: stylePropertyUnion.colorTheme.white,
    ...stylePropertyUnion.flexRowCenter,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
    margin: '10px',
    gap: '15px'
  },
  marketPostImgStyle: {
    width: stylePropertyUnion.width.width90,
    height: stylePropertyUnion.height.height90,
    // backgroundColor: stylePropertyUnion.colorTheme.peach,
    ...stylePropertyUnion.flexColCenter,
    border: '1px solid gray',
    borderRadius: stylePropertyUnion.borderRadius.borderRadiusP50,
  },
  marketPostnameAddStyle: {
    width: stylePropertyUnion.width.width250,
    height: stylePropertyUnion.height.height90,
    boxShadow: stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    position: 'relative',
  },
  marketPostName: {
    width: stylePropertyUnion.width.width80,
    height: stylePropertyUnion.height.height70,
    ...stylePropertyUnion.flexRowCenter,
  },
  marketPostAdd: {
    width: stylePropertyUnion.width.width40,
    height: stylePropertyUnion.height.height30,
    ...stylePropertyUnion.flexRowCenter,
    gap: '5px',
  },
  marketPostAddDot: {
    width: stylePropertyUnion.width.width3,
    height: stylePropertyUnion.height.height3,
    backgroundColor: stylePropertyUnion.colorTheme.black,
  },
  marketPostAddModal: {
    width: stylePropertyUnion.width.width120,
    height: stylePropertyUnion.height.height126,
    backgroundColor: stylePropertyUnion.colorTheme.white,
    border: `3px solid ${stylePropertyUnion.colorTheme.peach}`,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
    position: 'absolute',
    top : '50px',
    left : '200px',
    display:'none',
    zIndex :'5',
    ...stylePropertyUnion.flexColCenter,
  },
  marketPostAddModalBtn: {
    width: stylePropertyUnion.width.widthP100,
    height: stylePropertyUnion.height.height24,
    backgroundColor: stylePropertyUnion.colorTheme.beige,
    textAlign: "center",
    appearance: "none",
    borderRadius: "4px",
    boxShadow: stylePropertyUnion.defaultBoxShadow.ConBoxSdw,
    cursor: "pointer",
    transition: "0.5s",
    border: `0px solid ${stylePropertyUnion.colorTheme.gray}`,
    fontSize: stylePropertyUnion.fontSizeSet.small,
  },
  marketPostComponent: {
    width: stylePropertyUnion.width.width400,
    height: stylePropertyUnion.height.height300,
    backgroundColor: stylePropertyUnion.colorTheme.white,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
    ...stylePropertyUnion.flexColCenter,
  },
  marketPostTitle: {
    width: stylePropertyUnion.width.width390,
    height: stylePropertyUnion.height.height52,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    borderBottom: '1px solid red',
  },
  marketPostDetail: {
    width: stylePropertyUnion.width.width390,
    height: stylePropertyUnion.height.height200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    borderTop: '1px solid red',

  },
  marketPostDate: {
    width: stylePropertyUnion.width.width390,
    height: stylePropertyUnion.height.height24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    borderBottom: '1px solid red',
  }
}

const dangtalk = {
  chatRoot: {
    width: stylePropertyUnion.width.width500,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  chatlistContainer: {
    width: stylePropertyUnion.width.widthP100,
    // border: "1px solid blue",
    position: "relative",
    zIndex: "1",
    ...stylePropertyUnion.flexColCenter,
  },
  chatlistBox: {
    width: stylePropertyUnion.width.widthP95,
    height: stylePropertyUnion.height.height100,
    borderRadius: stylePropertyUnion.borderRadius.borderRadius15,
    margin: "10px 0 10px 0",
    ...stylePropertyUnion.flexRowCenter,
    textDecoration: 'none',
    color: stylePropertyUnion.colorTheme.black,
    backgroundColor: stylePropertyUnion.colorTheme.beige,
    boxShadow: stylePropertyUnion.defaultBoxShadow.ConBoxSdw,
    cursor : 'pointer'
  },
  chatlistImg: {
    width: '70px',
    height: '70px',
    // border: "1px solid black",
    borderRadius: '50%',
    margin: "5px",
    overflow : "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  chatlistBoxComponent: {
    width: stylePropertyUnion.width.width300,
    height: stylePropertyUnion.height.height100,
    ...stylePropertyUnion.flexColCenter,
  },
  chatlistUserName: {
    width: stylePropertyUnion.width.widthP90,
    height: stylePropertyUnion.height.heightP30,
    margin: "3px 0 3px 0",
    fontSize: "20px",
    fontWeight: "700",
  },
  chatlistlastMsg: {
    width: stylePropertyUnion.width.widthP90,
    height: stylePropertyUnion.height.heightP30,
    marginBottom: "3px",
  },
  chatlistCount: {
    width: stylePropertyUnion.width.width25,
    height: '25px',
    ...stylePropertyUnion.flexRowCenter,
    margin: '5px',
    borderRadius : '50%',
    backgroundColor : '#2353FF',
    color : 'white',
    fontSize: "12px",
    fontWeight: "300",
  }
}


const dangtalkChattingRoom ={
  mainRoot: {
    width : stylePropertyUnion.width.width500,
      height : stylePropertyUnion.height.height1000,
      margin : "auto",
      position : "relative",
      backgroundColor : stylePropertyUnion.colorTheme.beige,
      ...stylePropertyUnion.flexColCenter,
  },
  chattingContainer: {
    width : stylePropertyUnion.width.width450,
    height : "100vh",
    padding : "30px",
    borderRadius : "10px",
    display : "flex",
    position: "relative",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    gap : "20px",
    boxShadow : stylePropertyUnion.defaultBoxShadow.ConBoxSdw
  },
  signUpListBox: {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height70,
    position : "relative",
    ...stylePropertyUnion.flexRowCenter,
    flexWrap : "wrap"
  },
  chattingTitle: {
    width : stylePropertyUnion.width.width400,
    height : stylePropertyUnion.height.height70,
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
  },
  chattingWrap: {
    width : stylePropertyUnion.width.width400,
    height : stylePropertyUnion.height.height690,
    padding : "10px",
    borderRadius : "10px",
    gap : '5px',
  ...stylePropertyUnion.flexColumnTopCenter,
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    overflow : "auto"
  },
  chattingInputWrap: {
    width : stylePropertyUnion.width.width400,
    height : stylePropertyUnion.height.height100,
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexRowCenter,

    backgroundColor : stylePropertyUnion.colorTheme.beige,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
  },
  chattingFromMe: {
  ...stylePropertyUnion.flexRowCenter,
    alignSelf : "flex-end",
    fontSize : "12px",
    color : "white",
    gap : "10px"
  },
  chattingFromYou: {
  ...stylePropertyUnion.flexRowCenter,
    alignSelf : "flex-start",
    fontSize : "12px",
    gap : "10px"

  },
  chattingInputText: {
    width : stylePropertyUnion.width.width300,
    height : stylePropertyUnion.height.height50,
    border : "0px",
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.whiteTypeA,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    marginRight : "10px",
    fontSize : "15px",
    color : "black"
  },
  chattingSubmitButton: {
    width : stylePropertyUnion.width.width50,
    height : stylePropertyUnion.height.height50,
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexColCenter,
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    marginRight : "10px",
    fontSize : "16px",
    color : "white",
    cursor : 'pointer'
  },
  msgBoxStyleFromMe :{
    // width : stylePropertyUnion.width.width120,
    height : stylePropertyUnion.height.height30,
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexRowCenter,
    backgroundColor : stylePropertyUnion.colorTheme.peach,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    alignSelf : "flex-start",
    fontSize : "12px"
  },
  msgBoxStyleFromYou :{
    // width : stylePropertyUnion.width.width120,
    height : stylePropertyUnion.height.height30,
    padding : "10px",
    borderRadius : "10px",
  ...stylePropertyUnion.flexRowCenter,
    backgroundColor : stylePropertyUnion.colorTheme.beige,
    boxShadow : stylePropertyUnion.defaultBoxShadow.defBoxSdw,
    alignSelf : "flex-start",
    fontSize : "12px"
  },
  imageBoxStyle : {
    width : stylePropertyUnion.width.width50,
    height : stylePropertyUnion.height.height50,
    backgroundColor : stylePropertyUnion.colorTheme.lightGray,
    borderRadius : '100%',
    overflow : "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

}