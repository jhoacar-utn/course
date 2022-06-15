import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { sx_card_pokemon } from "../assets/const";
import { AuthContext } from "../context/AuthContext";

export const Profiler = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="center">
      <Card sx={sx_card_pokemon}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={user.image}
          alt={user.avatar}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Avatar: {user.avatar}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nombre: {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};
