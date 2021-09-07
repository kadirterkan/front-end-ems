import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AnimatedForm = styled.div`
position:relative;
display:grid;
height:3rem;


.testing{
    box-shadow:none;
    border-radius:8px;
    border:1px solid #474a4d;

    box-sizing:border-box;
    padding:1.25rem;
    background:none;
    color:#fff;
}

.string{
    position:absolute;
    left:1rem;
    padding:0 0.5rem;
    color:#fff;
    cursor:text;
    transition: 200ms;
    top:1.20rem;
}

.size{
    position:absolute;
    visibility:hidden;
}



.testing:focus ~ .string,
.testing:not(:placeholder-shown).testing:not(:focus) ~ .string{
    color:rgba(90, 180, 255,1);
    top:0.2rem;
    font-size:0.8rem;
    left:0.8rem;
}


.testing:focus ~ .size,
.testing:not(:placeholder-shown).testing:not(:focus) ~ .size{
    color:#fff;
    top:0.2rem;
    font-size:0.7rem;
    right:5px;
    visibility:visible;
}

`

const DateSelectorForm = styled.div`
    display:grid;
    position:relative;
    gap:1.25rem;
`

const DateSelector = styled.div`
display:grid;
position:relative;
height:4rem;
color:#fff;

.startDate,.endDate{
    position:absolute;
    width:100%;
    border-radius:8px;
    border:1px solid #474a4d;
    box-sizing:border-box;
    padding:1.25rem;
    background:none;
    color:#fff;
}

.stringStart,.stringEnd{
    position:absolute;
    left:0rem;
    padding:0 0.5rem;
    color:#fff;
    cursor:text;
    transition: 200ms;
    top:1.20rem;
}


.startDate:focus ~ .stringStart,
.startDate:not(:placeholder-shown).startDate:not(:focus) ~ .stringStart{
    color:rgba(90, 180, 255,1);
    top:0.2rem;
    font-size:0.8rem;
    left:0rem;
}

.endDate:focus ~ .stringEnd,
.endDate:not(:placeholder-shown).endDate:not(:focus) ~ .stringEnd{
    color:rgba(90, 180, 255,1);
    top:0.2rem;
    font-size:0.8rem;
    left:0rem;
}
`



const Box = styled.div`
position:relative;

select {
    color:#fff;
    border-radius:8px;
    border:1px solid #474a4d ;
    background-color:#242526;
    padding: 12px;
    width: 100%;
    font-size: 20px;
    -webkit-appearance: button;
    appearance: button;
    outline: none;
}

select:focus{
  color:rgba(90, 180, 255,1);
}

& select option {
padding: 30px;
}
`


export const SideBar = styled.nav`
    border-right: 1px solid #474a4d;
    background-color: #242526;
    margin-top:60px;
    width:22%;
    height:100%;
    position:fixed;
    padding: 0;
    z-index: 100;
    gap:10px;
`

const SidebarMenuName = styled.h3`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`
const SidebarMenu = styled.span`
    color:#fff;
    margin-left:1rem;
    margin-top:0.25rem;
`




const NavLink = styled(Link)`

`


export const SidebarHeaderLinks = styled.div`
    margin-top:10px;
    margin-left:10px;
    color:grey;
    display:flex;
    gap:10px;
`


const EventForm = styled.div`
    display:grid;
    padding:1rem;
    gap:1rem;  
`


export default function SidebarDateName ({isSubmitting,errors,newEventQuery,handleChange}) {

    const createTodayValue = () => {
        let date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        if (hour<10) hour= "0" + hour;
        if (minutes<10) minutes = "0" + minutes;

        let today = year + "-" + month + "-" + day +"T" + hour + ":" + minutes;

        return today;
    }
    
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

        let stringOfDate = year + "-" + month + "-" + day +"T" + hour + ":" + minutes;

        return stringOfDate;
    }
    return(
        <>
            <SidebarHeaderLinks>
                <NavLink to={'#'}><h6>Event</h6></NavLink>
                <h6>-</h6>
                <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
            <SidebarMenuName>Create Event</SidebarMenuName>
            <SidebarMenu>Enter your events details</SidebarMenu>
            <EventForm>
                    <DateSelectorForm noValidate>
                        <AnimatedForm >
                            <input style={isSubmitting && errors.eventName ? {'border':'1px solid red'} : null} type="text" id="eventName" name={"eventName"} className={"testing"} value={newEventQuery.eventName} onChange={handleChange} autoComplete="off" maxLength={100} placeholder=" " required/>
                            <label style={isSubmitting && errors.eventName ? {'color':'red'} : null} htmlFor={"eventName"} className={"string"}>Event Name</label>
                            <label htmlFor={"eventName"} className={"size"}>{newEventQuery.eventName.length}/100</label>
                        </AnimatedForm>
                        <AnimatedForm>
                            <input style={isSubmitting && errors.quota ? {'border':'1px solid red'} : null} type="number" name={"quota"} id="quota" className={"testing"} value={newEventQuery.quota} onChange={handleChange} autoComplete="off" placeholder="" min={1} required/>
                            <label style={isSubmitting && errors.quota ? {'color':'red'} : null} htmlFor={"quota"} className={"string"}>Event Quota</label>
                        </AnimatedForm>
                        <AnimatedForm>
                            <input style={isSubmitting && errors.eventCategory ? {'border':'1px solid red'} : null} type="text" name={"eventCategory"} id="eventCategory" className={"testing"} value={newEventQuery.eventCategory} onChange={handleChange} maxLength={25} autoComplete="off" placeholder=" "/>
                            <label style={isSubmitting && errors.eventCategory ? {'color':'red'} : null} htmlFor={"eventCategory"} className={"string"}>Event Category</label>
                            <label htmlFor={"eventCategory"} className={"size"}>{newEventQuery.eventCategory.length}/25</label>
                        </AnimatedForm>
                        <DateSelector>
                            <input style={isSubmitting && errors.startTime ? {'color':'red','border':'1px solid red'} : null} type={"datetime-local"} name={"startTime"} id="startTime" onChange={handleChange} value={returnString(newEventQuery.startTime)} className={"startDate"} min={createTodayValue()} required/>
                            <label style={isSubmitting && errors.startTime ? {'color':'red'} : null} htmlFor={"startTime"} className={"stringStart"}>Event Start Date</label>
                        </DateSelector>
                        <DateSelector>
                            <input style={isSubmitting && errors.endTime ? {'color':'red','border':'1px solid red'} : null} type={"datetime-local"} name={"endTime"} id="endTime" onChange={handleChange} value={returnString(newEventQuery.endTime)} className={"endDate"} min={returnString(newEventQuery.startTime)} required/>
                            <label style={isSubmitting && errors.endTime ? {'color':'red'} : null} htmlFor={"endTime"} className={"stringEnd"}>Event End Date</label>
                        </DateSelector>
                        <Box>
                            <select style={isSubmitting && errors.eventPrivacy ? {'color':'red','border':'1px solid red'} : null} id={"eventPrivacy"} name={"eventPrivacy"} value={newEventQuery.eventPrivacy} onChange={handleChange} required>
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
                        </Box>
                    </DateSelectorForm>
            </EventForm>
        </>
    );
}

