import { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import Popup from './Popup'
import InfoPopup from './InfoPopup'

const localiser = momentLocalizer(moment)
export const CoffeeCalendar = (props) => {
    const [events, setEvents] = useState([{
    }])

    const [newEvent, setNewEvent] = useState({});


    const [isOpen, setIsOpen] = useState(false)
    const toggleForm = () => {
      setIsOpen(!isOpen)
    }

    const [infoOpen, setInfoOpen] = useState(false)
    const toggleInfo = () => {
      setInfoOpen(!infoOpen)
    }

    

    const addEventSlot = (event) => {
      let newEvents = [
        ... events, 
        event
      ]
      setEvents(newEvents)
    }

    const getCurrEvent = (event) => {
      setNewEvent(event)
      toggleInfo()
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
        scrollToTime={new Date()}
        onSelectEvent={(e) => getCurrEvent(e)} //(event) => alert(JSON.stringify(event))
        onSelectSlot={(e) => createNewEvent(e)}
        selectable
        />
        {isOpen && <Popup handleClose={toggleForm} addEvent={addEventSlot} event={newEvent}/>}
        {infoOpen && <InfoPopup handleClose={toggleInfo} event={newEvent} />}
      </div>
    
    )
  } 