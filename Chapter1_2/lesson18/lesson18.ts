// Union ~ join: hợp nhất 
// a.concat(b): nối chuỗi b vào cuối chuỗi a
// cú pháp union cung cấp cho chúng ta 1 biến có nhiều loại kiểu dữ liệu 
// cú pháp union báo lỗi cú pháp trước khi chạy , tăng trãi nghiệm người dùng
function addNumberOrString(a: number | string, b: string | number) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Parameters(thông số) must be numbers or strings');
}

console.log(addNumberOrString(true,"tran"))