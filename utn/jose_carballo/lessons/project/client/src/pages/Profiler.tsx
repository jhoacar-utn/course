import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Profiler = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="center">
      <Card sx={{ maxWidth: 400 }}>
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
