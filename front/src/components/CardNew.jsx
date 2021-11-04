import { Card, CardActionArea, CardMedia, 
    CardActions, CardContent, Typography,
    CardHeader,
    Avatar,
    IconButton, } 
    from '@material-ui/core';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box } from '@mui/system';

const CardNew = () => {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/8/82/Snakes_green_reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                
                    <Typography variant="body2"><Box sx={{ height: '35px' }} style={{overflow: 'hidden'}}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Box></Typography>
                    
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                
            </CardActions>
        </Card>
    )
}
export default CardNew