//inicial data

let currentQuestion = 0;
let points = 0;
var timer;

let scoreArea = document.querySelector('.scoreArea button')
if(scoreArea){
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
function startTimer(){
    var presentTime = document.getElementById("timer").innerHTML;
    var timeArray = presentTime.split(":");
    var minutes = timeArray[0];
    var seconds = timeArray[1];
    var totalSeconds = minutes * 60 + parseInt(seconds);
  
    timer = setInterval(function() {
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
function stopTimer(){
    clearInterval(timer);
}
//função para mostrar as questões;
function showQuestion(){
    if (questions[currentQuestion]){
        let q = questions[currentQuestion];
        
        //calcula porcentagem para fazer a animação na barra de progresso avançar conforme avança as questões
        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;

        //esconde a area do resultado e mostra a area das questões
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        //monta a questão
        document.querySelector('.question').innerHTML = parseInt(currentQuestion + 1) + ' - ' + q.question;

        //colocar as alternativas
        let optionsHTML = ''; 
        for (let i in q.options) {
            optionsHTML += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;

        //evento de clique na opção
        document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click', optionClickEvent);
        })
    }
    else{
        finishQuiz();
    }
}    

//função para avançar as questões
function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));
    console.log(clickedOption)
    
    if(questions[currentQuestion].answer === clickedOption) {
        points++;
    }
    currentQuestion++;
    showQuestion();
}

//função para quando acabar as questões
function finishQuiz(){
    let acertos = Math.floor((points / questions.length) * 100);

    document.querySelector('.scorePct').innerHTML = `Acertou ${acertos}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${points}.`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';

    if (acertos < 65){
        let parabens = document.querySelector('.scoreText1');
        parabens.innerHTML = 'Que pena!'
        document.querySelector('.scorePct').style.color = '#D31145'
        document.querySelector('.prizeImage').src = './img/rejected.png'
    }
    stopTimer();
}
//função do botão "Fazer Novamente"
function resetEvent(){
    window.location.reload();
    points = 0;
    currentQuestion = 0;
}
