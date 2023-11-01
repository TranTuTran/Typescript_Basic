// nếu đặt tên trùng nó báo lỗi nhưng vẫn chạy được 

const age1: number = 25;

switch(age1) {
    case 25:
    case 30:
      console.log("Đã đi làm")
      break;
    case 20:
      console.log("Đang là sinh viên")
      break;
    default:
      // code block
      console.log(">>> run default")
  }
  