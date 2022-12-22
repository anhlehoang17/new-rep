var students = [
  {
    id: 1,
    name: "Dinh",
    toan: 5,
    ly: 6,
    hoa: 7,
  },
  {
    id: 2,
    name: "Nam",
    toan: 10,
    ly: 8,
    hoa: 5,
  },
  {
    id: 3,
    name: "Tan",
    toan: 3,
    ly: 4,
    hoa: 5,
  },
  {
    id: 4,
    name: "Hung",
    toan: 9,
    ly: 7,
    hoa: 7,
  },
  {
    id: 5,
    name: "Tri",
    toan: 9,
    ly: 8,
    hoa: 9,
  },
  {
    id: 6,
    name: "Anh",
    toan: 9,
    ly: 10,
    hoa: 9,
  },

  {
    id: 7,
    name: "Binh",
    toan: 3,
    ly: 6,
    hoa: 9,
  },
  {
    id: 8,
    name: "Anhhh",
    toan: 9,
    ly: 10,
    hoa: 9,
  },
];

function tong(x, y, z) {
  return x + y + z;
}
var studentsGioi = [];
while (true) {
  var nhap =
    prompt(`1.Kiểm tra xem có phải tất cả sinh viên đều có các môn trên điểm trung bình không? (biết điểm trung bình là 5)

2.Kiểm tra xem có sinh viên nào xếp loại giỏi không? (có các môn đều 8 điểm trở lên)

3.Lọc ra các sinh viên xếp loại giỏi và in ra thông tin gồm Tên, Toán, Lý, Hóa

4.tìm 1 sinh viên xếp loại giỏi

5.Cộng cho mỗi sinh viên 1 điểm toán

6.Thêm thuộc tính tổng điểm 3 môn

7.Tính tổng điểm toán của các sinh viên

8.tính điểm toán trung bình của các sinh viên

9.Sắp xếp danh sách sinh viên theo điểm toán tăng dần
10. thoats `);

  nhap = Number(nhap);
  if (nhap === 1) {
    for (var i = 0; i < students.length; i++) {
      if (students[i].toan < 5 || students[i].ly < 5 || students[i].hoa < 5) {
        console.log("một vài sinh viên không có điểm trung bình");
        break;
      }
    }
    if (i === students.length) {
      console.log(" tất cả sinh viên đều có các môn trên điểm trung bình ");
    }
  }
  //2
  else if (nhap === 2) {
    for (var i = 0; i < students.length; i++) {
      if (students[i].toan > 8 && students[i].ly > 8 && students[i].hoa > 8) {
        console.log("yes");
      }
    }
  }
  //3
  else if (nhap === 3) {
    console.log("sinh viên xếp loại giỏi:");
    for (var i = 0; i < students.length; i++) {
      if (students[i].toan > 8 && students[i].ly > 8 && students[i].hoa > 8) {
        console.log(
          `tên ${students[i].name} điểm toán ${students[i].toan} điểm lý ${students[i].ly} điểm hóa ${students[i].hoa}`
        );
      }
    }
  }
  //4
  else if (nhap === 4) {
    console.log("1 sinh viên xếp loại giỏi:");
    for (var i = 0; i < students.length; i++) {
      if (students[i].toan > 8 && students[i].ly > 8 && students[i].hoa > 8) {
        console.log(
          `tên ${students[i].name} điểm toán ${students[i].toan} điểm lý ${students[i].ly} điểm hóa ${students[i].hoa}`
        );
        break;
      }
    }
  }

  //5
  else if (nhap === 5) {
    for (var i = 0; i < students.length; i++) {
      if (students[i].toan < 10) {
        students[i].toan += 1;
      }
    }
    console.log(students);
  }
  //6
  else if (nhap === 6) {
    for (var i = 0; i < students.length; i++) {
      students[i].sum = tong(students[i].toan, students[i].ly, students[i].hoa);
    }
    console.log(students);
  }
  //7
  else if (nhap === 7) {
    var tongDiemToan = 0;
    for (var i = 0; i < students.length; i++) {
      tongDiemToan += students[i].toan;
    }
    console.log(tongDiemToan);
  }
  //8
  else if (nhap === 8) {
    console.log("điểm toán trung bình là :", tongDiemToan / students.length);
  }
  //9
  else if (nhap === 9) {
    students.sort(function (el1, el2) {
      return el1.toan - el2.toan;
    });
    console.log(students);
  }
  //10
  else if (nhap === 10) {
    console.log("goodbye");
    break;
  }
}
