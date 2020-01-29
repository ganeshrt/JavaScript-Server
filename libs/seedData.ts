import { userModel } from "../src/repository/user/UserModel";
import { userRepo } from "./../src/repository/user/UserRepository";
import Database from "./Database";

const initData = [
    { name: "test", email: "test@gmail.com", password: "test1234" },
    { name: "head", email: "head@gmail.com", password: "head1234" },
    { name: "trainee", email: "trainee@gmail.com", password: "trainee1234" },
];
export const initialSeedData = () => {
    userRepo.count().then((result) => {
        if (result == 0) {
            console.log("-----Data Seed-----");
            for(let i in initData) {
                userRepo.create(initData[i]);
            }
        }
    },
    );
};
