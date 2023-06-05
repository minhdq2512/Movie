import { useParams } from "react-router-dom";
import { Flims } from "../Shared/ListOfFlims";
import CardContent from '@material-ui/core/CardContent';
import '../App';
import { useState } from 'react';
import ModalCase from "./ModalCase";
import MouseIcon from '@material-ui/icons/Mouse';

function Detail() {
  const userName = useParams();
  const flim = Flims.find((obj) => {
    return obj.id === userName.id;
  });
  let rates = flim.rate.toLocaleString();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <CardContent className="card-content" variant="outlined">
        <div className="product-card">
        <div className="product-tumb">
          <img src={`../${flim.img}`} alt="" />
        </div>
        <div className="badge">{flim.name}</div>
        <div className="product-details">
          <h10>Type: {flim.type}</h10>
          <div className="product-rate">RATING: {rates}</div>
          <p className="product-info">Infomation: {flim.info}</p>
          <div className="product-bottom-details"></div>
          <div className="play-button">
          <button onClick={() => setIsOpen(true)}>
                <MouseIcon color="primary" sx={{ fontSize: "100px" }} />
            </button>
            {isOpen && <ModalCase setIsOpen={setIsOpen} flim={flim} />}
          </div>
        </div>
      </div></CardContent>
      
    </div>
  );
}

export default Detail;

