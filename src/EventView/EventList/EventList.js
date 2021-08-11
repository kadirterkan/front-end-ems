export function EventList(props){


    const[eventQuery,eventSelected,selectedItem] = {...props};

    const eventDidMountHandler = (selected) => {
        let event = eventQuery.find((eventId) => eventId.id ==selected.event.id);

        if (event!=undefined) {
            let content = event.title+ "\n" + " quota: " + event.quota.toString() + " people attending: " + event.attending.toString();

            tippy(selected.el, {
                content: content
            });
        }
    };

    return(
        <div style={{height: 400, width: '100%'}}>
            <FullCalendar
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                droppable={false}
                eventDidMount={eventDidMountHandler}
                plugins={[interactionPlugin,dayGridPlugin,timeGridPlugin,momentTimezonePlugin,listPlugin]}
                validRange={
                    {start:new Date()}
                }
                initialView="dayGridMonth"
                events={props.eventQuery}
                editable={false}
                selectable={true}
                eventClick={(value) => {props.eventSelected();props.selectedItem(value)}}
            />

        </div>

    );
}

export default EventList;