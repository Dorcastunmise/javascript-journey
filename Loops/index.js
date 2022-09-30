let arr = ['john', 'bob', 'michael', 'mary'];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 'bob') {
        console.log(arr[i] + ' is my brother');
        continue;
}
console.log(arr[i]);
}

let a = 0;
let b = 0;
while (a < 3) {
    a++;
    b += a;
    console.log(b);
}

let colors = ['white', 'red', 'green', 'blue'];
let i = 0;

do {
    console.log(colors[i]);
    i++;
}while(i < colors.length);