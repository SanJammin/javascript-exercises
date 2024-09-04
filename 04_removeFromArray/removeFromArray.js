const removeFromArray = function(array, ...args) {
    return array.filter((items) => !args.includes(items));
};

console.log(removeFromArray([1,2,3,4],3,4))

// Do not edit below this line
module.exports = removeFromArray;
