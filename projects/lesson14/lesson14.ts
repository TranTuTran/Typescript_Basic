// Enum(Enumerated : liệt kê): là 1 nhóm giá trị hằng số

enum API_STATUS {
            PENDDING , // Khai báo như vậy sẽ hiện id là số thứ tự
            FULFILLED = "FULFILLED",// Khai báo như vậy để chuyển kiểu dữ liệu thành member
            REJECTED = "REJECTED"
}
let a = API_STATUS.PENDDING;
let a1 = API_STATUS.FULFILLED;

console.log(">>> a = ",a,", a1 = ", a1)

