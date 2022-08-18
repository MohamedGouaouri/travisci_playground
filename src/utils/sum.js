
function sum(...args){
    const initialValue = 0;
    return args.reduce((prev, current) => prev + current, initialValue)
}

module.exports = {
    sum
}