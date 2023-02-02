import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import React, { useState } from 'react';
import styles from '../styles';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        Interest Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <form>
        <label> Name

        <input type='text' placeholder='name'></input>
            </label><br/>
            <label> Phone No.

        <input type='tel:' placeholder='Phone No.'></input>
            </label><br/>

            <label> Gender

        <input type='text'></input>
            </label><br/>
            <label> Age

        <input type='number'></input>
            </label><br/>

           <button style={{
            borderColor:'lightrey',
            borderWidth:1,
            padding:10,
            background: '#0c1024',
            color:'white',
            borderRadius:8,
           }} type='submit'> Submit</button>
            

           

            
            
        </form>
  
 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button style={{
        color: "white",
        fontSize: 18,
        background:"darkblue",
      }} variant="danger" onClick={() => setModalShow(true)}>
       Submit Interest
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;