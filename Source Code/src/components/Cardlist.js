import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    
    return (
        <div>
            { robots.map((user,i) => {
        return (
        <Card 
                key={i} //Have to give a key in React for Exception Handling ?
                id={robots[i].id} 
                name={robots[i].name}
                email={robots[i].email}
                />
            );
    })
 }
        </div>
    );
}

export default Cardlist;