import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = (props) => {
    const { name, salary, image } = props.player;
    return (
        <div className="card">
            <img src={image} alt={name} style={{ width: "100%" }} />
            <div className="container">
                <h2>{name}</h2>
                <p>Salary: {salary}</p>
                <button onClick={(e) => {
                    e.target.innerHTML = 'Added✔';
                    props.handleAddClick(props.player)
                }}>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Player;