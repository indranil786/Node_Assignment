const person = {
    id : 2 ,
    gender : 'mail'
    };
const student = {
    name : "ravi" ,
    email :"ravi11@yopmail.com"
    };
student.__proto__=person;
const candidate = {};
candidate.__proto__=student; 
console.log(candidate.__proto__);
console.log(candidate.__proto__.__proto__);
console.log(candidate.name);
console.log(candidate.email);
console.log(candidate.id);
console.log(candidate.gender);


    