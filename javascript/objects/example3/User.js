const { readFileSync, writeFileSync } = require('fs');

module.exports.showOne = function(username){
    let results = readFileSync('data.json', 'utf-8')
    let users = JSON.parse(results)
    
    let user = user.data.find(val => val.username === username)
    return user;
}

module.exports.showAll = function(){
    results = readFileSync('data.json', 'utf-8')
    return JSON.parse(results)
}

module.exports.remove = function(username) {
    let results = readFileSync('data.json', 'utf-8')

    let json = JSON.parse(results)

    json = json.data.filter(function(val){
        return val.username!== username
    })
    
    json = {
        "data" : json
    }

    console.log(">>", json)
    try{
       writeFileSync('data.json',JSON.stringify(json));  //με ,{flag:'a+'} κανει append
       return { status:true, values: username }          //στο αρχειο 
    } catch (err) {
        console.log(err)
        return {status:false, values:username}
    }
    
}

