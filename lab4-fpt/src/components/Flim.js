import React from "react";
import { Link } from "react-router-dom";
export default function FlimsMap({flim}) {
  console.log(flim);
  return (
    <div className="container">
      {flim.map((flim) => (
        <div className="column" key="1">
          <div className="card">
            <img src={flim.img} alt="cr" />
            <h3>{flim.name}</h3>
            <p className="title">{flim.type}</p>
            <Link to={`detail/${flim.id}`}>
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
