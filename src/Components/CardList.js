import React from 'react';
import Card from './Card.js';


const CardList = ({robotsProps}) => { 
    const CardsArray = robotsProps.map((user, i) => {
        //to create an error so we can test ErrorBoundery
        // if (true) {
        //     throw new Error('NOOOOO!')
        // }
        return (
            <Card 
            key={robotsProps[i].id} 
            id={robotsProps[i].id} 
            name={robotsProps[i].name} 
            email={robotsProps[i].email} 
            username={robotsProps[i].username}
            />
        );
    })   /* Key props is added to React elements that will be repeated several times to let it know which one is which, so give it a unique value */
    return (
        <div>
            {CardsArray}
        </div>
    )
}

export default CardList;

