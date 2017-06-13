const getLine = (from, to, matrix) => matrix[from].slice(from, to);
const getBotLine = (from, to, matrix) => matrix[matrix.length - 1 - from].slice(from, to);
const getColumn = (from, to, column, matrix) => matrix.map(row => row[column]).slice(from, to);

const makeFlatten = (matrix) => {
    if (matrix.length === 1) {
        return matrix[0];
    }

    const iter = (from, to, acc) => {
        if (from > to) {
            return acc.reverse();
        }

        const top = getLine(from, to, matrix);
        const bot = getBotLine(from, to, matrix).reverse();
        const right = getColumn(from, to + 1, to, matrix);
        const left = getColumn(from + 1, to, from, matrix).reverse();

        const newAcc = [...top, ...right, ...bot, ...left];

        return iter(from + 1, to - 1, acc.concat(newAcc));
    };
    return iter(0, matrix.length - 1, []);
};

const printResult = array => console.log(array.join(' '));

export default makeFlatten;