import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

import{ Button,Modal,Form} from 'react-bootstrap'
class FormRender extends React.Component{
    render(){
        return(
            <div>

<Modal
        show={this.props.show}
        onHide={this.props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={this.props.update}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>NAME</Form.Label>
  <Form.Control type="text" defaultValue={this.props.strDrink} name="strDrink" />
  <Form.Label>url</Form.Label>
  <Form.Control type="text" defaultValue={this.props.strDrinkThumb} name="strDrinkThumb" />
</Form.Group>
<Button variant="primary" type="submit">save</Button>
</Form>
        </Modal.Body>
       
      </Modal>


            </div>
             ) 
}

}
export default FormRender

