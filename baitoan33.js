const doiBong = [
  {
    id: 1,
    ten: "Brazin",
    huanLuyenVien: "Tite",
    soLanVoDich: 15,
  },
  {
    id: 2,
    ten: "Đức",
    huanLuyenVien: "Hansi Flick",
    soLanVoDich: 10,
  },
  {
    id: 3,
    ten: "Pháp",
    huanLuyenVien: "Deschamps",
    soLanVoDich: 12,
  },
];
var nhap = prompt(
  "chon chuc nang\n 1. Nhập dữ liệu\n 2. Xuất dữ liệu\n3. Tìm thông tin\n4. Xóa thông tin đội bóng\n 0. Thoát "
);

nhap = Number(nhap); // chuyen nhap tu kieu string sang kieu number
if (nhap < 0 && nhap > 4) {
  console.log("vui long nhap lai");
} else if (nhap === 0) {
  console.log("Goodbye");
} else if (nhap === 1) {
  var naMe = prompt("nhap ten doi tuyen");
  var lead = prompt("nhap ten huan luyen vien");
  var champ = prompt("so lan vo dich");
  var newTeam = {
    id: doiBong.length + 1,
    ten: naMe,
    huanLuyenVien: lead,
    soLanVoDich: champ,
  };
  doiBong.push(newTeam);
  console.log(doiBong);
} else if (nhap === 3) {
  var iD = prompt("nhap id can tim: ");
  iD = Number(iD);
  if (iD > doiBong.length || iD < 0) {
    console.log("khong tim thay");
  } else {
    var idx = doiBong.findIndex(function (doi) {
      return doi.id === iD;
    });
    console.log(doiBong[idx]);
  }
} else if (nhap === 2) {
  console.log(doiBong);
} else if (nhap === 4) {
  var iD = prompt("nhap id can tim: ");
  iD = Number(iD);
  if (iD > doiBong.length || iD < 1) {
    console.log("khong tim thay doi bong nao de xoa");
  } else {
    var idx = doiBong.findIndex(function (doi) {
      return doi.id === iD;
    });
    console.log(idx);
    doiBong.splice(idx, 1);
    console.log(doiBong);
  }
}
