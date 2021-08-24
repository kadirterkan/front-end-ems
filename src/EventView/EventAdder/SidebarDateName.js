import styled from 'styled-components';
import { Link } from 'react-router-dom';





const AnimatedForm = styled.div`
position:relative;
display:grid;
height:3rem;


.input{
    border-radius:8px;
    border:1px solid #474a4d;
    box-shadow: none;

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



.input:focus ~ .string,
.input:not(:placeholder-shown).input:not(:focus) ~ .string{
    color:rgba(90, 180, 255,1);
    top:0.2rem;
    font-size:0.8rem;
    left:0.8rem;
}


.input:focus ~ .size,
.input:not(:placeholder-shown).input:not(:focus) ~ .size{
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
height:3rem;
gap:1.25rem;
`

const DateSelector = styled.div`
display:grid;
position:relative;
height:3rem;
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

const SidebarMenuName = styled.h1`
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






export default function SidebarDateName (props) {

    const {newEvent,setNewEvent} = {...props}

    const createTodayValue = () => {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var hour = date.getHours();
        var minutes = date.getMinutes();


        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day +"T" + hour + ":" + minutes;     

        return today;
    }
    
    const onChange = (event) => {
        setNewEvent(updateFormState(event.target.id,event.target.value));
        console.log(newEvent.startDate);
    }


    function updateFormState(field,value){
        console.log(field + value)
        let newEventState = {...newEvent};
        switch(field){
            case "eventName":
                newEventState.eventName = value;
                break;
            case "quota":
                newEventState.quota = Number(value);
                break;
            case "startDate":
                newEventState.startTime = new Date(value);
                break;
            case "endDate":
                newEventState.endTime = new Date(value);
                break;
            case "privacy":
                newEventState.eventPublicity = value;
                break;
            case "eventCat":
                newEventState.eventCategory = value;
                break;
        }
        return newEventState;
    }


    return(
        <>
            <SidebarHeaderLinks>
                <NavLink to={'#'}><h6>Event</h6></NavLink>
                <h6>-</h6>
                <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </SidebarHeaderLinks>
            <SidebarMenuName>Create Event</SidebarMenuName>
            <SidebarMenuName>Enter your events details</SidebarMenuName>
            <EventForm>
                    <DateSelectorForm>
                        <AnimatedForm>
                            <input type="text" id="eventName" name={"eventName"} className={"input"} onChange={onChange} autoComplete="off" placeholder=" "/>
                            <label htmlFor={"eventName"} className={"string"}>Event Name*</label>
                            <label htmlFor={"eventName"} className={"size"}>{newEvent.eventName.length}/100</label>
                        </AnimatedForm>
                        <AnimatedForm>
                            <input type="number" name={"quota"} id="quota" className={"input"} onChange={onChange} autoComplete="off" placeholder="" min={1}/>
                            <label htmlFor={"quota"} className={"string"}>Event Quota*</label>
                        </AnimatedForm>
                        <DateSelector>
                            <input type={"datetime-local"} name={"startDate"} id="startDate" onChange={onChange} className={"startDate"} min={createTodayValue()}/>
                            <label htmlFor={"startDate"} className={"stringStart"}>Event Start Date*</label>
                        </DateSelector>
                        <DateSelector>
                            <input type={"datetime-local"} name={"endDate"} id="endDate" onChange={onChange} className={"endDate"} min={createTodayValue() && newEvent.startTime}/>
                            <label htmlFor={"endDate"} className={"stringEnd"}>Event Start Date*</label>
                        </DateSelector>
                        <Box>
                            <select id={"privacy"} name={"privacy"} onChange={onChange}>
                                <option value="private">Department</option>
                                <option value="company">Company</option>
                            </select>
                        </Box>
                        <AnimatedForm>
                            <input type="text" name={"eventCat"} id="eventCat" className={"input"} onChange={onChange} autoComplete="off" placeholder=" "/>
                            <label htmlFor={"eventCat"} className={"string"}>Event Category</label>
                            <label htmlFor={"eventCat"} className={"size"}>{newEvent.eventCategory.length}/25</label>
                        </AnimatedForm>
                    </DateSelectorForm>
            </EventForm>
            
            </>
    );
}

