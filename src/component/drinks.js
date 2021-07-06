import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Button,Card} from 'react-bootstrap'
class Drinks extends React.Component{
  render(){
    return(
      <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{this.props.strDrink}</Card.Title>
  
    <Button variant="primary" onClick={()=>this.props.addFav(this.props.id)}>Add To fav</Button>
  </Card.Body>
</Card>
      </div>
    )
  }
}

export default Drinks;
