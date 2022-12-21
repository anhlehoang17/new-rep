var tuDien = [{ id: 1, tu: "art", nghia: "vẽ" }];
for (var i = 0; i > -1; ) {
  var nhap = prompt(`== TỪ ĐIỂN ANH VIỆT ==
--1. Nhập dữ liệu
--2. Xuất dữ liệu
--3. Dịch từ
--4. Thoát`);
  nhap = Number(nhap);
  if (nhap > 4 || nhap < 1) {
    console.log("vui long nhap lai");
  } else if (nhap === 2) {
    console.log(tuDien);
  } else if (nhap === 1) {
    var word = prompt("nhập từ mới");
    var mean = prompt("nhập ý nghĩa ");
    var newWord = {
      id: tuDien.length + 1,
      tu: word,
      nghia: mean,
    };
    tuDien.push(newWord);
    console.log(tuDien);
  } else if (nhap === 3) {
    var timKiem = prompt("nhập từ cần tìm");
    var idx = tuDien.findIndex(function (tuD) {
      return tuD.tu === timKiem;
    });
    console.log(idx);

    if (idx !== -1) {
      console.log(tuDien[idx].nghia);
    } else {
      console.log("không tìm thấy");
    }
  } else if (nhap === 4) {
    console.log("Cảm ơn đã sử dụng từ điển!");
    break;
  }
}
