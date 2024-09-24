const usernameRegex = /^[A-Za-z\d]{5,10}$/;
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/

const Validation = {
    
    isValidEmail(input) {
        return input.match(emailRegex)
    },

    isValidUsername(input) {
        return input.match(usernameRegex)
    },
    isValidPassword(input) {
        console.log("Input", input, input.match(passwordRegex))
        return input.match(passwordRegex)
    }

}

module.exports = Validation;