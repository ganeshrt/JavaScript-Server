let users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.ech',
    },
    {
        traineeEmail: 'trainee1@successive.ech',
        reviewerEmail: 'reviewer1@successive.tech',
    }
];
let validUser = [];
let invalidUser = [];
let validateEmail = (email) => {
    let pattern = "@successive.tech$"
    if (email.match(pattern)) {
        validUser.push(email);
    return true;
    }
    else {
        invalidUser.push(email);
    return false;
    }
}

let validateUser = (user) => {
    validateEmail(user.traineeEmail);
    validateEmail(user.reviewerEmail);
}
    
for(let key in users){
    validateUser(users[key]);
}
console.log("Valid Users :", validUser.length);
for (let i in validUser) {
    console.log("\t", i, validUser[i]);
}
console.log("Invalid Users :", invalidUser.length);
for (let i in invalidUser) {
    console.log("\t", i, invalidUser[i]);
}




