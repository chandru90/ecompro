import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import { Card, Row,Col, Container } from 'react-bootstrap';
import image from '../img1.jpeg'


const MealItem =(props)=>{
   const cartCtx = useContext(CartContext)
   //const price ='$${props.price.toFixed(2)}';
   const price = `Rs${props.price.toFixed(2)}`;

   const addToCartHandler=(amount)=>{
    cartCtx.addItem({
        id :props.id,
        name: props.name,
        amount:amount,
        price:props.price,
        imageUrl:props.imageUrl
      }  )
   }
    return<Container>
       
        <Row xs={2}>
      <Col>
      <Card className="shawdow-lg">
      
      <Card.Img variant="top" src={props.imageUrl}/>
       <Card.Body>
     
        <h5> Dish name</h5>
        <div >{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <MealItemForm onAddToCart ={addToCartHandler}></MealItemForm>
        </Card.Body>
    
        </Card>
        </Col>
        
    
        </Row>
            
        </Container>
       
      
     
        
        
    
     
}
export default MealItem
