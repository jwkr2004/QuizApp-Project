function finish(){
    var q1 = document.Quiz.q1.value;
    var q2 = document.Quiz.q2.value;
    var q3 = document.Quiz.q3.value;
    var q4 = document.Quiz.q4.value;
    var q5 = document.Quiz.q5.value;
    var answers = 0;

    if(q1 == "B"){answers++};
    if(q2 == "D"){answers++};
    if(q3 == "B"){answers++};
    if(q4 == "C"){answers++};
    if(q5 == "A"){answers++};

    if(q1 == "" || q2 == "" || q3 == "" || q4 == "" || q5 == ""){
        alert("Please answer every question in the quiz")
    }
    else{
        alert("You have a score of " + answers + " out of 5.");
    }

}
