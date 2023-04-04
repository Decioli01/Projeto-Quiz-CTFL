//inicial data

let currentQuestion = 0;


//functions
function comecar() {
    document.getElementById('titulo-inicial').style.display = 'none';
    document.getElementById('ctfl-logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';

    if (questions[currentQuestion]){
        let q = questions[currentQuestion];
        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHTML = ''; 
        for (let i in q.options) {
            optionsHTML += `<div class='option'>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHTML;
    }
    else{

    }
}