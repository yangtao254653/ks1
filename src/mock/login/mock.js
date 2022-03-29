let Mock = require("mockjs")
Mock.mock("/api/login",'post',function(config){
    console.log(1);
    console.log(config.body)
    let obj = JSON.parse(config.body)
    let user = obj.user
    let pass = obj.pass
    if(user=="admin"&&pass=="123456"){
        return {
            status:200,
            message:"success",
            data:{user:"admin",pw:"123456",token:"123"}
        }
    }else{
        return {
            status:200,
            message:"fail",
            data:{message:"用户密码错误"}
        }
    }
})