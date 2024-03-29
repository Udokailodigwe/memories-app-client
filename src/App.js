import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import bannerImage from "./images/bannerImage.png";
import useStyles from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  // const [data, setData] = useState(dispatch(getPosts));
  const classes = useStyles();

  let response = dispatch(getPosts());

  useEffect(() => {
    response.then((data) => data);
  }, [response]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories Site
        </Typography>
        <img
          className={classes.image}
          src={bannerImage}
          alt="petImage"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
