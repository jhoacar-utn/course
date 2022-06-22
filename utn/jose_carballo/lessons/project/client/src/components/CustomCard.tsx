import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { sx_box, sx_card_footer, sx_custom_card, sx_img_card } from '../assets/const';
import { images } from '../assets/utils';
import './cardStyles.scss';

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
        <CardContent sx={sx_card_footer}>
        <Box sx={sx_box}>
        <CardMedia
          className='pokeball'
          component="img"
          height={60}
          image={images.Pokebola}
          alt="pokebola"
        />
        </Box>
          <Typography gutterBottom variant='h5' sx={{marginTop:3, textTransform: 'uppercase'}}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
