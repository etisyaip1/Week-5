
const person = {
    first: "Etisyai" ,
    last: "Pollard" ,
    age: 28,
    phone: "347-595-1333",
    DOB: new Date ("9-25-1996")
};

const person2 = {
    first: "Nina" ,
    last: "Marie" ,
    age: 47,
    phone: "503-888-6879",
    DOB: new Date ("9-13-1997")
};

function showMe(p){ //recieve obe whole object
    //compose a template string based on the onject's properties
    return `
    FULL NAME: ${p.last} ${p.last}
    PHONE NUMBER: ${p.phone}
    `;
}

console.log(showMe(person));
console.log(showMe(person2));
console.log(showMe ({first: "Dandy" , last: "Boy" , phone: "555-bone"}));