const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "In the middle of every difficulty lies opportunity.",
    "The only way to do great work is to love what you do.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "The secret of getting ahead is getting started.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Believe you can and you're halfway there.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "The future belongs to those who believe in the beauty of their dreams."
];


// getElementById() メソッドは、指定したIDを持つHTML要素を取得するためのメソッドです。
const quoteElement = document.getElementById('quote');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');
const countElement = document.getElementById('count');

let remainingQuotes = quotes.slice(0, 5);
let correctAnswers = 0;

quoteElement.textContent = getRandomQuote();

// ユーザーがキーボードで何かキーを入力するたびに checkInput() 関数が実行されるようになります。
inputElement.addEventListener('keydown', checkInput);


function checkInput(event) {
    if (event.key === 'Enter') {
        const inputText = inputElement.value;
        const quoteText = quoteElement.textContent;
        if (inputText === quoteText) {
            resultElement.textContent = '正解！';
            correctAnswers++;
        } else {
            resultElement.textContent = '不正解';
        }
        countElement.textContent = `正解数: ${correctAnswers}`;
        inputElement.value = '';
        quoteElement.textContent = getRandomQuote();
    }
}

// function getRandomQuote(){
//     if (remainingQuotes.length === 0){
//         const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
//         const quote = remainingQuotes[randomIndex];
//         remainingQuotes.splice(randomIndex, 1);
//         return quote;
//     }
// }


// 修正後
function getRandomQuote(){
    if (remainingQuotes.length === 0){
        remainingQuotes = quotes.slice(0, 5);
    }
    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    const quote = remainingQuotes[randomIndex];
    remainingQuotes.splice(randomIndex, 1);
    return quote;
}
