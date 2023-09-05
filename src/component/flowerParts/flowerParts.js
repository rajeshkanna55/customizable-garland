import Slick from 'react-slick';
import './flowerParts.css';
import { Card, Grid } from '@mui/material';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default function FlowerParts(){
    
  const data = [1,2,3,4,5,6];
  const settings = {
    // dots: true,
     infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,  
    prevArrow: <div ><p>{"<-"}</p></div>,   
    nextArrow: <div ><p>{"->"}</p></div>
  };

  const handleClick=(e)=>{
    console.log(e.target.value);
  }
    return (
      <>
        <div className="container">
          <div className="option_garland_chose">
            <div className="top_garland_option">
              <div className="top_part_option">
                <h3>Top</h3>
                <Slick {...settings}>
                  {data &&
                    data.map((item,index) => (
                      <Grid container key={index}>
                        <Grid item xs={12} sm={6} md={4} lg={3} rowSpacing={1}>
                          <Card className="top_part_cards">
                            <p>{item}</p>
                          </Card>
                          <p>name</p>
                        </Grid>
                      </Grid>
                    ))}
                </Slick>
                <h3>Middle</h3>
                <Slick {...settings}>
                  {data &&
                    data.map((item,index) => (
                      <Grid container key={index}>
                        <Grid item xs={12} sm={6} md={4} lg={3} rowSpacing={1}>
                          <Card className="top_part_cards" onClick={handleClick}>
                            <p>{item}</p>
                          </Card>
                          <p>name</p>
                        </Grid>
                      </Grid>
                    ))}
                </Slick>
                <h3>Bottom-middle</h3>
                <Slick {...settings}>
                  {data &&
                    data.map((item,index) => (
                      <Grid container key={index}>
                        <Grid item xs={12} sm={6} md={4} lg={3} rowSpacing={1}>
                          <Card className="top_part_cards">
                            <p>{item}</p>
                          </Card>
                          <p>name</p>
                        </Grid>
                      </Grid>
                    ))}
                </Slick>
                <h3>Bottom</h3>
                <Slick {...settings}>
                  {data &&
                    data.map((item,index) => (
                      <Grid container key={index}>
                        <Grid item xs={12} sm={6} md={4} lg={3} rowSpacing={1}>
                          <Card className="top_part_cards">
                            <p>{item}</p>
                          </Card>
                          <p>name</p>
                        </Grid>
                      </Grid>
                    ))}
                </Slick>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}