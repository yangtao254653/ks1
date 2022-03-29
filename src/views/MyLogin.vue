<template>
  <div class="main">
    <div class="cen">
      <h3>Login Form</h3>
      <el-form :model="forms">
        <el-form-item prop="user">
          <el-input v-model="forms.user"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="forms.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="" class="btn" @click="sub"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "MyLogin",
  data() {
    var userfn = (ruls, value, callback) => {
      
    };
    var passfn = (ruls, value, callback) => {};
    return {
      forms: {
        user: "admin",
        pass: "123456",
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pass: [{ validator: passfn, trigger: "blur" }],
      },
      fns: null,
    };
  },
  methods: {
    sub() {
      this.fns();
    },
    async login(){
      let user = this.forms.user;
      let pass = this.forms.pass;
      let {data} = await instance.post("/login", { user, pass })
      console.log(data);
      if(data.message === "success"){
        localStorage.setItem("token",data.data.token);
        this.$message({
              type:"success",
              message:"登录成功",
              duration:1000,
              onClose:()=>{
                  this.$router.push({name:"about"})
              }
          })
      }else{
        this.$message({
              type:"fail",
              message:"账号或密码错误",
              duration:1000,
          })
      }
    }
  },
  created(){
    this.fns = this.nodoufn(this.login,1000);
  }
};
</script>
<style scoped>
.main {
  background: #2d3a4b;
  height: 100vh;
}
.cen {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 520px;
  margin-left: -260px;
  margin-top: -180px;
  text-align: center;
  color: white;
  font-size: 30px;
}
.cen h3 {
  margin-bottom: 30px;
}
button {
  width: 100%;
}
</style>