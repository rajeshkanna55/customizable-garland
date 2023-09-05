import 'bootstrap/dist/css/bootstrap.min.css';
import shoulder from '../../assets/shoulder.png';
import mid from '../../assets/mid.png';
import konda from '../../assets/konda.png';
import topp from '../../assets/topp.jpg';
import rose from '../../assets/rerose.jpg'
import './flowerCard.css';
import { Grid } from '@mui/material';
export default function FlowerCard(){
    return (
      <>
        <div className="container">
          <div className="flower_content_area">
            <div className="container">
              <div className="root_full_contain">
                <div className="root_contain">
                  <Grid container>
                    <Grid item xs={12}>
                      <div className="base_of_garland">
                        <div className="base_pic_garland"></div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="mid_of_garland">
                        <div className="topbase_pic1_garland">
                            <img src={shoulder} alt='shoulder_flower' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="mid_of_garland">
                        <div className="topbase_pic2_garland">
                        <img src={shoulder} alt='shoulder_flower' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="top_of_garland">
                        <div className="top_pic1_garland">
                            <img src={rose} alt='top_garland' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="top_of_garland">
                        <div className="top_pic2_garland">
                        <img src={rose} alt='top_garland' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="mid_of_garland">
                        <div className="mid_pic1_garland">
                        <img src={mid} alt='top_garland' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="mid_of_garland">
                        <div className="mid_pic2_garland">
                        <img src={mid} alt='top_garland' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="botmid_of_garland">
                        <div className="botmid_pic1_garland">
                        <img src={topp} alt='top_garland' className='image1_fitting_bottom'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div className="botmid_of_garland">
                        <div className="botmid_pic2_garland">
                        <img src={topp} alt='top_garland' className='image2_fitting_bottom'/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="under_of_garland">
                        <div className='under_pic_garland'>
                        <img src={konda} alt='top_garland' className='image_fitting'/>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}