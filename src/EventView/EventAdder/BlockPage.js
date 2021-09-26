import React from "react";
import styled from 'styled-components';

const BlockGrey = styled.div`
    background-color:#686868;
    border-radius:8px;
    height:10px;
    transition:800ms;

`

const BlockBlue = styled.div`
    background-color:#1560bd;
    height:10px;
    border-radius:8px;
    transition:800ms;
`

const BlockGrid = styled.div`
    position:absolute;
    width:100%;
    background:none;
    gap:2.3px;
    display:grid;
    grid-template-columns: repeat(5,auto);
    transition:800ms;
`





export default function BlockPage({page}) {

    const Array = [1,2,3,4,5];


    return(
            <BlockGrid>
                {Array.map((val,index) => {
                    if(val<=page){
                        return <BlockBlue key={index}/>
                    }else{
                        return <BlockGrey key={index}/>
                    }
                    })}
            </BlockGrid>
    );
}