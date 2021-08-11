import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    borderRadius: 15,
    "&:hover": {
      boxShadow: "0 0 4em 0px rgba(0, 0, 0, 0.4)",
      transform: " scale(1.01)",
    },
  },
  dimmertext: {
    paddingTop: 0,
    lineHeight: 2.5,
  },
  darkertext: {
    paddingBottom: 0,
    margin: 0,
    lineHeight: 2.5,
  },
  AboutPrice: {
    textAlign: "center",
  },
  cost: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
});

function Cards(props) {
  const classes = useStyles();
  // console.log(props.cardDatas.AboutPrice);

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
            <CardActionArea style={{ height: "550px" }}>
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.AboutPrice}
                >
                  {props.cardDatas.AboutPrice}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.center}
                >
                  <span className={classes.cost}>{props.cardDatas.cost}</span>{" "}
                  {props.cardDatas.month}
                </Typography>
                <hr />
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  className={classes.darkertext}
                >
                  <ul style={{ listStyleType: "none" }}>
                    {props.cardDatas.available.map((item) => {
                      return (
                        <li>
                          <DoneIcon />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  component="p"
                  className={classes.dimmertext}
                >
                  <ul style={{ listStyleType: "none" }}>
                    {props.cardDatas.notavailable.map((item) => {
                      return (
                        <li>
                          <CloseIcon />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  padding: "18px 36px",
                  fontSize: "18px",
                  width: 300,
                }}
              >
                BUTTON
              </Button>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Cards;
