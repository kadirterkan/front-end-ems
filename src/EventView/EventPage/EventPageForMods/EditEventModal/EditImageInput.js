import React, {useEffect} from 'react';
import './EditImageInput.css'

export default function EditImageInput({handleWithKeyAndValue}) {

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const imageUploadHandler = async (event) => handleWithKeyAndValue("base64Image",await toBase64(event.target.files[0]))

    return(
        <>
            <div className={"edit-image-input-values"}>
                <div>
                    <h3 className={"edit-image-sidebar-menu-name"}>Event Image</h3>
                    <span className={"edit-image-sidebar-menu-desc"}>Edit or add an image to your event</span>
                </div>
                <div className={"edit-image-input-form"}>
                    <input type={"file"} className={"edit-image-image-input"} onChange={imageUploadHandler}/>
                </div>
            </div>
        </>
    );
}