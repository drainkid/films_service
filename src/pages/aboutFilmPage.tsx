import {Avatar, Box, Button, Chip, CircularProgress, Rating, Typography} from '@mui/material';
import {useNavigate, useParams} from 'react-router';
import {useEffect, useState} from 'react';
import {fetchMovieById} from '../api/kinopoisk.ts';
import type {Movie} from '../types.ts';
import NavBar from "../components/navBar.tsx";

const AboutFilmPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadMovie = async () => {
            try {
                const res = await fetchMovieById(id);
                setMovie(res.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadMovie();
    }, [id]);

    const formatDate = (isoDate: Date | null): string => {
        if (!isoDate) return '—';
        const date = new Date(isoDate);
        return date.toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <>
                <NavBar/>
                <Box display="flex" justifyContent="center" mt={5}>
                    <CircularProgress />
                </Box>
            </>
        );
    }

    if (!movie) {
        return (
            <>
                <NavBar/>
                <Box display="flex" justifyContent="center" mt={5}>
                    <Typography variant="h6" color="error">Фильм не найден</Typography>
                </Box>
            </>
        );
    }

    return (
        <>
            <NavBar/>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mt={4}
                px={2}
            >
                <Box
                    maxWidth="800px"
                    width="100%"
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={4}
                    alignItems="flex-start"
                >
                    <Avatar
                        variant="rounded"
                        src={movie.poster?.url || 'img.png'}
                        sx={{ width: 200, height: 280 }}
                    />
                    <Box flex={1}>
                        <Typography variant="h4" gutterBottom>
                            {movie.name || movie.alternativeName}
                        </Typography>

                        <Typography variant="body1" gutterBottom color="text.secondary">
                            {movie.description || 'Нет описания'}
                        </Typography>

                        <Typography variant="subtitle1" mt={2}>
                            <strong>Дата выхода:</strong> {formatDate(movie.createdAt)}
                        </Typography>

                        <Box display="flex" alignItems="center" mt={1}>
                            <Rating
                                value={movie.rating?.imdb ? movie.rating.imdb / 2 : 0}
                                precision={0.1}
                                readOnly
                            />
                            <Typography ml={1}>
                                {movie.rating?.imdb?.toFixed(1) || 'N/A'}
                            </Typography>
                        </Box>

                        <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                            {movie.genres?.map((genre) => (
                                <Chip key={genre.name} label={genre.name} />
                            ))}
                        </Box>

                        <Box mt={4}>
                            <Button variant="outlined" onClick={() => navigate(-1)}>
                                Назад
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutFilmPage;
