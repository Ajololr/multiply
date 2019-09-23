module.exports = function multiply(first, second) {
    let result = '';
    let tempMas = [];
    for (let i = first.length - 1; i >= 0 ; i--) {
        for (let j = second.length - 1; j >= 0 ; j--) {
            if (tempMas[first.length + second.length - i - j - 2] === undefined) {
                tempMas[first.length + second.length - i - j - 2] = first[i] * second[j];
            } else{
                tempMas[first.length + second.length - i - j - 2] += first[i] * second[j]; 
            }        
        } 
    }  
    let i = 0;
    do {
        if (tempMas[i] % 10 !== tempMas[i]) {
            if (tempMas[i + 1] === undefined) {
                tempMas[i + 1] = 0;
            }
            tempMas[i + 1] += Math.floor(tempMas[i] / 10);
            tempMas[i] = tempMas[i] % 10;
        }
        i++;
    } while (tempMas[i] !== undefined);
    for (let j = tempMas.length - 1; j >= 0 ; j--) {
        result += tempMas[j];
    }
    return result;
}
