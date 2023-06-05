import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
export default function PlayersPresentation({ players }) {
  // const [player, setPlayer] = useState([]);
  console.log(players);
  return (
    <div className="container">
      {players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <Link to={`detail/${player.id}`}>
              <p>
                <button>Detail</button>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
