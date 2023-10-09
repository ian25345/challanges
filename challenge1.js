function calculateGrade(){
    //User enters student marks here
    let marks = prompt("Enter Marks (0-100): ");

    // if statement to generate grade basement on grading system
    if (marks > 79) {
        console.log("grade: A")
    }else if (marks >= 60 && marks <= 79){
        console.log("grade: B")
    }else if (marks > 49 && marks <= 59){
        console.log("grade: C")
    }else if (marks >= 40 && marks <= 49){
        console.log("grade: D")
    }else if(marks <40){
        console.log("grade: E")
    }else{ //Error to be generated if marks are out of range
        console.log("Error! ")
    }
}