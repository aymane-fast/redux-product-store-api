import React from "react";

export default function Carte(props){
    return (
        <div>

            <img src={props.image} alt="pcimage" /> <br/>


            <h2>{props.titre}</h2>


            <h3>{props.price}</h3>

        </div>

    )
}