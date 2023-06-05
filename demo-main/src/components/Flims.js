import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function Flims({ flims }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {flims.map((flim) => (
          <Grid item xs={4}>
            <div className="card">
              <img src={flim.image} alt="error" />
              <h3>{flim.name}</h3>
              <p className="title">{flim.title}</p>
              <div className="content">
                <div className="genre">
                  <ul>
                    {flim.genre.map((g) => (
                      <li>{g}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  {flim.year} &middot; {flim.nation}
                </p>
              </div>
              <Link to={`detailflims/${flim.id}`}>
                <div>
                  <button>Detail</button>
                </div>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Flims;
