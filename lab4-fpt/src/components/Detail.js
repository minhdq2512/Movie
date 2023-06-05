import { useParams } from "react-router-dom";
import { Flims } from "../Shared/ListOfFlims";
import '../App';
function Detail() {
  const userName = useParams();
  const flim = Flims.find((obj) => {
    return obj.id === userName.id;
  });
  let rates = flim.rate.toLocaleString();
  console.log(rates);
  return (
    <div className="container">
      <div className="product-card">
        
        <div className="product-tumb">
          <img src={`../${flim.img}`} alt="" />
        </div>
        <div className="badge">{flim.name}</div>
        <div className="product-details">
          <h4>Type: {flim.type}</h4>
          <div className="product-rate">RATING: {rates}</div>
          <p className="product-info">Infomation: {flim.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

