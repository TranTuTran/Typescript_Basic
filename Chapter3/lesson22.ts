for (let i = 0; i < 10; i++){
    console.log(">>i = ", i);
}


// không cần phải luôn có giá trị đầu vào(khai báo ở ngoài trước), điều kiện (có break)
let i1 = 0;
for ( ; i1 < 10; i1++){
    console.log(i1)
    if (i1 > 9) break;
}