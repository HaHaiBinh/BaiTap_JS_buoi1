/* Bai 1
Input: Tạo biến ngày, tạo biến tiền lương

Các bước xử lý
B1: tạo 2 biến số ngày và tiền lương
B2: tạo biến lưu kết quả
B3: công thức tính: tiền lương * số ngày

Output: Kết quả (tiền)
*/

function tinhLuong(){
    var luongMotNgayValue = document.getElementById
    ("txt-luong").value*1;
    console.log("luongMotNgayValue",luongMotNgayValue);

    var soNgayLamValue = document.getElementById
    ("txt-so-ngay-lam").value*1;
    console.log("soNgayLamValue",soNgayLamValue);

    var ketQua1= luongMotNgayValue * soNgayLamValue;
    console.log("ketQua1",ketQua1);

    document.getElementById("ket-qua-1").innerHTML=
    `<div>Tiền lương: ${ketQua1} </div>`
}

/* Bai 2
Input: Tạo 5 biến số thực

Các bước xử lý 
B1: tạo biến số thực 
B2: tạo biến lưu kết quả
B3: công thức tính: tổng 5 số thực / 5 số thực

Output: Kết quả
*/

function tinhTrungBinh(){
    var soThu1Value = document.getElementById("txt-thu-1").value*1;
    console.log("soThu1Value",soThu1Value);

    var soThu2Value = document.getElementById("txt-thu-2").value*1;
    console.log("soThu1Value",soThu1Value);

    var soThu3Value = document.getElementById("txt-thu-3").value*1;
    console.log("soThu1Value",soThu1Value);

    var soThu4Value = document.getElementById("txt-thu-4").value*1;
    console.log("soThu1Value",soThu1Value);

    var soThu5Value = document.getElementById("txt-thu-5").value*1;
    console.log("soThu1Value",soThu1Value);

    var ketQua2= (soThu1Value+soThu2Value+soThu3Value+soThu4Value+soThu5Value)/5;
    console.log("ketQua2",ketQua2);

    document.getElementById("ket-qua-2").innerHTML=
    `<div>Giá trị trung bình: ${ketQua2}</div>`
}

/* Bai3
Input: Tạo biến tiền quy đổi USA, tạo biến số tiền USA cần quy đổi

Các bước xử lý 
B1: tạo biến tiền quy đổi, số tiền cần quy đổi
B2: tạo biến kết quả
B3: công thức tính: số tiền quy đổi * tiền quy đổi

Output: Kết quả

*/

function quyDoiTien(){
    const giaHienTai = 23500;
    console.log("giaHienTai", giaHienTai);

    var soTienUSDValue = document.getElementById("txt-so-tien-USD").value*1;
    console.log("soTienUSDValue",soTienUSDValue);

    var ketQua3= giaHienTai*soTienUSDValue;
    console.log("ketQua3",ketQua3);

    document.getElementById("ket-qua-3").innerHTML=
    `<div>Số tiền sau quy đổi: ${ketQua3}</div>`
}

/* Bai4
Input : Tạo 2 biến chiều dài và chiều rộng

Các bước xử lý
B1: tạo 2 biến chiều dài và chiều rộng
B2: tạo biến kết quả
B3: công thức tính
- Diện tích: chiều dài * chiều rộng
- Chu vi: (chiều dài + chiều rộng) / 2

Output: Kết quả 
*/

function Tinh(){
    var chieuDaiValue = document.getElementById("txt-chieu-dai").value*1;
    console.log("chieuDaiValue",chieuDaiValue);

    var chieuRongValue = document.getElementById("txt-chieu-rong").value*1;
    console.log("chieuRongValue",chieuRongValue);

    var ketQuaDienTich = chieuDaiValue*chieuRongValue;
    console.log("ketQuaDienTich",ketQuaDienTich);
    
    var ketQuaChuVi = (chieuDaiValue+chieuRongValue)/2;
    console.log("ketQuaChuVi",ketQuaChuVi);

    document.getElementById("ket-qua-4").innerHTML=
    `<div>Diện tích: ${ketQuaDienTich} ; Chu vi: ${ketQuaChuVi}</div>`
}

/* Bai5
Input: Tạo biến nhập 1 số có 2 chữ số

Các bước xử lý : 
B1: Tạo biến là số có 2 chữ số
B2: Lấy hàng đơn vị của số có 2 chữ số
B3: Lấy hàng chục của số có 2 chữ số
B4: Công thức tính : Hàng đơn vị + Hàng chục

Output: Kết quả

*/

function tinhTong(){
    var soValue = document.getElementById("txt-nhap-so").value*1;
    console.log("soValue",soValue);

    
    var layHangDonVi = soValue%10;
    console.log("layHangDonVi",layHangDonVi); 

    var layHangChuc = Math.floor(soValue%100/10);
    console.log("layHangChuc",layHangChuc);

    var ketQua5 = layHangChuc + layHangDonVi;
    console.log("ketQua5",ketQua5);
    
    document.getElementById("ket-qua-5").innerHTML=
    `<div>Tổng: ${ketQua5}</div>`
}