import React from 'react';
import '../index.css';

const Card = ({ name,email,id }) => {
    return (
        <div className="f6 tc bg-light-blue dib br3 pa3 ma2 grow bw1 shadow-5 b--solid b--dark-blue ">
            <img src={`https://robohash.org/test${id}?size=200x200`}
 alt="ID" />
            <div>
                <h3 className="name">{name.toUpperCase()}</h3>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;