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
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.avatar}
          alt={user.avatar}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.avatar}
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
