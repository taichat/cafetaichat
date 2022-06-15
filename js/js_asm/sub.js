function formRegister(){
    // hợp lệ họ
    let txt_ho  = document.forms["register"]["lastName"];
    let pass  = document.forms["register"]["password"];
    let msg =  document.getElementById("message");
    msg.style.color = "#b0000b";
    msg.style.fontStyle = "Italic";
    if(txt_ho.value == ""){
        msg.innerText = "Họ không được để trống.";
        return false;
    }
    else
    {
        msg.innerText= "";
    }
    if(pass.value == ""){
        msg.innerText = "Mật khẩu bạn không được để trống.";
        return false;
    }
    else
    {
        msg.innerText= "";
    }
    // hợp lệ bổ sung
    let bo_sung = document.forms["register"]["bosung"];
    if(bo_sung.value<0 || bo_sung.value>1000){
        msg.innerText ="Thông tin bổ sung chỉ đến 1000 ký tự";
        return false;
    }
    else 
    {
        msg.innerText= "";
    }
    // hợp lệ tỉnh
    let chon_tinh = document.forms["register"]["tinh"];
    if(chon_tinh.value == 0)
    {
        msg.innerText =  "Bạn chưa chọn tĩnh";
    }
    else{
        msg.innerText = "";
    }


    // hợp lệ giới tính 
    
    let gender = document.forms["register"]["gender"];
    if(!gender[0].checked && !gender[1].checked)
    {
        msg.innerText = "Giới tính phải được chọn.";
        return false;
    } 

    // hợp lệ sdt

    let cellphone = document.forms["register"]["cellphone"];
    if(cellphone.value.length == 0 ){
        msg.innerHTML += "<p>Điện thoại không được để trống.</p>"
        fValid = false;
    }
    else{
        if(cellphone.value.length <10 || cellphone.value.length>11)
        {
            msg.innerHTML+="<p>Điện thoại phải có từ 10 đến 11 ký tự số !</p>";
            fValid = false;
        }
        else{
            msg.innerText += "";
            fValid = true;
        }
    }
        
    if(msg.innerText==""){
        setTimeout(() => {
            window.location = "../index.html"
        }, 1500);
    }
    return false;

}

// button 

function dang_nhap() {
    var dangKy = document.getElementById("dangKy");
    dangKy.classList.add("an_form");
    var dangNhap = document.getElementById("dangNhap");
    dangNhap.classList.remove("an_form");
 }
 
 function dang_ky() {
    var dangKy = document.getElementById("dangKy");
    dangKy.classList.remove("an_form");
    var dangNhap = document.getElementById("dangNhap");
    dangNhap.classList.add("an_form");
 }


 function formSign(){
    let txt_ho  = document.forms["formSign"]["lastName"];
    let pass  = document.forms["formSign"]["password"];
    let msg =  document.getElementById("message");
    if(txt_ho.value == "admin"&& pass.value=="123")
    {
        alert("Đăng nhập thành công !");
        msg.innerText= "";
        return false;
    }
    else
    {
        msg.style.color="#b0000d";
        msg.innerText= "Tài khoản học mật khẩu bạn không đúng";
    }

    if(msg.innerText==""){
        setTimeout(() => {
            window.location = "../index.html"
        }, 1500);
    }
    return false;
 }