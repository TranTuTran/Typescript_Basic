// Tuple type : kiểu bộ dữ liệu 
// giống Array, nhưng số phần tử phải được khai báo trước (cố định), quan trọng thứ tự 

let skills: (string|number)[]= ['Hỏi Dân IT', 25];
skills.push('coding');
skills.push(69);

//tuple: dataType/size/order(trình tự)
let skills2: [ string, number] = ['Hỏi Dân IT', 25];

let skill3: [boolean, string, number?]; // number? -> optional: có hay không có giá trị đều được

skill3 = [true, 'Eric', 25];

