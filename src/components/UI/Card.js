import './Card.css';

const Card = (props)=>{

    //this code allows Card to inharint classname from other element
    const classes = 'card ' +props.className; 
    
    return <div className={classes}>{props.children}</div>
}

export default Card;