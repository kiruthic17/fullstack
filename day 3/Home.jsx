import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Home = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage:'url(https://img.freepik.com/free-vector/abstract-green-background_698452-1146.jpg?size=626&ext=jpg&ga=GA1.1.329785821.1706673318&semt=sph)', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>



      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://navi.com/blog/wp-content/uploads/2022/06/Agriculture-Loan-Guide.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          
          image="https://www.loanspot.ng/wp-content/uploads/2020/04/agric-loan-out-scaled.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Ministry of Agriculture & Farmers Welfare of India will conduct ‘Fasal Bima Pathshala’ under ‘Kisan Bhagidari Prathmikta Campaign’ as a Jan Bhagidari movement.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://mukavari.com/trendcart/images/categories/1530253311_36512_Agri-loan.jpg  "
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.nationalbusinesscapital.com/wp-content/uploads/2022/08/agricultural-loans.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://tamilorganicfarming.files.wordpress.com/2020/05/n01539083451agri-loan-3.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
        <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://sharadbank.com/images/agri-loan.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
        <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmWrSz-dRMyrUEN7QESxZYch0LHnnXQYa9Q&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50 farmers / Agricultural labourers will be trained in a cluster with the financial assistance of Rs.5000/- per training.
          </Typography>
        </CardContent>
        <CardActions>
          <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}} href="https://www.tn.gov.in/scheme/data_view/6847"size="small">Learn More</Button>
        </CardActions>
        <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRhgUFiNDdBEftKV3sQ9Vo10felj1k2F7ig&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'green' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'green'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
          <Button style={{ color: 'green' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>
      
    </div>
    </div>
  );
}
export default Home;