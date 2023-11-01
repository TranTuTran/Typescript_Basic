// TypeScript Type Aliases
// đơn giản hóa kiểu dữ liệu union 
type ericType = number | string | object | boolean;

function addNumberOrString1(a: ericType, b: ericType) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Parameters(thông số) must be numbers or strings');
}

console.log(addNumberOrString1("12","tran"))