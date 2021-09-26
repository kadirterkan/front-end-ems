function ValidateEmail(mail)
{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

export function checkUserForm(values){
    let errors = {} ;

    if(values.firstName.length === 0){
        errors.firstName = "Enter your last name";
    }

    if(values.lastName.length === 0){
        errors.lastName = "Enter your last name";
    }

    if(values.tcKimlikNumber.length === 0){
        errors.tcKimlikNumber = "Enter your TC No";
    }

    if(values.password.length === 0){
        errors.password = "Enter your password";
    }

}