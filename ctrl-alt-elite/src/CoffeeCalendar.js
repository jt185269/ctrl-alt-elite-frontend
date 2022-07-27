import { useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import Popup from './Popup'
import InfoPopup from './InfoPopup'


async function loadCalendarEvents() {

  let options= {

    method: 'GET',

    headers: { 'Content-Type': 'application/json' },

  }

  const res = await fetch('http://localhost:5000/api/loadcalendar', options)

  return res.json();

}

const localiser = momentLocalizer(moment)
export const CoffeeCalendar = (props) => {
  const [data, setData] = useState(null)
  loadCalendarEvents().then( (res) => {
    console.log(res)
    setData(res)
  })
  let dataPar = JSON.parse(data);
  console.log(dataPar)

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

