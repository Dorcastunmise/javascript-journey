const mapData = new Map();
mapData.set(`name`, `John`);
mapData.set(true, `yes`);
const obj = {};
mapData.set(obj, `person`);
console.log(mapData);
console.log(mapData.get(obj));
console.log(mapData.delete(obj));
console.log(mapData.has(obj));
console.log(mapData.size);
// console.log(mapData.clear);
mapData.forEach((value, key) => {
    console.log(value, key);
});

console.log(`-------------------`);
console.log(`-------------------`);

const platform = new Map([
    [`are you okay?`, `yes`],
    [`nepa`, `on`],
    [`isSingle`, true],
    [`health`, `fit`]
]);
// console.log(platform);
// console.log(platform.has(`isSingle`));
// console.log(platform.get(`are you okay?`));
// console.log(platform.size);
for(let key of platform.keys()) {
    console.log(key);
}
console.log(`-------------------`);
for(let value of platform.values()) {
    console.log(value);
}
console.log(`-------------------`);
for(let arr of platform.entries()) {
    console.log(arr);
}
console.log(`-------------------`);
for(let [key, value] of platform.entries()) {
    console.log(key, value);
}

// SET
const setData = new Set([`John`,
                        10, 
                        false,
                        {
                            firstName: `Bob`
                        },
                        `John`
]);
setData.add(`Nick`);
console.log(setData);
console.log(setData.size);
console.log(`-------------------------`);
for(let value of setData.values()) {
    console.log(value);
}
console.log(`-------------------------`);
for(let value of setData.entries()) {
    console.log(value);
}