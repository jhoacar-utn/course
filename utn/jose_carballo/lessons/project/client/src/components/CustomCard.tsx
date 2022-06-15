import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { sx_custom_card } from '../assets/const';

export const CustomCard = (pokemon: any) =>{
  const {pokemon: pokemonData} = pokemon;
  const {name, sprites} = pokemonData
  return (
    <Card sx={sx_custom_card}>
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Box>
      <CardMedia
          component="img"
          height="120"
          image={sprites?.front_default}
          alt={name}
        />
    </Card>
  );
}
