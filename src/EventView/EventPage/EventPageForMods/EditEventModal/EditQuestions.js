import React from "react";
import './EditQuestions.css';

export default function EditQuestions() {
    return(
        <>
            <div className={"edit-questions-sidebar"}>
                <div>
                    <h3 className={"edit-description-sidebar-menu-name"}>Event Questions</h3>
                    <span className={"edit-description-sidebar-menu-desc"}>Edit your events questions</span>
                </div>
            </div>
        </>
    );
}