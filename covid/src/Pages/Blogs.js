import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import "../Pages/Blogs.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.pixabay.com/photo/2020/03/30/21/49/covid-19-4985553_960_720.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Blogs() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>We Can Defeat COVID.</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <a id="article1" href="https://apps.who.int/iris/bitstream/handle/10665/331705/WHO-2019-nCoV-Food_Safety-2020.1-eng.pdf" target="blank">
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  title="Food"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Healthy Diet
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    There is currently no evidence that people can catch COVID-19 from food, including fruits and vegetables.
                    Fresh fruits and vegetables are part of a healthy diet and their consumption should be encouraged
                  </Typography>
                </CardContent>
                </a>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <a id="article2" href="https://pharmeasy.in/blog/6-must-dos-post-covid-19-recovery/" target="blank">
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Vaccine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  6 Must-Do’s Post COVID-19 Recovery!
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  If you or someone you know got infected and recovered, congratulations!
                  But remember, even though the virus is no longer in your body, you still need to be cautious.
                  </Typography>
                </CardContent>
                </a>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <a id="article3" href="https://timesofindia.indiatimes.com/blogs/voices/dealing-with-covid-19-from-getting-tested-to-recovery-here-is-my-experience" target="blank">
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2020/03/08/23/24/coronavirus-4914028__340.jpg"
                  title="Covid recovery"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Dealing with Covid-19:My Experience
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  I took paracetamol tablets, but it did not help. Since the fever kept growing with chills and sweat at night,
                   I even doubted it could be dengue or malaria fever.
                  </Typography>
                </CardContent>
                </a>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <a id="article4" href="https://www.pennmedicine.org/updates/blogs/penn-physician-blog/2020/july/recovery-after-covid19-treating-the-long-term-effects-of-sarscov2" target="blank">
                <CardMedia
                  className={classes.media}
                  image="https://cdn.pixabay.com/photo/2020/11/02/19/52/doctor-5707722__340.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Recovery After COVID-19
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Although the long-term effects of COVID-19 are still unknown, the presumed sequelae of the
                   disease would likely resemble those of recent coronavirus-related disease outbreaks, 
                   including Middle Eastern Respiratory Syndrome and SARS-Co-V2.
                  </Typography>
                </CardContent>
                </a>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Guy Clemons
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <BookmarkBorderIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Blogs;