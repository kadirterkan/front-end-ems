export function validateDateName(values){
    let errors = {};
    

    if(values.eventName.length === 0){
        errors.eventName = "Event name required";
    }

    if(values.eventCategory.length === 0){
        errors.eventCategory = "Event category is required";
    }

    if(values.eventPublicity==="disabled"){
        errors.eventPublicity = "Event must have a publicity value";
    }

    if(values.quota < 1){
        errors.quota = "Quota must be bigger than 1";
    }


    return errors;
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

export function validateLocation(values){
    let errors = {};

    if(values.eventType === "physical" && values.eventCoordinates.eventLocationName ==="" ){
        errors.eventCoordinates = "You must enter a location";
    }

    if(values.eventType === "online" && !validURL(values.eventUrl)){
        errors.eventUrl = "Enter a valid url";

    }

    return errors;

}