const { showOne, showAll, remove } = require('./User.js');

const args = process.argv;

console.log(args)  //logs and the 'showOne' that we typed

let command = args[2];
let values = args[3];

let results = '';

switch(command) {
    case 'create':
        console.log("Create")
        break;
    case 'delete':
        results = remove(values)
        if (results.status) {
            console.log("Succesfully deleted user", results.values)
        } else {
            console.log("Problem in deleting user", results.values)
        }
        break;
    case 'update':
        console.log("Update")
        break;
    case 'showOne':
        results = showOne(values);
        console.log(results)
        break;
    default:
        results = showAll()
        console.log(results);
}

