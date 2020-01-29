
export const UserSchema = {
    create: {
        password: {
            in: ["params","body"],
            isString: true,
            custom: {
                options: (value) => {
                    console.log("Id :", value);
                    return true;
                },
            },
            isEmpty: {
                errorMessage: "password is empty",
                negated: true,
            },
            isLength: {
                errorMessage: "password should be min 8 chars",
                options: { min: 5 },
            },
        },

        name: {
            isString: true,
            in: ["params","body"],
            custom: {
                options: (value) => {
                    console.log("Name :", value);
                    return true;
                }
            },
            isEmpty: {
                errorMessage: "Name is empty",
                negated: true,
            },
            isLength: {
                errorMessage: "Name should be at least 3 chars",
                options: { min: 3 },
            },
        },
        email: {
            isString: true,
            in: ["params","body"],
            custom: {
                options: (value) => {
                    const filter = "@successive.tech$";
                    return value.match(filter);
                },
            },
            isEmpty: {
                errorMessage: "email is empty",
                negated: true,
            },
            isLength: {
                errorMessage: " enter  email.",
                options: { min: 3 },
            },
        },
    },
    delete: {
        id: {
            isEmpty: {
                errorMessage: "Id is required",
                negated: true,
            },
            in: ['params'],
        },
    },
    get: {
        skip: {
            custom: {
                option: (value) => {
                    value = 0;
                }
            },
            isInt: true,
            in: ['query'],
            errorMessage: "Skip is invalid",
        },
        limit: {
            custom: {
                option: (value) => {
                    value = 10;
                }
            },
            isInt: true,
            in: ["query"],
            errorMessage: "Limit is invalid",
        }
    },
    update: {
        id: {
            isString: true,
            isEmpty: {
                errorMessage: "Id is required !",
            },
            in: ["body"],
        },
        dataToUpdate: {
            in: ["body"],
            isObject: true,
            isEmpty: {
                errorMessage: " Please enter data !",
            },
            custom: {
                options: (value) => {
                    console.log(value);
                },
            },
        },
    },
    singIn: {
        id: {
            in: ["body"],
            isString: true,
            custom: {
                options: (value) => {
                    console.log("Id :", value);
                    return true;
                },
            },
            isEmpty: {
                errorMessage: "Id is Required",
                negated: true,
            },
        },


    }
};