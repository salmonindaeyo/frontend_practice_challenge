<template>
  <div class=" grid grid-cols-1 gap-4 place-items-center  ">
<div class="">
    <img src="../static/pic/image 77.png" class="" />
</div>

<div class="text-[13px] font-bold">
     เข้าสู่ระบบ SABLE
</div>
<div class="mb-2 text-graySable1" >
    ต้อนรับกลับเข้าสู่ระบบ กรอกข้อมูลเพื่อลงชื่อเข้าใช้
</div>

<div class="">
    <InputComponent typeInput="text" 
    placeholder="example@email.com" :css="CssForInput" 
    name="อีเมล"/>
</div>

<div class=" ">
    <InputComponent typeInput="password" 
    placeholder="password" name="รหัสผ่าน" :css="CssForInput" />
</div>


<div class="grid grid-cols-2 text-sm w-96 ">
<div class=""> <input type="checkbox" /> ให้ฉันอยู่ในระบบต่อไป  </div>
<div class="place-self-end text-sable"> ลืมรหัสผ่าน  </div>
</div>

<div>
    <Button :Route="testUser" :css="CssForButton + ` bg-sable text-white`" text="เข้าสู่ระบบ"/>
</div>
<div class="text-graySable1 text-center text-sm mt-2 mb-1">━━━━━━━━━   หรือเข้าสู่ระบบด้วย   ━━━━━━━━━</div>

   <Button img="/pic/icon.png"  :Route="testUser"  :css="CssForButton+ ` bg-white text-sm   flex justify-center border border-gray-300` "  text="Sign in with Google"/>

<div class="mt-2"><span class="text-graySable1">ยังไม่มีบัญชี ? </span> <span class="text-sable">สมัครใช้งาน SABLE</span></div>
  </div>
</template>

<script>
export default {
 data () {
        return {
            CssForInput: "w-96 text-gray-700 mt-1 "
            ,
            CssForButton : "font-bold py-2 px-4 rounded w-96  py-3"
            ,
            testUser : "users/Nuttawat"
        }
    }
}
</script>

<style>

</style>