function a() {
    let name = 'john';
    b();
    console.log(name);
}
function b() {
    let name = 'bob';
    c();
    console.log(name);
}
function c() {
    let name = 'nick';
    console.log(name);
}
a();

function sample() {
    sample();
}
sample();