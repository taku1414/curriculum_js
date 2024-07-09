
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
    console.log(num % 2 === 0 + 'は偶数です');
}


class car {
    constructor(petrol, number) {
        this.petrol = petrol;
        this.number = number;
    }
    getNumGas() {
        console.log(`ガソリンは${this.petrol}です、このナンバーは${this.number}です`);
    }
}

let 車 = new car('ハイオク', 111);
車.getNumGas();