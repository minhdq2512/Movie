import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1976D2",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              FLIMS.NET
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
