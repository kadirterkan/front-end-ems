import './EditEventNameDate.css';

const returnString = (value) => {
    let date = value;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hour<10) hour= "0" + hour;
    if (minutes<10) minutes = "0" + minutes;

    return year + "-" + month + "-" + day + "T" + hour + ":" + minutes;
}

export default function EditEventNameDate({isSubmitting,errors,editEventQuery,handleChange}) {

    return(
        <>
            <div className={"edit-name-event-form-div"}>
                <div>
                    <h3 className={"edit-name-sidebar-menu-name"}>Edit Event</h3>
                    <span className={"edit-name-sidebar-menu-desc"}>Edit your event</span>
                </div>
                <form className={"edit-name-event-form"} noValidate={true}>
                    <div className={"edit-name-animated-form"}>
                        <input style={isSubmitting && errors.eventName ? {'border':'1px solid red'} : null} type="text" id="eventName" name={"eventName"} className={"edit-name-input"} value={editEventQuery.eventName} onChange={handleChange} autoComplete="off" maxLength={100} placeholder=" " required/>
                        <label style={isSubmitting && errors.eventName ? {'color':'red'} : null} htmlFor={"eventName"} className={"edit-name-string"}>Event Name</label>
                        <label htmlFor={"eventName"} className={"edit-name-size"}>{editEventQuery.eventName.length}/100</label>
                    </div>
                    <div className={"edit-name-animated-form"}>
                        <input style={isSubmitting && errors.quota ? {'border':'1px solid red'} : null} type="number" name={"quota"} id="quota" className={"edit-name-input"} value={editEventQuery.quota}  onChange={handleChange} autoComplete="off" placeholder="" min={editEventQuery.quota} required/>
                        <label style={isSubmitting && errors.quota ? {'color':'red'} : null} htmlFor={"quota"} className={"edit-name-string"}>Event Quota</label>
                    </div>
                    <div className={"edit-name-animated-form"}>
                        <input style={isSubmitting && errors.eventCategory ? {'border':'1px solid red'} : null} type="text" name={"eventCategory"} id="eventCategory" className={"edit-name-input"} value={editEventQuery.eventCategory} disabled={true} maxLength={25} autoComplete="off" placeholder=" "/>
                        <label style={isSubmitting && errors.eventCategory ? {'color':'red'} : null} htmlFor={"eventCategory"} className={"edit-name-string"}>Event Category</label>
                        <label htmlFor={"eventCategory"} className={"edit-name-size"}>{editEventQuery.eventCategory.length}/25</label>
                    </div>
                    <div className={"edit-name-date-selector"}>
                        <input style={isSubmitting && errors.startTime ? {'color':'red','border':'1px solid red'} : null} type={"datetime-local"} name={"startTime"} id="startTime" onChange={handleChange} value={returnString(editEventQuery.startTime)} className={"edit-name-startDate"} min={returnString(new Date())} required/>
                        <label style={isSubmitting && errors.startTime ? {'color':'red'} : null} htmlFor={"startTime"} className={"edit-name-stringStart"}>Event Start Date</label>
                    </div>
                    <div className={"edit-name-date-selector"}>
                        <input style={isSubmitting && errors.endTime ? {'color':'red','border':'1px solid red'} : null} type={"datetime-local"} name={"endTime"} id="endTime" onChange={handleChange} value={returnString(editEventQuery.endTime)} className={"edit-name-endDate"} min={returnString(editEventQuery.startTime)} required/>
                        <label style={isSubmitting && errors.endTime ? {'color':'red'} : null} htmlFor={"endTime"} className={"edit-name-stringEnd"}>Event End Date</label>
                    </div>
                    <div className={"edit-name-box"}>
                        <select className={"edit-name-selector"} style={isSubmitting && errors.eventPrivacy ? {'color':'red','border':'1px solid red'} : null} id={"eventPrivacy"} name={"eventPrivacy"} value={editEventQuery.eventPrivacy} disabled={true} required>
                            <option disabled value={"disabled"}>Choose who is this event for</option>
                            <option value="IT">IT</option>
                            <option value="HR">Human Resources</option>
                            <option value="PRODUCTION">Production</option>
                            <option value="RND">Research {"&"} Development</option>
                            <option value="PURCHASING">Purchasing</option>
                            <option value="MARKETING">Marketing</option>
                            <option value="FINANCES">Finances</option>
                            <option value="ADMIN">Administrator</option>
                            <option value="SERVICE">Service</option>
                            <option value="ALL">Company</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}