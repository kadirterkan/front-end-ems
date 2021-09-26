// import {Calendar} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


export function EventCalendar({eventQuery}){



    return(
        <div className={"calendar"}>
            <FullCalendar
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                droppable={false}
                plugins={[interactionPlugin,dayGridPlugin,timeGridPlugin,listPlugin]}
                validRange={
                    {start:new Date()}
                }
                initialView="dayGridMonth"
                events={[]}
                editable={false}
                selectable={true}
                expandRows={true}
                // eventClick={(value) => {props.eventSelected();props.selectedItem(value)}}
            />

         </div>

    );
}

export default EventCalendar;