import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export const CustomCard = (pokemon: any) =>{
  const {pokemon: pokemonData} = pokemon;
  const {name, sprites} = pokemonData
  return (
    <Card sx={{margin:2, minWidth: 200, display: 'flex' }}>
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
          height="80"
          image={sprites?.front_default}
          alt={name}
        />
    </Card>
  );
}
