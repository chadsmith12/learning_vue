<template>
    <div class="card mx-auto" style="width: 40rem">
        <div class="card-body">
            <h5 class="card-title">{{ question }}</h5>
            <div class="card-text">
                <div class="row">
                    <div class="col-sm-6">
                    <button class="btn btn-primary" @click="onAnswer(answerData[0].isCorrect)">{{ answerData[0].value }}</button>
                    </div>
                    <div class="col-sm-6">
                    <button class="btn btn-primary" @click="onAnswer(answerData[1].isCorrect)">{{ answerData[1].value }}</button>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-6">
                        <button class="btn btn-primary" @click="onAnswer(answerData[2].isCorrect)">{{ answerData[2].value }}</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="btn btn-primary" @click="onAnswer(answerData[3].isCorrect)">{{ answerData[3].value }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ProblemCreator from "../math-module/ProblemCreator";
import { generateRandomNumber } from "../helpers/numberhelpers";

export default {
    data() {
        return {
            question: 'Current Question...',
            answerData: [
                {isCorrect: true, value: 42},
                {isCorrect: false, value: 43},
                {isCorrect: false, value: 44},
                {isCorrect: false, value: 45}

            ]
        }
    },
    methods: {
        onAnswer(isCorrect) {
            if(isCorrect){
                window.console.log("Correct!")
            }
        },

        generateQuestion() {
            var newProblem = new ProblemCreator();
            let leftSide = newProblem.leftSide;
            let rightSide = newProblem.rightSide;
            let answer = newProblem.answer;

            this.question = `What is ${leftSide} ${newProblem.operator} ${rightSide}`;
            this.generateAnswerData(answer);
        },
        generateAnswerData(answer) {
            this.answerData[0].value = generateRandomNumber(answer - 10, answer + 10, answer);
            this.answerData[0].isCorrect = false;
            this.answerData[1].value = generateRandomNumber(answer - 10, answer + 10, answer);
            this.answerData[1].isCorrect = false;
            this.answerData[2].value = generateRandomNumber(answer - 10, answer + 10, answer);
            this.answerData[2].isCorrect = false;
            this.answerData[3].value = generateRandomNumber(answer - 10, answer + 10, answer);
            this.answerData[3].isCorrect = false;

            var correctChoice = generateRandomNumber(0, 3);
            this.answerData[correctChoice].value = answer;
            this.answerData[correctChoice].isCorrect = true;
        }
    },

    created() {
        this.generateQuestion();
    }
}
</script>



