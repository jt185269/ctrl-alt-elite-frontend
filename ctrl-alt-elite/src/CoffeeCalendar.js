import { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localiser = momentLocalizer(moment)
const addEvent = (events, setEvents) => {
    let newEvent = [
      ... events, 
      {
        
      start: moment().toDate(),
      end: moment()
        .add(15, "minutes")
        .toDate(),
      title: "Coffee break"
      }
    ]
  
    setEvents(newEvent)
  }
  
  export const MyCalendar = (props) => {
    const [events, setEvents] = useState([{
    }])
  
    return (
      <div>
        <Calendar 
        localizer={localiser}
        events={events}
        startAccessor="start"
        endAccessor={"end"}
        style={{height: 500}}
        />
        <button onClick={() => addEvent(events,setEvents)}>add event</button>
      </div>
    
    )
  } 