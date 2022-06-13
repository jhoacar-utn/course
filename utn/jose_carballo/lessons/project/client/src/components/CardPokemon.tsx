import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardPokemon = (props: any) => {
  return (
    <div>
      
      <Card sx={{ margin: 2, minWidth: 200, maxWidth:400, height: 400 }}>
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
