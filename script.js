let count = 0;
let numRight = 0;
let correctOne;
let numQuestion = 4;





let optOne = document.getElementById("btn0");
let optTwo = document.getElementById("btn1");
let optThree = document.getElementById("btn2");
let optFour = document.getElementById("btn3");

let createQuestion = function(questionText, choice1, choice2, choice3,  choice4, correctOne){
    questionText.innerText = "question";
    choice1 = optOne;
    choice1.innerText = "Alien";
    choice2 = optTwo;
    choice2.innerText = "Reptile";
    choice3 = optThree;
    choice3.innerText = "Dinosaur";
    choice4 = optFour;
    choice4.innerText = "Human";



};

let TrapCard = function () {
    correctOne = optTwo;

    optOne.onclick = function (){check(this)};
    optTwo.onclick = function(){check(this)};
    optThree.onclick = function(){check(this)};
    optFour.onclick = function(){check(this)};
    if(count === 0){
        createQuestion("What is your President?", "Alien", "Reptile","Dinosaur", "Human");
    }else if(count === 1){
        createQuestion("What is your Congress?", "Alien", "Reptile", "Dinosaur", "Human");
    }else if(count === 2){
        createQuestion("Are you Republican or Democrat?", "Alien", "Reptile", "Republican", "Democrat");
    }else if(count === 3){
        createQuestion("What is your affiliation?", "Alien", "Goverment", "Communism", "The Void");
    }else if(count === 4){
        createQuestion("Greatest killer of American Patriotism?", "Alien", "Communism", "Uncle Sam", "Immigration");
    }else{
        let question = document.getElementById("question");
        question.innerText = "you got " + numRight + " correct out of " + numQuestion;
        document.getElementById("buttons").innerHTML = " ";

    }

    document.getElementById("progress").innerText = "question " + (count + 1) + " of " + numQuestion;



};




let check = function(button){
    if(button === correctOne){
        numRight++;
    }
    count++;
    TrapCard();
};