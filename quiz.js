const api_url ="https://opentdb.com/api.php?amount=16&category=18&difficulty=medium&type=multiple";
let questions;
const answers = [];
let counter = 0;
let startBtn;
const bg = document.getElementById('quiz');
const convert = document.getElementById('converter');
const nxtBtn = document.getElementById('nextButton');
let corAns;
const correct = [];
const ques = [];

function clearArray(arr){
    arr.splice(0, arr.length);
}

function writeQuestion() {
    clearArray(answers);
    bg.style.backgroundColor = 'white';
    for(let i = 0; i < 3; i++) {
        answers.push(questions.results[counter].incorrect_answers[i]);
    };
    answers.push(questions.results[counter].correct_answer);
    const arr = [];
    const arr2 = answers.slice();
    for(let i = 0; i < arr2.length; i++) {
        convert.innerHTML = arr2[i];
        arr2[i] = convert.innerText;
    }
    let pos3 = answers[3];
    for(let i = 0; i < answers.length; i++){
        let pos = Math.floor(Math.random() * (arr2.length));
        if(arr2[pos] === pos3){
            corAns = i;
        }
        arr.push(arr2[pos]);
        arr2.splice(pos, 1);
    }
    // console.log(arr);
    // console.log(corAns);

    convert.innerHTML = questions.results[counter].question;
    let queText = convert.innerText;
    ques[counter] = queText;
    let queFormat = QueFormat(queText, arr);
    // console.log(queFormat);
    quiz.render(queFormat);
}

function checkAnswer(val) {
    // console.log(val);
    nxtBtn.disabled = false;
    let btns = document.getElementsByClassName('answers')
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }
    if(val == corAns){
        bg.style.backgroundColor = 'limegreen';
        correct.push('Correct');
    } else {
        bg.style.backgroundColor = 'red';
        correct.push('Incorrect');
        document.getElementById(corAns).style.backgroundColor = 'limegreen';
    }
}

function nextQuestion(){
    ++counter;
    // console.log(counter);
    let btns = document.getElementsByClassName('answers')
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = false;
    }
    if(counter > 15){
        nxtBtn.style.display = 'none';
        bg.style.backgroundColor = 'white';
        quiz.render(AnswerPage(ques, correct));
    } else{
        nxtBtn.disabled = true;
        writeQuestion();
        for(let i = 0; i < btns.length; i++){
            btns[i].style.backgroundColor = '#F0F0F0';
        }
    }
}

async function getapi() {
    const response = await fetch(api_url);
    questions = await response.json();
    // console.log(questions);
}

function quizBtnSetup() {
    getapi();
    counter = 0;
    bg.style.backgroundColor = 'white';
    nxtBtn.disabled = true;
    nxtBtn.style.display = 'inline';
    if(answers.length > 0){
        clearArray(answers);
    }
    if(correct.length > 0){
        clearArray(correct);
    }
    if(ques.length > 0){
        clearArray(ques);
    }
    quiz.render(StartQuiz());
}

