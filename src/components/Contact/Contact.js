import React, { useRef } from "react";
import { send } from 'emailjs-com';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form }from 'react-bootstrap';
import "./styles.scss";
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

function Contact(props) {
  const currentTab= {
    name: "contact",
    description: "Get in touch with me",
  };
  
const modal = useRef(null)


  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    from_email: '',
    from_phone:'',
    message: '',
  });

  // let sending = Object.assign({}, this.state.toSend);

  let SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
  let TEMPLATE_ID= "template_d3h5g6b";
  let USER_ID= process.env.REACT_APP_USER_ID;


  const onSubmit = (e) => {
    e.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

 
  
  return (
    <section>
      <h1 id="home2">{capitalizeFirstLetter(currentTab.name)}</h1>
      <Container className="containerC">
      
        <Form  onSubmit={onSubmit}>
          <Row>
            <Col>
              <h3>Fill out the below form with your contact information, and I will contact you very soon. I look forward to discussing with you my skills.</h3>
            </Col>
          </Row>
          <Row className='rows5'>
             <Col >
              <h1>Name </h1>
              </Col>
             <Col>
                <input
                type='text'
                 name='from_name'
                 placeholder='Your name'
                 value={toSend.from_name || ''}
                 onChange={handleChange}
                 required
                  />
              </Col>
           </Row>
           <Row>
              <Col >
                 <h1>Email </h1>
              </Col>
              <Col>
                <input
                type='text'
                name='from_email'
                placeholder='Your email'
                value={toSend.from_email}
                onChange={handleChange}
                required
                />
              </Col>
          </Row>
          <Row >
              <Col >
                 <h1>Phone Number </h1>
              </Col>
              <Col>
                <input
                type='text'
                name='from_phone'
                placeholder='Your phone'
                value={toSend.from_phone}
                onChange={handleChange}
                />
               </Col>
           </Row>
           <Row>
              <Col>
                <h1 className="message"> Message</h1>
             </Col>
           </Row>
           <Row>
          <Col >
         <input
           className="messageBox"
           type='text'
           name='message'
           placeholder='Your message'
           value={toSend.message}
           onChange={handleChange}
           />
          </Col>
        </Row>
        <Row>
          <Col className="contactButton" >
            <button type='submit' onClick={() => modal.current.open()}>Submit </button>
          </Col>
          </Row>
       </Form>
      <Modal ref={modal}>
      Thank you for filling out your information! Look out for my email, I will be getting in touch as soon as possible.
      </Modal>
      </Container>
      <Footer></Footer>
    </section>
  );
};

export default Contact;
