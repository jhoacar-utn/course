import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const CustomCard = (pokemon: any) =>{
  const {pokemon: pokemonData} = pokemon;
  const {name, sprites} = pokemonData
  return (
    <Card sx={{margin:2, maxWidth: 120 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={sprites?.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
