import { useState, useCallback } from 'react';
import { ApiResponse, TeamSearchResponse, Match } from '../types/football';

interface UseFootballDataResult {
  teams: TeamSearchResponse[];
  matches: Match[];
  loading: boolean;
  error: string | null;
  searchTeams: (query: string) => void;
  fetchMatchesByTeam: (teamId: number, season?: number) => void;
}

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
// usando proxy para evitar CORS
const BASE_URL = 'https://corsproxy.io/?https://api-football-v1.p.rapidapi.com/v3/';

export function useFootballData(): UseFootballDataResult {
  const [teams, setTeams] = useState<TeamSearchResponse[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async <T>(endpoint: string, params: Record<string, string>): Promise<T | null> => {
      setLoading(true);
      setError(null);
      try {
        const url = new URL(`${BASE_URL}${endpoint}`);
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

        const response = await fetch(url.toString(), {
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data: ApiResponse<T> = await response.json();

        if (data.errors && Object.keys(data.errors).length > 0) {
          throw new Error(JSON.stringify(data.errors));
        }

        return data.response as T;
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro ao buscar os dados.");
        console.error("API Fetch Error:", err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const searchTeams = useCallback(
    async (query: string) => {
      if (!query) {
        setTeams([]);
        return;
      }
      const data = await fetchData<TeamSearchResponse[]>('teams', { search: query });
      setTeams(data ?? []);
    },
    [fetchData]
  );

  const fetchMatchesByTeam = useCallback(
    async (teamId: number, season: number = 2023) => {
      const data = await fetchData<Match[]>('fixtures', {
        team: teamId.toString(),
        season: season.toString(),
      });
      setMatches(data ?? []);
    },
    [fetchData]
  );

  return { teams, matches, loading, error, searchTeams, fetchMatchesByTeam };
}
