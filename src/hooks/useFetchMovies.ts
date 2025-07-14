import {useEffect, useRef, useState} from "react";
import axios from "axios";

type UseFetchMoviesReturn = [
    () => Promise<void>,
    boolean,
    string | null,
    () => void
]
export const useFetchMovies = (callback: (signal: AbortSignal) => Promise<void>): UseFetchMoviesReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);

    const fetching = async (): Promise<void> => {
        try {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }

            abortControllerRef.current = new AbortController()
            const signal = abortControllerRef.current.signal

            setIsLoading(true)
            setError(null)
            await callback(signal)

        } catch (e) {
            if (axios.isCancel(e)) {
                return
            }

            if (e instanceof Error) {
                setError(e.message)
                setIsLoading(false)
            } else {
                setError(String(e))
                setIsLoading(false)
            }
        } finally {
            setIsLoading(false)
        }
    };

    const resetError = () => setError(null);

    useEffect(() => {
        return () => {
            if (abortControllerRef.current?.signal.aborted === false) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    return [ fetching, isLoading, error, resetError ]
};