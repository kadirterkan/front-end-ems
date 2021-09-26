export function validateDateName(values){
    let errors = {};


    if(values.eventName.length === 0){
        errors.eventName = "Event name required";
    }

    if(values.quota < 1){
        errors.quota = "Quota must be bigger than 1";
    }


    return errors;
}

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

export function validateLocation(values){
    let errors = {};

    if(values.eventType === "PHYSICAL" && values.eventCoordinates.eventLocationName ==="" ){
        errors.eventCoordinates = "You must enter a location";
    }

    if(values.eventType === "ONLINE" && !validURL(values.eventUrl)){
        console.log(values.eventUrl);
        errors.eventUrl = "Enter a valid url";
    }

    return errors;
}

export function validateQuestions(values){
    let errors = {};

    if(values.eventQuestions.length !==0){
        errors.eventQuestions = [];
        let check = false;
        values.eventQuestions.forEach((element,index) => {
            if(element.length === 0){
                check=true;
                errors.eventQuestions.push("Enter the question");
            }else{
                errors.eventQuestions.push(null);
            }
        });
        if(!check){
            errors = {};
        }
    }

    return errors;
}

export function validateLastTime(values){
    let errors = {};

    const now = new Date();

    if(values.startTime < now){
        errors.startTime = "Enter a valid date.";
    }

    return errors;
}