import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY : 'hidden', padding: '2rem 5rem'}}>
            {props.children}
        </div>
    );
}

export default Scroll;  