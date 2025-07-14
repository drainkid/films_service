import {Box, Typography} from "@mui/material";
import MovieCard from "../components/movieCard";
import {useFavorites} from "../hooks/useFavorites";

const FavoriteFilmsPage = () => {
    const { favorites } = useFavorites();

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                Избранные фильмы
            </Typography>

            {favorites.length === 0 ? (
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Вы еще не добавили фильмы в избранное.
                </Typography>
            ) : (
                favorites.map((movie) => (
                    <MovieCard key={movie.id} movieInf={movie} />
                ))
            )}
        </Box>
    );
};

export default FavoriteFilmsPage;
