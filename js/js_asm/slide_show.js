let khoAnh = [];
        const nAnh = 5;
        let index = 1;

        for (let i = 1; i <= nAnh; i++) {
            khoAnh[i] = new Image();
            khoAnh[i].src = `../img/img${i}.png`;
        }
        function previous() {
            index--;
            if (index < 1) {
                index = nAnh - 1;
            }
            document.getElementById("anh").src = khoAnh[index].src;
        }
        function next() {
            index++;
            if (index >= nAnh) {
                index = 1;
            }
            document.getElementById("anh").src = khoAnh[index].src;

        }
        setInterval("next();",2500);
// function first() {
//     index = 1;
//     document.getElementById("anh").src = khoAnh[index].src;
// }
// function last() {
//     index = nAnh;
//     document.getElementById("anh").src = khoAnh[index].src;
// }

/* ------------  slide text  ------------ */
var book_category_list = [
    "Cafe đá",
    "Cafe sữa đá",
    "Trà đá"
];

var  list;

for(list of book_category_list)
{
    var category = document.getElementById("category_list");

    var a = document.createElement("a");

    category.appendChild(a);

    var text = document.createTextNode(list);

    a.appendChild(text);

    a.setAttribute("href", list + ".html");
   

}

// thời gian

document.getElementById("dong_ho").style.width="100%";
document.getElementById("dong_ho").style.margin="0 auto";
document.getElementById("dong_ho").style.padding="1rem";
// document.getElementById("dong_ho").style.color="#fcbc2d";
document.getElementById("dong_ho").style.fontStyle="oblique";
document.getElementById("dong_ho").style.textAlign="center";
function tg(){
    let now = new Date();
    let h,m,s,ngay,thang,nam;
    ngay = now.getDay();
    thang = now.getMonth();
    nam = now.getFullYear();
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    h = ((h < 10) ? "0" : "") + h;
    m = ((m < 10) ? "0" : "") + m;
    s = ((s < 10) ? "0" : "") + s;
    document.getElementById("dong_ho").innerHTML= `Bây giờ ${ngay}/${thang}/${nam} ${h} giờ \t`+`${m} phút \t`+`${s} giây \t`;
    if (h < 12) {
        document.getElementById("dong_ho").style.backgroundColor = "#7a5531";
        document.getElementById("dong_ho").style.color = "#fcbc2d";
    } else if (h > 12 && h < 18) {
        document.getElementById("dong_ho").style.backgroundColor = "yellowgreen";
        document.getElementById("dong_ho").style.color = "#fff";
    } else {
        document.getElementById("dong_ho").style.backgroundColor = "#333";
        document.getElementById("dong_ho").style.color = "white";
    }
}
dong_ho = setInterval("tg()",1000);