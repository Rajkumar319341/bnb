import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ply from '../../Assets/Images/play.webp'
import "./HomeTop.css"
import { Link } from 'react-router-dom';

export default function MediaCard() {
  const redirectToExternalURL = () => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.care4edu.bnb&pcampaignid=web_share';
  };

  return (
   <div className='shikshak'> 
   <center >
  <div style={{display:'flex', justifyContent:'center', alignItems:'center',padding:'1rem 1rem'}} >
    <Card  sx={{ maxWidth: 400 }}  >
      <CardMedia
        sx={{ height: 180 }} 
        image={ply}
        style={{objectFit:"cover"}}
        title="Shikshak Pro"
      />
      <CardContent style={{padding:"2px"}}>
        <Typography gutterBottom variant="h5" component="div" style={{ color: "#660066", margin:"0"}} >
          BNB
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>We are availble only on mobile android app.Please dowload it from play store. To advertise ur brand click on Advertise button.   </p>
        </Typography>
      </CardContent>
      <CardActions  sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',}} >
        <Button variant="outlined" color='secondary' sx={{borderRadius: 1.5}}onClick={redirectToExternalURL} size="medium" style={{backgroundColor:"linear-gradient(to right, #ccffff 0%, #0099ff 100%)", fontWeight:"bold"}}>Install</Button>
      </CardActions>
    </Card>
    </div>
     {/* <Link to='/Advertise' > */}
    {/* <button>Advertise your Brand</button> */}
    {/* <p>Promote your business in our app</p> */}
    {/* </Link>  */}
    </center>
    </div>
  );
}
