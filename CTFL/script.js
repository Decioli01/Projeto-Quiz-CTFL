//inicial data

let currentQuestion = 0;
let points = 0;
var timer;
const respostasErradas = [];

let scoreArea = document.querySelector('.scoreArea button')
if (scoreArea) {
    scoreArea.addEventListener('click', resetEvent)
}

//função do botão iniciar
function comecar() {
    document.getElementById('titulo-inicial').style.display = 'none';
    document.getElementById('ctfl-logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    startTimer();
    showQuestion();
}

//função para começar o timer
function startTimer() {
    var presentTime = document.getElementById("timer").innerHTML;
    var timeArray = presentTime.split(":");
    var minutes = timeArray[0];
    var seconds = timeArray[1];
    var totalSeconds = minutes * 60 + parseInt(seconds);

    timer = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            alert("Timer finalizado!");
            return;
        }
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds - minutes * 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
        totalSeconds--;
    }, 1000);
}
function stopTimer() {
    clearInterval(timer);
}

//função para mostrar as questões;
let questionsShuffled = [];

function shuffleQuestions() {
    questionsShuffled = [...questions]; // copia o array original
    for (let i = questionsShuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questionsShuffled[i], questionsShuffled[j]] = [questionsShuffled[j], questionsShuffled[i]];
    }
}

function showQuestion() {
    if (currentQuestion === 0) shuffleQuestions(); // embaralha no início

    if (questionsShuffled[currentQuestion]) {
        let q = questionsShuffled[currentQuestion];

        let pct = Math.floor((currentQuestion / questionsShuffled.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = `${currentQuestion + 1} - ${q.question}`;

        let optionsHTML = '';
        for (let i in q.options) {
            optionsHTML += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });

    } else {
        finishQuiz();
    }
}

//função para avançar as questões
function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));
    let questaoAtual = questions[currentQuestion];

    if (questaoAtual.answer === clickedOption) {
        points++;
    } else {
        respostasErradas.push({
            numeroQuestao: currentQuestion + 1,
            enunciado: questaoAtual.question,
            alternativaSelecionada: questaoAtual.options[clickedOption],
            respostaCorreta: questaoAtual.options[questaoAtual.answer]
        });
    }
    currentQuestion++;
    showQuestion();
}

//função para quando acabar as questões
function finishQuiz() {
    let acertos = Math.floor((points / questions.length) * 100);

    document.querySelector('.scorePct').innerHTML = `Acertou ${acertos}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${points}.`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';

    if (acertos < 65) {
        let parabens = document.querySelector('.scoreText1');
        parabens.innerHTML = 'Que pena!'
        document.querySelector('.scorePct').style.color = '#D31145'
        document.querySelector('.prizeImage').src = './img/rejected.png'
    }
    stopTimer();
}
//função do botão "Fazer Novamente"
function resetEvent() {
    window.location.reload();
    points = 0;
    currentQuestion = 0;
    respostasErradas.length = 0;
}

//funcao do modal de respostas erradas
function abrirModal() {
    const conteudo = document.getElementById("conteudoErros");
    conteudo.innerHTML = "";

    if (respostasErradas.length === 0) {
        conteudo.innerHTML = "<p>Parabéns! Você não errou nenhuma questão.</p>";
    } else {
        respostasErradas.forEach((erro) => {
            conteudo.innerHTML += `
                <p><strong>Questão ${erro.numeroQuestao}: ${erro.enunciado}</strong></p>
                <p>Sua resposta: <span style="color:red;">${erro.alternativaSelecionada}</span></p>
                <p>Resposta correta: <span style="color:green;">${erro.respostaCorreta}</span></p>
                <hr>
            `;
        });
    }
    document.getElementById("modalErros").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalErros").style.display = "none";
}

