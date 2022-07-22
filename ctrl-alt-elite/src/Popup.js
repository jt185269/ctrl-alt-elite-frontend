
import React, {useState} from "react";
import {Form, Button} from 'semantic-ui-react';

const Popup = props => {
  let startObj = props.event.start
  let startStr = startObj.toLocaleTimeString()+ ", " + startObj.toLocaleDateString()

  let endObj = props.event.end
  let endStr = endObj.toLocaleTimeString()+ ", " + endObj.toLocaleDateString()

  const [eventTitle, setEventTitle] = useState("")

  const handleClose = (e) => {
      if (e.target.id === "outer") {
          props.handleClose();
      } 
  }

  const handleSubmit = () => {
    props.event.title=eventTitle
    props.addEvent(props.event)
    props.handleClose()
  }
  return (
  <div onClick={handleClose} className="popup-box" id="outer">
    <div className="box" id="inner">
      <Form>
          <Form.Field>
            <label>title</label><br/>
            <input value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} placeholder="coffee break"/>  
          </Form.Field>
          <Form.Field>
            <label>start: {startStr}</label>
          </Form.Field>
          <Form.Field>
            <label>end: {endStr}</label>
          </Form.Field>
          <Button onClick={handleSubmit}>OK</Button>
      </Form>
    </div>
  </div>
  );
};
 
export default Popup;