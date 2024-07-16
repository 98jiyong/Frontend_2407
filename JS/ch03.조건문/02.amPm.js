// 현재 날짜 및 시간을 아는 방법
let today = new Date();
console.log(today);

let hour = today.getHours();  
let min = today.getMinutes();
console.log(hour);
console.log(new Date().getHours());

if (hour < 12) {
  console.log(`오전 ${hour}시 ${min}분 입니다.`);
}
else {
  console.log(`오후 ${hour}시 ${min}분 입니다.`);  
}
console.log(`${today.getFullYear()}-0${today.getMonth()+1}-${today.getDate()}`);
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);