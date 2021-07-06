import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import FormRender from './renderForm';

import{ Button,Card,Col,Row} from 'react-bootstrap'
class Fav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            favInfo:[],
            index:-1,
            strDrink:'',
            strDrinkThumb:"",
            show:false
        }

    

    }


    componentDidMount= async()=>{
        const Url ='http://localhost:3010'
        const mUrl = await axios.get(`${Url}/getfav`)
        console.log(mUrl.data)
        this.setState({
            favInfo:mUrl.data
        })
        }
delete =async(index)=>{
    const Url ='http://localhost:3010'
    const deleteUrl = await axios.delete(`${Url}/getFav?id=${index}`)
    this.setState({
        favInfo:deleteUrl.data
    })
    
}

show = (index)=>{
    this.setState({
        show:true,
        strDrink:this.state.favInfo[index].strDrink,
        strDrinkThumb:this.state.favInfo[index].strDrinkThumb,
    })
}


handleClose = ()=>{
  
    this.setState({
        show:false
    })
}

update =async(event) =>{
    event.preventDefault()
    const url = 'http://localhost:3010'
    const obj = {
        strDrink:event.target.strDrink.value,
        strDrinkThumb:event.target.strDrinkThumb.value,
        id:this.state.favInfo[this.state.index]['_id']

    }
    const newArr = await axios.put(`${url}/updateFav`,obj)
    this.setState({
        show:false,
        favInfo:newArr.data

    })
   
 
}


  render(){
    return(
      <div>
          <Row xs={1} md={4} className="g-4">
              {this.state.favInfo.map((item,index)=>{
                  return(
                      <div>
                          {item.strDrinkThumb[index]}
                          <Col>
                                 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.strDrinkThumb} />
  <Card.Body>
    <Card.Title>{item.strDrink}</Card.Title>
  
    <Button variant="primary" onClick={()=>this.delete(item.idDrink)} >delete</Button>
    <Button variant="primary" onClick={()=>this.show(index)}>update</Button>
  </Card.Body>
</Card>
</Col>

                      </div>
                  )
              })}

    
</Row>
<FormRender

show={this.state.show}
strDrink={this.state.strDrink}
strDrinkThumb={this.state.strDrinkThumb}
handleClose ={this.handleClose}
update={this.update}


/>
      </div>
    )
  }
}

export default Fav;
