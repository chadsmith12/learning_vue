import { generateRandomNumber } from '../helpers/numberhelpers'

const ADDITION_MODE = 1;
const SUBTRACTION_MODE = 2;


export default class ProbemCreator {
    constructor() {
        this.mode = this.generateMode();
        this.operator = this.generateOperator();
        this.leftSide = generateRandomNumber(1, 50);
        this.rightSide = generateRandomNumber(1, 50);
        this.answer = this.generateAnswer();
    }

    generateOperator() {
        let mode = this.mode;

        return mode === ADDITION_MODE ? '+' : '-';
    }

    generateMode() {
        let mode = generateRandomNumber(1, 2);

        return mode == 1 ? ADDITION_MODE : SUBTRACTION_MODE;
    }

    generateAnswer() {
        switch(this.mode) {
            case ADDITION_MODE: 
                return this.leftSide + this.rightSide;
            case SUBTRACTION_MODE:
                return this.leftSide - this.rightSide;
        }
    }
}