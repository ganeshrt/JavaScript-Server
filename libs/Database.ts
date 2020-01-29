import * as mongoose from "mongoose";
import { initialSeedData } from "./seedData";
class Database {
    public static open(mongoUrl): any {
        mongoose.connect(mongoUrl, { useNewUrlParser: true });
        return new Promise((resolve, rejects) => {
            mongoose.connection.on("connected", (res) => {
                console.log("----+ Database connected +-----");
                initialSeedData();
                resolve(" connected");
            });
            mongoose.connection.on("error", (err) => {
                rejects("Error");
            });
        });
            }
    public disconnect() {
        mongoose.connection.close();
    }
}
export default Database;