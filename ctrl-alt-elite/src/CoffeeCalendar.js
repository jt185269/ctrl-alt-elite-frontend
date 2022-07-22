import { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import Popup from './Popup'

const localiser = momentLocalizer(moment)
  export const MyCalendar = (props) => {
    const [events, setEvents] = useState([{
    }])

    const [newEvent, setNewEvent] = useState({});


    const [isOpen, setIsOpen] = useState(false)
    const toggleForm = () => {
      setIsOpen(!isOpen)
    }

    const addEventSlot = (event) => {
      let newEvents = [
        ... events, 
        event
      ]
      setEvents(newEvents)
    }

    const createNewEvent = (event) => {
      if (isOpen === true) return;
      let newEvent = {
          
        start: event.slots[0],
        end: event.slots[event.slots.length -1],
        title: "Coffee break"
        }
      
      setNewEvent(newEvent)
      toggleForm()
    
      
    }


    return (
      <div>
        <Calendar 
        localizer={localiser}
        events={events}
        startAccessor="start"
        endAccessor={"end"}
        style={{height: 500}}
        onSelectEvent={toggleForm} //(event) => alert(JSON.stringify(event))
        onSelectSlot={(e) => createNewEvent(e)}
        selectable
        />
        {isOpen && <Popup handleClose={toggleForm} addEvent={addEventSlot} event={newEvent}/>}
      </div>
    
    )
  } 