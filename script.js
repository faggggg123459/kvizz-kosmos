const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const questionImage = document.getElementById('question-image');
const answerButtons = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'Скільки планет у Сонячній системі?',
    image: 'https://th.bing.com/th/id/OIP.wrirriaUfQh6Lkm-5DGOXwHaD4?w=294&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Яка планета найбільша?',
    image: 'https://th.bing.com/th/id/OIP.cAYsaOQL95LYlTUdRPOQuwHaFj?w=200&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Марс', correct: false },
      { text: 'Юпітер', correct: true },
      { text: 'Земля', correct: false },
      { text: 'Сатурн', correct: false }
    ]
  },
  {
    question: 'Яка планета найближча до Сонця?',
    image: 'https://th.bing.com/th?q=%d0%9e%d0%b1%d0%be%d0%b8+%d0%9d%d0%b0+%d0%a2%d0%b5%d0%bb%d0%b5%d1%84%d0%be%d0%bd+%d0%9a%d0%be%d1%81%d0%bc%d0%be%d1%81&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=UA&setlang=ru&adlt=moderate&t=1&mw=247',
    answers: [
      { text: 'Венера', correct: false },
      { text: 'Меркурій', correct: true },
      { text: 'Земля', correct: false },
      { text: 'Марс', correct: false }
    ]
  },
  {
    question: 'Яке світило є найближчим до Землі?',
    image: 'https://th.bing.com/th/id/OIP.R9Uv9roAn6wtatiPn6FQEQHaHa?w=161&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Полярна зірка', correct: false },
      { text: 'Сонце', correct: true },
      { text: 'Сіріус', correct: false },
      { text: 'Бетельгейзе', correct: false }
    ]
  },
  {
    question: 'Скільки місяців у Сатурна?',
    image: 'https://th.bing.com/th/id/OIP.sl4P-yOi7mLPaoMpRDgnPAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: '62', correct: true },
      { text: '32', correct: false },
      { text: '52', correct: false },
      { text: '12', correct: false }
    ]
  },
  {
    question: 'Який найбільший метеорит, знайдений на Землі?',
    image: 'https://th.bing.com/th/id/OIP.J3GM_6SlGb9wJ8-f9nQHcAHaEK?w=284&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Гоба', correct: true },
      { text: 'Кротовий шлях', correct: false },
      { text: 'Кампо-дель-Сьєло', correct: false },
      { text: 'Сіхоте-Алинський', correct: false }
    ]
  },
  {
    question: 'Яка планета має найбільше кілець?',
    image: 'https://th.bing.com/th/id/OIP.iyhblOJXs3x6ISZVdXIYvgHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Сатурн', correct: true },
      { text: 'Юпітер', correct: false },
      { text: 'Уран', correct: false },
      { text: 'Нептун', correct: false }
    ]
  },
  {
    question: 'Яка зірка є найяскравішою на нічному небі?',
    image: 'https://th.bing.com/th/id/OIP.3MFuLnGiRFW4uBbo67xJDgHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Сіріус', correct: true },
      { text: 'Полярна зірка', correct: false },
      { text: 'Бетельгейзе', correct: false },
      { text: 'Рігель', correct: false }
    ]
  },
  {
    question: 'Що таке чорна діра?',
    image: 'https://th.bing.com/th/id/OIP.9vA2t7vdymo-bNyQEbOnfwHaD4?w=345&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Об’єкт із сильним магнітним полем', correct: false },
      { text: 'Об’єкт із гравітаційним полем настільки сильним, що навіть світло не може його покинути', correct: true },
      { text: 'Потужне джерело світла', correct: false },
      { text: 'Кластер зірок', correct: false }
    ]
  },
  {
    question: 'Який космічний апарат вперше залишив межі Сонячної системи?',
    image: 'https://th.bing.com/th/id/OIP.18DGNKilXaKPxSYOGHe55wHaE8?w=275&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    answers: [
      { text: 'Вояджер-1', correct: true },
      { text: 'Аполлон-11', correct: false },
      { text: 'Марінер-10', correct: false },
      { text: 'Піонер-10', correct: false }
    ]
  }
];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
  startButton.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  resultsContainer.classList.add('hidden');
  score = 0;
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  if (question.image) {
    questionImage.src = question.image;
    questionImage.classList.remove('hidden');
  } else {
    questionImage.classList.add('hidden');
  }
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('btn');
    if (answer.correct) button.dataset.correct = answer.correct;
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hidden');
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';
  setStatusClass(selectedButton, correct);
  if (correct) score++;
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === 'true');
  });
  nextButton.classList.remove('hidden');
}

function setStatusClass(element, correct) {
  element.style.backgroundColor = correct ? 'green' : 'red';
}

function endQuiz() {
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  scoreElement.textContent = `Ви набрали ${score} з ${questions.length} балів!`;
}

function restartQuiz() {
  startQuiz();
}




