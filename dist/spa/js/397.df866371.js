"use strict";(self["webpackChunkatlasmundi_app"]=self["webpackChunkatlasmundi_app"]||[]).push([[397],{5397:(e,s,l)=>{l.r(s),l.d(s,{default:()=>b});l(702);var t=l(9835);const o={class:"q-pa-md"},a=(0,t._)("div",{class:"row q-mt-xl absolute-top"},[(0,t._)("img",{alt:"Atlas-Mundi logo",src:"logo.png",style:{width:"156px",height:"168px"},class:"q-mt-xl absolute-center"})],-1),n=(0,t._)("div",{class:"text-h5 flex flex-center row",style:{color:"lightgray"}}," L O G I N ",-1),r={class:"row q-my-lg"},d={class:"row"},i={class:"row q-my-lg"},p=(0,t.Uk)("Entrar"),u=(0,t._)("div",{class:"flex justify-center",style:{color:"lightgray"}}," Ainda não possui uma conta? ",-1);function c(e,s,l,c,m,w){const g=(0,t.up)("q-icon"),h=(0,t.up)("q-input"),f=(0,t.up)("q-btn"),y=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(y,{class:"flex flex-center",style:{"background-color":"#142044"}},{default:(0,t.w5)((()=>[(0,t._)("div",o,[a,n,(0,t._)("div",r,[(0,t.Wm)(h,{dark:"",outlined:"",round:"",class:"flex col",prefix:"@",label:"Usuário",modelValue:e.user,"onUpdate:modelValue":s[0]||(s[0]=s=>e.user=s)},{prepend:(0,t.w5)((()=>[(0,t.Wm)(g,{name:"mdi-account"})])),_:1},8,["modelValue"])]),(0,t._)("div",d,[(0,t.Wm)(h,{dark:"",outlined:"",round:"",class:"flex col",type:e.pwd_field_type,label:"Senha",modelValue:e.pwd,"onUpdate:modelValue":s[2]||(s[2]=s=>e.pwd=s)},{prepend:(0,t.w5)((()=>[(0,t.Wm)(g,{name:"mdi-lock"})])),append:(0,t.w5)((()=>[(0,t.Wm)(g,{name:"password"==e.pwd_field_type?"mdi-eye-off":"mdi-eye",onClick:s[1]||(s[1]=s=>"password"==e.pwd_field_type?e.pwd_field_type="text":e.pwd_field_type="password")},null,8,["name"])])),_:1},8,["type","modelValue"])]),(0,t._)("div",i,[(0,t.Wm)(f,{style:{background:"#11a3b9",color:"lightgray"},class:"full-width",onClick:e.sendToHome},{default:(0,t.w5)((()=>[p])),_:1},8,["onClick"])]),u,(0,t._)("a",{class:"flex justify-center",style:{color:"lightskyblue"},onClick:s[3]||(s[3]=(...s)=>e.sendToSignin&&e.sendToSignin(...s))},"Cadastre-se!")])])),_:1})}l(8964);var m=l(9302);const w=(0,t.aZ)({name:"IndexPage",data(){return{user:"",pwd:"",pwd_field_type:"password"}},setup(){const e=(0,m.Z)();return{showLoginError(){e.notify({message:"Usuário/Senha Incorretos",color:"red"})}}},methods:{async sendToHome(){if(this.user.length>=3&&this.pwd.length>=8){JSON.stringify({login:this.user.replace("@",""),password:this.pwd});var e={status:404};if(200===e.status){var s=await e.json();localStorage.setItem("profileId",s["profileId"]),localStorage.setItem("authToken",s["token"]),this.$router.push("/home")}else this.$router.push("/home")}else this.showLoginError()},sendToSignin(){this.$router.push("/signin")}}});var g=l(1639),h=l(9885),f=l(361),y=l(2857),_=l(9379),k=l(9984),x=l.n(k);const v=(0,g.Z)(w,[["render",c]]),b=v;x()(w,"components",{QPage:h.Z,QInput:f.Z,QIcon:y.Z,QBtn:_.Z})}}]);