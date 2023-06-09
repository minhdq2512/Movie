import { useParams } from "react-router-dom";
import { data1 } from "../shared/ListOfPlayers";
import CardContent from '@material-ui/core/CardContent';
function Detail() {
  const userName = useParams();
  const player = data1.find((obj) => {
    return obj.id === userName.id;
  });
  let cost = player.cost.toLocaleString();
  return (
    
       <div className="container">
        
    <div className="product-card">
    <CardContent variant="outlined">   
      <div className="badge">{player.name}</div>
      <div className="product-tumb">
        <img src={`../${player.img}`} alt="" />
      </div>
      <div className="product-details">
        <h4>{player.club}</h4>
        <div className="product-price">Market value: € {cost}</div>
        <p className="product-info">{player.info}</p>
        <div className="product-bottom-details"></div>
      </div>
      </CardContent>
    </div>
   
  </div>


  );
}

export default Detail;
