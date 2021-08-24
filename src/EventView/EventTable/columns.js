// import {format} from "date-fns";
// import { ColumnFilter } from './ColumnFilter';



export const COLUMNS = [
    {
        Header:'Title',
        accessor:'title',

    },
    {
        Header:'Created By',
        accessor:'created_by'
    },
    {
        Header:'Start Date',
        accessor:'start_date'
        // Cell:({value}) => {return format(new Date(value),'dd/MM/yyyy')}
    },
    {
        Header:'End Date',
        accessor:'end_date'
        // Cell:({value}) => {return format(new Date(value),'dd/MM/yyyy')}
    },
    {
        Header:'Quota',
        accessor:'quota'
    },
    {
        Header:'Occupation',
        accessor:'occupation'
    }
]

export const DATA = [
    {
        title:'Event1',
        created_by:'User1',
        start_date:'date 1',
        end_date:'date2',
        quota:25,
        occupation:20
    },
    {
        title:'Event2',
        created_by:'User1',
        start_date:'date 1',
        end_date:'date2',
        quota:25,
        occupation:20
    },
    {
        title:'Event1',
        created_by:'User1',
        start_date:'date 1',
        end_date:'date2',
        quota:25,
        occupation:20
    },
    {
        title:'Event1',
        created_by:'User1',
        start_date:'date 1',
        end_date:'date2',
        quota:25,
        occupation:20
    }
]