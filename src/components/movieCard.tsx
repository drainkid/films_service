import {Avatar, Box, Button, Rating, Typography} from "@mui/material";
import type {Movie} from "../types.ts";

type MovieCardProps = {
    movieInf: Pick<Movie, 'name' | 'alternativeName' | 'year' | 'poster' | 'rating'>;
};

const MovieCard = ({movieInf}: MovieCardProps) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            py: 2,
            px: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            '&:hover': {
                backgroundColor: 'action.hover'
            }
        }}>
            <Avatar
                src={movieInf.poster?.url || 'img.png'}
                sx={{
                    width: 60,
                    height: 80,
                    mr: 2,
                    borderRadius: 1
                }}
                variant="rounded"
            />

            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {(movieInf.name || movieInf.alternativeName)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {movieInf.year}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating
                        value={movieInf.rating?.imdb ? movieInf.rating.imdb / 2 : 0}
                        precision={0.1}
                        readOnly
                        size="small"
                        sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movieInf.rating?.imdb?.toFixed(1) || 'N/A'}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <Button size="small" variant="contained">Добавить в избранное</Button>
            </Box>
        </Box>
    );
};

export default MovieCard;