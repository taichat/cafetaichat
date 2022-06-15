function formRegister(){
    // hợp lệ họ
    let txt_ho  = document.forms["register"]["lastName"];
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
    
    

    // hợp lệ Món uống yêu thích
    let hobbyArr_2 = document.forms["register"]["hobby_2"];
    let l = 0 ;
    let kq_2= "Món uống yêu thích đã chọn: ";
    while(l<hobbyArr_2.length){
        if(hobbyArr_2[l].checked == true){
            break;
        }
        l++    
    }
    if(l == hobbyArr_2.length)
    {
        msg.innerText = "Món uống yêu thích phải được chọn ít nhất 1 cái.";
        return false;
    }
    for(let l in hobbyArr_2){
        if(hobbyArr_2[l].checked == true){

            kq_2 += hobbyArr_2[l].value + "\t";
            msg.innerText+= "";
        }
    }
    document.getElementById("registerInfor_2").innerText=kq_2;
    if(msg.innerText==""){
        setTimeout(() => {
            window.location = "../index.html"
        }, 1500);
    }
    return false;

}