//type coersion
var male = 'Charles';
var female = 'Meghan';
 if(male === 'Meghan') {
    console.log("my child's name is: ", male);
 }else{
    console.log("my child's name is: ", female);
 }
//comparison statement
 var prof = 'instructor';
 if(prof === 'instructor') {
    console.log(prof + ' teaches students');
 }else if(prof === 'doctor'){
    console.log(prof + 'treats people');
 }else if(prof === 'composer') {
    console.log(prof + 'writes songs');
 }else {
    console.log('profession does not match')
 }

 //logical statement
if(5 === 5 && 4 === 2) {
    console.log('statement is true');
}else {
    console.log('condition is false');
}

if(5 === 5 || 4 === 2) {
    console.log('statement is true');
}else {
    console.log('condition is false');
}

if(5 === 5 != 4 === 2) {
    console.log('statement is true');
}else {
    console.log('condition is false');
}

if(!true) {
    console.log('statement is true');
}else {
    console.log('condition is false');
}

if(!false) {
    console.log('statement is true');
}else {
    console.log('condition is false');
}

var John = 70;
var Nick = 45;
var passMark = 51;

if(John >= passMark && Nick >= passMark) {
    console.log('Both students passed');
}else if(John >= passMark || Nick >= passMark){
    console.log('one of the students passed');
    if(John > Nick) {
        console.log('and it is John with ' + John + ' points');
    }else {
        console.log('and it is Nick with' + Nick + 'points')
    }
}else{
    console.log('Both students actually failed');
}