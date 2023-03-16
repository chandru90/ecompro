import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Generics</h1>
        
        <Link to="/">products</Link>
       <Link to="/Aboutus"> <h1>Aboutus</h1></Link>
       <Link to ="/Home">Home</Link>
       <Link to="/ContactNavigation">Contactus</Link>
        <HeaderCartButton onclick ={props.setcart} />
      </header>
      <div className={classes['main-image']}>
       
      </div>
    </Fragment>
  );
};

export default Header;