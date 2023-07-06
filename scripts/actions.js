export const dividir = (numberA, numberB) => {
    if (isNaN(numberA) || isNaN(numberB) || +numberB === 0) {
        return "Valores inválidos";
    }
    return +numberA / +numberB;
};

export const multiplicar = (numberA, numberB) => {
    if (isNaN(numberA) || isNaN(numberB)) {
        return "Valores inválidos";
    }
    return +numberA * +numberB;
};

export const somar = (numberA, numberB) => {
    if (isNaN(numberA) || isNaN(numberB)) {
        return "Valores inválidos";
    }
    return +numberA + +numberB;
};

export const subtrair = (numberA, numberB) => {
    if (isNaN(numberA) || isNaN(numberB)) {
        return "Valores inválidos";
    }
    return +numberA - +numberB;
};
