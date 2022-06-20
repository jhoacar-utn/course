import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { sx_custom_card, sx_img_card } from '../assets/const';
import { images } from '../assets/utils';

export const CustomCard = (pokemon: any) =>{
  const {pokemon: pokemonData} = pokemon;
  const {name, imageUrl} = pokemonData
  return (
    <Card sx={sx_custom_card}>
      <CardMedia
          component="img"
          sx={sx_img_card}
          image={imageUrl || images.Pokebola}
          alt={name}
        />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
