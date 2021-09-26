export function useValidationLogin(values) {
    let errors = {};

    if(values.username.length === 0){
        errors.username = "Enter your username";
    }

    if(values.password.length === 0){
        errors.password = "Enter your password";
    }

    return errors;
}

