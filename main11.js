var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
  console.log(arrNumber[i]);
}
var arrNumber2 = [11, 22, 33, 44, 55];
for (var i = 10; i >= 0; i--) {
  console.log(arrNumber[i]);
}
arrNumber.pop();
arrNumber.shift();
arrNumber.push(0);
arrNumber.unshift(0);
arrNumber.splice(4, 0, 100);
arrNumber.splice(4, 1, 100);
console.log(arrNumber);
console.log(arrNumber.slice(4));
console.log(arrNumber.slice(0, 5));

console.log(arrNumber.concat(arrNumber2));
