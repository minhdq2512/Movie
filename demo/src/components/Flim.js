import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import "../App";

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
                
              <Button className=".home-icon-logo-2" variant="contained" color="primary" disableElevation style={{margin:"20px"}}>
            <span style={{ lineHeight: "1.2" }}><InfoIcon></InfoIcon>  </span><span style={{ marginLeft: "10px" }}>Detail</span>  
    </Button>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
