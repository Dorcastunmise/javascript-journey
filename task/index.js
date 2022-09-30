let students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
];
let scores = [91, 81, 71, 61, 51];
let degree = ['A', 'B', 'C', 'D', 'E'];

function totalScore(scr1, scr2) {
    let sum = scr1 + scr2;
    return sum;
}
function calcFinal() {
    for(let i = 0; i < students.length; i++) {
        students[i].sum = totalScore(students[i].score1, 
            students[i].score2);

    if(students[i].sum >= 51) {
        console.log(students[i].name + ' passed successfully');

        for(var x = 0; x < scores.length; x++) {

            if(students[i].sum >= scores[x]); {
            console.log('he had ' + students[i].sum + 
            ' points and he got diploma with degree ' + 
            degree[x])
            
            console.log('..............');
            break;
            } 
        }
    }else{
        console.log(students[i].name +
            ' get ' + students[i].sum + 
            ' points, has failed and has to try next year.');

        console.log('.........');
    
    }
    }
}
calcFinal();
