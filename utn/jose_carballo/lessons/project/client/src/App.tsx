import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import { RoutersPokemon } from './routers/RoutersPokemon';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#1976d200',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#2196f3',
        main: '#1976d200',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <div className="App">
       <ThemeProvider theme={theme}>

     <RoutersPokemon />
       </ThemeProvider>
    </div>
  );
}

export default App;
