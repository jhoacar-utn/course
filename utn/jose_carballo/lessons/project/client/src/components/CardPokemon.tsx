import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { sx_card_pokemon } from "../assets/const";

export const CardPokemon = (props: any) => {
  return (
    <div>
      
      <Card sx={sx_card_pokemon}>
      <h1>Pokemon</h1>
        <CardMedia
          component="img"
          height="200"
          image={props?.data?.sprites?.front_default}
          alt={props?.data?.name}
        />
        <CardContent>
          <Typography gutterBottom>
            {props?.data?.name}
          </Typography>
          <textarea name="textarea" value={props?.data?.sprites?.front_default} rows={3} cols={30} readOnly/>
        </CardContent>
      </Card>
    </div>
  );
};
