import React from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Row,Col} from 'react-bootstrap'
import Drinks from './drinks'
class Home extends React.Component{

constructor(props){
    super(props)
    this.state={
        info:[]
    }
}

componentDidMount= async()=>{
const Url ='https://i401exam.herokuapp.com'
const getUrl = await axios.get(`${Url}/all`)
console.log(getUrl.data)
this.setState({
    info:getUrl.data
})
}

addFav=async(index)=>{
    const Url ='https://i401exam.herokuapp.com'
    const obj = {
        strDrink:this.state.info[index].strDrink,
        strDrinkThumb:this.state.info[index].strDrinkThumb

    }
    console.log(this.state.info[index].strDrink)
await axios.post(`${Url}/addFav`,obj)



}










  render(){
    return(
      <div>
          <Row xs={1} md={4} className="g-4">
          {this.state.info.map((item,index)=>{
return(
<div>
    <Col>
<Drinks
key={index}
strDrink={item.strDrink}
strDrinkThumb={item.strDrinkThumb}
addFav={this.addFav}
id={index}

/>
    
    </Col>








   
</div>




)





          })}
         </Row>
      </div>
    )
  }
}

export default Home;