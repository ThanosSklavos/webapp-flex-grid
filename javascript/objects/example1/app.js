const json = require('./data.json')

console.log(json)

const data = json.data;
console.log(data);

let x = JSON.stringify(json);
console.log(x)

console.log(JSON.parse(x))

for(let i = 0; i < data.length; i++) {
    console.log(data[i].name, data[i].surname)
}

data.forEach(val => {
    console.log(val.name, val.surname)
})

for (let item in data){
    console.log(item, data[item].name, data[item].surname)
}