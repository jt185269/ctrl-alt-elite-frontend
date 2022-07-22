
import React, {useState} from "react";
import {Form, Button, Header} from 'semantic-ui-react';

const InfoPopup = props => {
  let startObj = props.event.start
  let startStr = startObj.toLocaleTimeString()+ ", " + startObj.toLocaleDateString()

  let endObj = props.event.end
  let endStr = endObj.toLocaleTimeString()+ ", " + endObj.toLocaleDateString()


  const handleClose = (e) => {
      if (e.target.id === "outer") {
          props.handleClose();
      } 
  }


  return (
  <div onClick={handleClose} className="popup-box" id="outer">
    <div className="box" id="inner">
    <Header as={'h2'}>
        Info for this break
    </Header>
      <Form>
          <Form.Field>
            <label>title: {props.event.title}</label><br/>
          </Form.Field>
          <Form.Field>
            <label>start: {startStr}</label>
          </Form.Field>
          <Form.Field>
            <label>end: {endStr}</label>
          </Form.Field>
      </Form>
    </div>
  </div>
  );
};
 
export default InfoPopup;