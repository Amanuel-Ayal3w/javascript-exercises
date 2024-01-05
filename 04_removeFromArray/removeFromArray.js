const removeFromArray = function(array, ...args) {
    const resultArray = [...array];
    
    for (let i = 0; i < args.length; i++) {
        const removedItem = resultArray.indexOf(args[i]);

        if (removedItem !== -1) {
            resultArray.splice(removedItem, 1);
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
