function them(button)
{
    var row = button.parentElement.parentElement.cloneNode(true);
    var btn_xoa= row.getElementsByTagName("button")[0];
    btn_xoa.innerText="Xóa";
    btn_xoa.setAttribute('onclick','xoa(this)');
    document.getElementById("cart").appendChild(row);
    document.getElementById("cart").style.display="";   
    alert("Đã thêm 1 sản phẩm vào giỏ hàng");
}
function xoa(button) {
    var row = button.parentElement.parentElement;
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    document.getElementById("cart").removeChild(row);
    //document.getElementById("cart").style.display="none";
    var tong = 0 ;
    for (var i = 0;i<rows.length;i++){
    
        var price = rows[i].children[2].innerText;
        price= parseInt(price);
        tong = tong+price;
    }
    document.getElementById("tong").innerText = tong;
    alert("Đã xóa 1 sản phẩm khỏi giỏ hàng");
}
function tinh_tong(){
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");

    var tong = 0 ;
    for (var i = 0;i<rows.length;i++){
        var price = rows[i].children[2].innerText;
        price= parseInt(price);
        tong += price;
    }
    document.getElementById("tong").innerText = tong+ " đ";
    document.getElementById("tong").style.color = "#89C699";

}

function daott(obj){
    var row = obj.parentElement.parentElement;
    var btn = row.getElementsByTagName("button")[0];
    btn.disabled =! btn.disabled;
}

