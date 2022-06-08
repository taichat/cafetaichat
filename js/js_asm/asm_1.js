// Giải phương trình bậc 2
var ptb2 = new Object();
// ptb2.a = null;
// ptb2.b = null;
// ptb2.c = null;
function ep_kieu(min,max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
ptb2.nhap = function()
{
   
    // this.a =Math.floor(Math.random() * 10) + 1;
    // this.b =Math.floor(Math.random() * 10) + 1;
    // this.c =Math.floor(Math.random() * 10) + 1;
    // Str = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`;
    // document.getElementById("hien_pt").innerHTML = Str;
    this.a = window.ep_kieu(1,11);
    this.b = window.ep_kieu(1,11);
    this.c = window.ep_kieu(1,11);

    document.getElementById("a").value = this.a;
    document.getElementById("b").value = this.b;
    document.getElementById("c").value = this.c;
    var mo= document.getElementById("mo_btn").innerHTML;
    mo_btn.disabled = false;

    
    // Str = this.a + "x <sup>2</sup> + " + this.b + "x + " + this.c + " =0.";
    // document.getElementById("hien_pt").innerHTML = Str;
}
ptb2.giai = function()
{

    // this.a =document.forms["asm_1"]["a"].value;
    // this.b =document.forms["asm_1"]["b"].value;
    // this.c =document.forms["asm_1"]["c"].value;
    var delta =Math.pow(this.b,2) - 4 * this.a * this.c;
    if (delta < 0) {
        ptvn = "Phương trình vô nghiệm";
        document.getElementById("kq_pt").innerText = ptvn;
      
    } else if (delta == 0) {
        var x0 = -this.b / (2 * this.a);
        ptnk = "Phương có nghiệm kép là: " + x0;
        document.getElementById("kq_pt").innerText = ptnk;
       
    } else {
        var x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        var x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        pt2n = "Phương có 2 nghiệm là: " + "\nx1 = " + x1.toFixed(2) + "\nx2 = " + x2.toFixed(2);
        document.getElementById("kq_pt").innerText = pt2n;
    }
    var mo= document.getElementById("mo_btn").innerHTML;
    mo_btn.disabled = true;

} 
var dem_lan_giai=0;
function dem()
{
    document.getElementById("dem_lan_giai").style.color="#fcbc2d";
 dem_lan_giai++;

 document.getElementById("dem_lan_giai").innerHTML = dem_lan_giai;
}

// /* ------------  product  ------------ */
// var product = [
//     {
//         id:1,
//         photo : 'img1.png',
//         enName :'Cafe sửa đá',
//         price : 20,
//     },
//     {
//         id:2,
//         photo : 'img2.png',
//         enName :'Cafe đá',
//         price : 15,
//     },
//     {
//         id:3,
//         photo : 'img3.png',
//         enName :'Trà chanh',
//         price : 10,
//     },
//     {
//         id:4,
//         photo : 'img4.png',
//         enName :'Cafe kem matcha',
//         price : 25,
//     },
//     {
//         id:5,
//         photo : '270_crop_.png',
//         enName :'Cafe sữa kem',
//         price : 25,
//     },
//     {
//         id:6,
//         photo : 'cach-lam-tra-thach-dao-highland-1-.png',
//         enName :'Trà thạch đào',
//         price : 15,
//     },
//     {
//         id:7,
//         photo : 'CHOCOLATE-FREEZE.png',
//         enName :'Cafe kem Chocolate',
//         price : 30,
//     },
//     {
//         id:8,
//         photo : 'phindi_kem_sua_new.png',
//         enName :'Cafe nhiều sữa',
//         price : 25,
//     },
   
// ];
// class Product{
//     constructor(id,photo,name,price)
//     {
//         this.id = id;
//         this.photo = photo;
//         this.name = name;
//         this.price = price;
//     }
//     show(handle){
//         var div = document.createElement('div');
//         div.setAttribute('class','card');

//         var  img  = document.createElement('img');
//         img.setAttribute('src',"../img/"+this.photo);
//         img.setAttribute('alt','');
//         img.setAttribute('width',"250");
//         img.setAttribute('height',"250");

//         var h2 = document.createElement('h2');
//         var h2Text= document.createTextNode(this.name);
//         h2.appendChild(h2Text);

//         var pPrice = document.createElement('p');
//         pPrice.setAttribute('class','price');
//         var pText = document.createElement("$"+this.price);
//         pPrice.appendChild(pText);

//         var porder= document.createElement('p');
//         var button  =document.createElement('button');
//         var buttonText = document.createTextNode("Mua hàng");
//         button.appendChild(buttonText);
//         // button.setAttribute('onclick','ordered('+this.id+');');
//         // porder.appendChild(button);

//         div.appendChild(img);
//         div.appendChild(h2);
//         div.appendChild(pPrice);
//         div.appendChild(porder);

//         handle.appendChild(div);
//     }
// }
// var handle =document.getElementById("products");
// for(let i in  products){
//     let p  =  new  Product(products[i].id,products[i].photo,
//     products[i].enName,products[i].price);
//     p.show(handle);
// }

