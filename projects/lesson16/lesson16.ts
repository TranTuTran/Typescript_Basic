// trái ngược với kiểu dữ liệu "Any" 
//khi không cần trả về kết quả (return) => khi đó dùng void để gán kiểu dữ liệu
// void : thường xuyên dùng với funtion
const sum = (a:number, b:number): number => {
    return a+b;
} 

const hangleLogs = (message: string): void => {
    console.log(">>> message: ", message)
}

console.log(sum(1,2))
