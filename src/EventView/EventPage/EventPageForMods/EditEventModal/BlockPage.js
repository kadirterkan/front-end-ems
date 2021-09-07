import React from 'react';
import './BlockPage.css';

export class BlockPage extends React.Component{

    render() {
        const pages = [1,2,3,4];

        return (
            <div className={"edit-page-block-grid"}>
                {pages.map((value,index) => {
                    if(value<=this.props.page) {
                        return <div key={index} className={"page-block-blue"}/>;
                    }
                    else{
                        return <div key={index} className={"page-block-grey"}/>;
                    }
                })}
            </div>
        );
    }
}