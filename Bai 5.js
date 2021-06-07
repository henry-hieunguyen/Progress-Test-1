let d = prompt('Enter day');
let m = prompt('Enter month');
let y = prompt('Enter year');

if(d>=1 && d<=31 && m>=1 && m <=12){
    console.log(d + '/' + m + '/' + y + ' là ngày hợp lệ');}
else {
    console.log(d + '/' + m + '/' + y + ' là ngày khong hợp lệ');    
}    