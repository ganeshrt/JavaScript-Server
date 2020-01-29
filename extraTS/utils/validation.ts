import { USERS } from "./constant";
const users = [
    {
        traineeEmail: "trainee1@successive.tech",
        reviewerEmail: "reviewer1@successive.ech",
    },
    {
        traineeEmail: "trainee1@successive.ech",
        reviewerEmail: "reviewer1@successive.tech",
    },
];
const validUser = [];
const invalidUser = [];

function validateEmail(email: string): boolean {
    const pattern = "@successive.tech$";
    if (email.match(pattern)) {
        validUser.push(email);
        return true;
    } else {
        invalidUser.push(email);
        return false;
    }

}

export const validateUser = (user: Array<{traineeEmail: string, reviewerEmail: string}>): void => {

    // console.log(user[0]);
    for (const j in user) {
        const newUsers = [user[j].traineeEmail, user[j].reviewerEmail];
        for (const i in newUsers) {
            validateEmail(newUsers[i]);
        }
    }
    console.log("Valid Users :", validUser.length);
    for (const i in validUser) {
        console.log("\t", i, validUser[i]);
    }
    console.log("Invalid Users :", invalidUser.length);
    for (const i in invalidUser) {
        console.log("\t", i, invalidUser[i]);
    }
};
