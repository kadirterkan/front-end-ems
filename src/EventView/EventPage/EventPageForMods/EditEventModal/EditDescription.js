import React, {useEffect, useRef} from 'react';
import './EditDescription.css';

export default function EditDescription({newEventQuery,handleChange}) {

    const ref = useRef(null);


    useEffect(() => {
        const textArea = document.querySelector("textarea");

        textArea.addEventListener("keyup", e => {
            textArea.style.height = "70px";
            let scHeight = e.target.scrollHeight;
            textArea.style.height = `${scHeight}px`;
        });
    },[ref]);

    return(
        <>
            <div className={"edit-description-sidebar"}>
                <div>
                    <h3 className={"edit-description-sidebar-menu-name"}>Event Description</h3>
                    <span className={"edit-description-sidebar-menu-desc"}>Edit your events description</span>
                </div>
                <div className={"edit-description-animated-form"}>
                    <textarea ref={ref} id="eventDescription" name={"eventDescription"} className={"edit-description-input"} value={newEventQuery.eventDescription} onChange={handleChange} placeholder={"Enter your description..."}/>
                </div>
            </div>
        </>
    );
}