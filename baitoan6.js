const danhSachQuanBai = [
  {
    id: 1,
    name: "Ba bích", // Tên quân bài, ví dụ: Năm cơ, Sáu bích...
    exp: 3, //Hệ số quân bài (từ 1 đến 13)
    point: 1, // Điểm của quân bài (từ 1 đến 4)
  },
  {
    id: 2,
    name: "Năm rô",
    exp: 5,
    point: 3,
  },
  {
    id: 3,
    name: "Bốn cơ",
    exp: 4,
    point: 4,
  },
];
function nhapQuanBai() {
  var ten = prompt("nhập tên quân bài");
  var heSo = prompt("nhập hệ số quân bài");
  var diem = prompt("nhập điểm quân bài");
  var newQuanBai = {
    id: danhSachQuanBai.length + 1,
    name: ten,
    point: diem,
    exp: heSo,
  };
  danhSachQuanBai.push(newQuanBai);
}
var nhap = prompt(`1.Nhập 1 quân bài
2.Nhập mảng các quân bài
3.Sắp xếp tăng dần
4.Sắp xếp giảm dần
5.Xuất dữ liệu
0.Thoát`);
nhap = Number(nhap); // chuyen nhap tu kieu string sang kieu number
if (nhap < 0 && nhap > 5) {
  console.log("vui long nhap lai");
} else if (nhap === 0) {
  console.log("Goodbye");
} else if (nhap === 1) {
  function nhapQuanBai() {
    var ten = prompt("nhập tên quân bài");
    var heSo = prompt("nhập hệ số quân bài");
    var diem = prompt("nhập điểm quân bài");
    var newQuanBai = {
      id: danhSachQuanBai.length + 1,
      name: ten,
      point: diem,
      exp: heSo,
    };
    danhSachQuanBai.push(newQuanBai);
  }
  nhapQuanBai();
  console.log(danhSachQuanBai);
} else if (nhap === 2) {
  var nhap = prompt("nhập độ dài mảng");
  nhap = Number(nhap);
  for (var i = 0; i <= nhap; i++) {
    nhapQuanBai();
  }
  console.log(danhSachQuanBai);
} else if (nhap === 5) {
  console.log(danhSachQuanBai);
} else if (nhap === 3) {
  danhSachQuanBai.sort(function (el1, el2) {
    return el1.exp - el2.exp;
  });
  console.log(danhSachQuanBai);
} else if (nhap === 4) {
  danhSachQuanBai.sort(function (el1, el2) {
    return el2.exp - el1.exp;
  });
  console.log(danhSachQuanBai);
}
