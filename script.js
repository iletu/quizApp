let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Welche Methode fügt ein Element am Ende eines Arrays hinzu?",
        "answer_1": "pop()",
        "answer_2": "push()",
        "answer_3": "shift()",
        "answer_4": "slice()",
        "right_answer": 2
    },
    {
        "question": "Welches Schlüsselwort erstellt eine Variable, deren Wert verändert werden kann?",
        "answer_1": "const",
        "answer_2": "return",
        "answer_3": "let",
        "answer_4": "function",
        "right_answer": 3
    },
    {
        "question": "Welcher Operator prüft Wert und Datentyp?",
        "answer_1": "==",
        "answer_2": "=",
        "answer_3": "!=",
        "answer_4": "===",
        "right_answer": 4
    },
    {
        "question": "Welche Methode entfernt das letzte Element eines Arrays?",
        "answer_1": "push()",
        "answer_2": "pop()",
        "answer_3": "shift()",
        "answer_4": "unshift()",
        "right_answer": 2
    },
    {
        "question": "Welche Eigenschaft gibt die Länge eines Arrays zurück?",
        "answer_1": "size",
        "answer_2": "count",
        "answer_3": "length",
        "answer_4": "index",
        "right_answer": 3
    },
    {
        "question": "Mit welcher Anweisung kann eine Bedingung geprüft werden?",
        "answer_1": "return",
        "answer_2": "if",
        "answer_3": "push",
        "answer_4": "console",
        "right_answer": 2
    },
    {
        "question": "Welche Methode speichert Daten im LocalStorage?",
        "answer_1": "localStorage.getItem()",
        "answer_2": "localStorage.save()",
        "answer_3": "localStorage.push()",
        "answer_4": "localStorage.setItem()",
        "right_answer": 4
    },
    {
        "question": "Was ist ein Array in JavaScript?",
        "answer_1": "Eine Liste von Werten",
        "answer_2": "Eine CSS-Klasse",
        "answer_3": "Eine HTML-Datei",
        "answer_4": "Eine Schleife",
        "right_answer": 1
    },
    {
        "question": "Welcher Befehl gibt einen Wert in der Browser-Konsole aus?",
        "answer_1": "print()",
        "answer_2": "return()",
        "answer_3": "console.log()",
        "answer_4": "push()",
        "right_answer": 3
    }
];


let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];

    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];      // variable: question = 0
    console.log('Selected answer is ', selection)

    let selectedQuestionNumber = selection.slice(-1)        // ich speichere in der Variable die letzte Buchstabe
    console.log('You choose the answer with the last string:', selectedQuestionNumber);
    console.log('The right answer is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Deine Antwort ist richtig!');
    } else {
        console.log('Versuche es noch einmal');
    }




}