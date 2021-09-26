import React from 'react';

export default function usePage() {
    const [pageNumber,setPageNumber] = React.useState(1);

    const nextPage = () => {
        setPageNumber(pageNumber+1);
    }

    const lastPage = () => {
        setPageNumber(pageNumber-1);
    }

    return {nextPage,lastPage,pageNumber};

}