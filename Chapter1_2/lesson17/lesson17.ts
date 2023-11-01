// TypeScript Data Type - Never
// 1 function xử lý lỗi (handle exception: xử lý ngoại lệ)
function handleException (errorMessage: string): never {
    throw Error(errorMessage); // throw: xử lý ngoại lệ 
}

function runInfinity(): void { // hàm void thực chất trả ra undefined
//     while (true) {
//     console.log("running...");
//    }
 }

// handleException("Just a test error");
let a = handleException("Just a test error");
console.log(a)
