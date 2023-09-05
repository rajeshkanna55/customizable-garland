import { Grid } from '@mui/material';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlowerCard from './component/flowerCard/flowerCard';
import FlowerParts from './component/flowerParts/flowerParts';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <Grid container>
            <Grid item xs={8}>
              <div className='flower_main'>
                <FlowerCard/>
              </div>
            </Grid> 
            <Grid item xs={4}>
                <FlowerParts/>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
