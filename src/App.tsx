import './App.css';
import Router from './router/Router'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const App: React.FC = () => {
  return (
      <Box className="App">
        <Box className="head">
          <Typography variant="h4">Simple Shop</Typography>
        </Box>
        <Box className="body">
          <Router />
        </Box>
      </Box>
  );
}

export default App;
