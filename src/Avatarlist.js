import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avstyle ma4 bg-light-blue dib pa4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="" />
         <h1 className="tc">{props.name} </h1>
        <p>{props.designation}</p>
    </div>
    )
}

export default Avatarlist;