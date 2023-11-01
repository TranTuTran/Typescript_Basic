let count: string = '10'; 

count = 'eric';

console.log(">>> check count  =", count)

let test = ['eric', '10',29]; // dự đoán kiểu dữ liệu string ỏ number 

test.push(25); // nên không bị lỗi 

// khi nào sử dụng type inference vs Type annotations ? 
// number vs Number  string vs String ?