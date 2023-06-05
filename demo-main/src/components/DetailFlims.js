import { useState } from "react";
import { useParams } from "react-router-dom";
import { data2 } from "../shared/ListOfFilms";
import ModalCase from "./ModalCase";
import { Container, Grid, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function DetailFlims() {
  const flimName = useParams();
  const flim = data2.find((obj) => {
    return obj.id === flimName.id;
  });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Grid container spacing={1} className="container-detail">
        <Grid item xs={6} sx={{ paddingBottom: "32px" }}>
          <div className="detail-img">
            <img src={`../${flim.image}`} alt={flim.title} />
          </div>
          <div className="play-button">
            <a onClick={() => setIsOpen(true)}>
              <IconButton>
                <PlayCircleIcon color="primary" sx={{ fontSize: "100px" }} />
              </IconButton>
            </a>
          </div>
        </Grid>
        <Grid item xs={6} sx={{ paddingBottom: "32px" }}>
          <div className="detail-text">
            <div className="deatil-title">{flim.title}</div>
            <div className="detail-content">
              {flim.year} &middot; {flim.nation}
              <div className="detail-summary">{flim.summary}</div>
              <div className="detail-genre">
                {flim.genre.map((g) => (
                  <p>{g}</p>
                ))}
              </div>
            </div>
          </div>
          {isOpen && <ModalCase setIsOpen={setIsOpen} flim={flim} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailFlims;
