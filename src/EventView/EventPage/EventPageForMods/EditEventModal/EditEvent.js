import React, {useEffect, useState} from 'react';
import useForm from "./useForm";
import usePage from "./usePage";
import {validateDateName,validateLocation,validateQuestions,validateLastTime} from './validateForm';
import {BlockPage} from "./BlockPage";
import {EditPreView} from "./EditPreView";
import EditEventApi from "../../../API/EditEventApi";
import EditEventNameDate from "./EditEventNameDate";
import EditLocation from "./EditLocation";
import EditDescription from "./EditDescription";
import EditImageInput from "./EditImageInput";
import FakeValue from "../../FakeValue";
import './EditEvent.css';
import EditQuestions from "./EditQuestions";
import EditQuestionsPreview from "./EditQuestionsPreview";
import {EventPageApi} from "../../../API/EventPageApi";
import Navbar from "../../../../components/Navbar/Navbar";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

class Control extends React.Component {
    render() {
        let check = this.props.page === 1;

        return (
            <>
                <div className={"edit-template"}>
                    <div>
                        <BlockPage page={this.props.page}/>
                    </div>
                    <div className={check ? "edit-template-first" : "edit-template-rest"}>
                        {!check && <><button className={"edit-template-back-button"} onClick={this.props.lastPage}>Back</button><div></div></>}
                        <button style={!this.props.isSubmitted ? {'background-color':'#686868','cursor':'not-allowed'}:null} className={"edit-template-next-button"} onClick={this.props.nextPage}>{this.props.page < 4 ? "Next" : "Edit Event"}</button>
                    </div>
                </div>
            </>
        );
    }
}

export default function EditEvent (props) {

    const usehistory = useHistory();

    const eventPageApi = new EventPageApi();

    const editEventApi = new EditEventApi();

    const validations = [validateDateName,validateLocation,validateLastTime];

    console.log(props.location.oldValues);

    const [loaded,setLoaded] = useState(false);

    const handleValue = (oldValues) => {
        return {...oldValues,
            eventType:oldValues.eventDetails,
            eventPrivacy:oldValues.departments,
            startTime:new Date(oldValues.startTime),
            endTime:new Date(oldValues.endTime),
        }
    }

    const {pageNumber,nextPage,lastPage} = usePage();
    const {handleChange,handleWithKeyAndValue,isSubmitted,handleSubmit,editEventQuery,errors,switchType,setEditEventQuery} = useForm(props.location.oldValues,validations[pageNumber-1],pageNumber);
    const [isSubmitting,setIsSubmitting] = React.useState(false);

    console.log(editEventQuery);

    useEffect(async () => {
        const response = await eventPageApi.getEvent(props.match.params.id);

        setEditEventQuery(handleValue(response));
    },[]);

    useEffect(() => {
        if(editEventQuery !== null && editEventQuery !== undefined){
            setLoaded(true);
        }
    },[editEventQuery]);


    const Sidebar = [
        <EditEventNameDate editEventQuery={editEventQuery} isSubmitting={isSubmitting} errors={errors} handleChange={handleChange}/>,
        <EditLocation errors={errors} isSubmitting={isSubmitting} editEventQuery={editEventQuery} changeType={handleChange} handleWithKeyAndValue={handleWithKeyAndValue} switchType={switchType}/>,
        // <EditQuestions/>,
        <EditDescription handleChange={handleChange} newEventQuery={editEventQuery}/>,
        <EditImageInput handleWithKeyAndValue={handleWithKeyAndValue}/>
    ]

    const nextPageHandler = async () => {
        if(pageNumber>0 && pageNumber<4){
            handleSubmit();
            setIsSubmitting(true);
            if(isSubmitted){
                nextPage();
                setIsSubmitting(false);
            }
        }else if(pageNumber === 4){
            const response = await editEventApi.editEvent(editEventQuery);

            handleSuccess(response);
        }else{
            nextPage();
        }
    }

    const handleSuccess = (response) => {
        toast.configure();

        if(response!==null && response !== undefined){
            if(response.messageType === "SUCCESS"){
                toast.success(response.message);

                usehistory.push(`/events/event-page/${editEventQuery.eventId}`);

            }else {
                toast.error(response.message);
            }
        }
    }

    const handleLastPage = () => {
        lastPage();
    }

    return(
        <>
            <Navbar/>
        <div className={"screen"}>
            {loaded && <><div className={"edit-sidebar"}>
                <div className={"edit-sidebar-up"}>
                    {Sidebar[pageNumber - 1]}
                </div>
                <div className={"edit-sidebar-down"}>
                    <Control isSubmitted={isSubmitted} nextPage={nextPageHandler} lastPage={handleLastPage}
                             page={pageNumber}/>
                </div>
            </div>
                <div className={"screen-for-preview"}>
            <EditPreView editEventQuery={editEventQuery}/>
                    {/*<EditQuestionsPreview handleWithKeyAndValue={handleWithKeyAndValue} isSubmitting={isSubmitting} errors={errors} eventQuestions={editEventQuery.eventQuestions}/>*/}
                </div></>}
        </div>
        </>
    );
}