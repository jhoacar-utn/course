import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { sx_card_pokemon, sx_img_card } from "../assets/const";
import { images } from "../assets/utils";

export const CardPokemon = (props: any) => {
  return (
    <div>
      
      <Card sx={sx_card_pokemon}>
      <h1>Yo Te Elijo!!</h1>
        <CardMedia
          component="img"
          sx={sx_img_card}
          image={props?.imageUrl || images.Pokebola}
          alt={props?.name}
        />
        <CardContent>
          <Typography gutterBottom>
            {props?.name}
          </Typography>
          <textarea name="textarea" value={props?.imageUrl} rows={3} cols={30} readOnly/>
        </CardContent>
      </Card>
    </div>
  );
};
