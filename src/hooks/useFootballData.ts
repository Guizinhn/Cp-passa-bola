import { useState, useCallback, useEffect } from 'react';
import { ApiResponse, TeamSearchResponse, Match } from '../types/football';

interface UseFootballDataResult {
  teams: TeamSearchResponse[];
  matches: Match[];
  loading: boolean;
  error: string | null;
  searchTeams: (query: string) => void;
  fetchMatchesByTeam: (teamId: number, season?: number) => void;
}

// Chave da API definida nas variáveis de ambiente
const API_KEY = import.meta.env.VITE_API_SPORTS_KEY;
// URL base da API-Sports
const BASE_URL = 'https://v3.football.api-sports.io/';

export function useFootballData(): UseFootballDataResult {
  // Estados para armazenar dados da API e status de carregamento/erro
  const [teams, setTeams] = useState<TeamSearchResponse[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Função genérica para buscar dados da API
   * @param endpoint - Endpoint da API (e.g., 'teams', 'fixtures')
   * @param params - Parâmetros da query string
   * @returns Dados do tipo genérico T ou null
   */
  const fetchData = useCallback(
    async <T>(endpoint: string, params: Record<string, string>): Promise<T | null> => {
      setLoading(true); // Ativa indicador de carregamento
      setError(null);   // Limpa erro anterior
      try {
        // Monta a URL com query params
        const url = new URL(`${BASE_URL}${endpoint}`);
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

        // Requisição para a API com cabeçalhos necessários
        const response = await fetch(url.toString(), {
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data: ApiResponse<T> = await response.json();

        // Checa se a API retornou algum erro
        if (data.errors && Object.keys(data.errors).length > 0) {
          const errorMessage = typeof data.errors === 'string' ? data.errors : JSON.stringify(data.errors);
          throw new Error(errorMessage);
        }

        // A API geralmente retorna os dados dentro do array 'response'
        if (Array.isArray(data.response)) {
          return data.response as T; // Retorna array diretamente
        } else if (data.response) {
          return [data.response] as T; // Trata como array com um único item
        }
        return null;
      } catch (err: any) {
        // Em caso de erro, salva mensagem e loga no console
        setError(err.message || "Ocorreu um erro ao buscar os dados.");
        console.error("API Fetch Error:", err);
        return null;
      } finally {
        setLoading(false); // Desativa indicador de carregamento
      }
    },
    []
  );

  /**
   * Busca times pelo nome
   * @param query - Nome ou parte do nome do time
   */
  const searchTeams = useCallback(
    async (query: string) => {
      if (!query) {
        setTeams([]); // Limpa resultados se query estiver vazia
        return;
      }
      const data = await fetchData<TeamSearchResponse[]>('teams', { search: query });
      setTeams(data ?? []); // Atualiza estado de times
    },
    [fetchData]
  );

  /**
   * Busca partidas de um time específico
   * @param teamId - ID do time
   * @param season - Ano da temporada (padrão 2023)
   */
  const fetchMatchesByTeam = useCallback(
    async (teamId: number, season: number = 2023) => {
      const data = await fetchData<Match[]>('fixtures', {
        team: teamId.toString(),
        season: season.toString(),
      });
      setMatches(data ?? []); // Atualiza estado de partidas
    },
    [fetchData]
  );

  /**
   * useEffect para carregar dados iniciais ao montar o componente
   */
  useEffect(() => {
    const loadDefaultData = async () => {
      // Exemplo: busca inicial por times que contenham "Madrid"
      // Isso é útil para exibir algum conteúdo na tela inicial
      const initialTeamsData = await fetchData<TeamSearchResponse[]>('teams', { search: "Madrid" });
      setTeams(initialTeamsData ?? []);

      // Caso queira, também é possível carregar partidas de um time específico
      // await fetchMatchesByTeam(541); // Ex: Real Madrid
    };

    loadDefaultData();
  }, [fetchData]); // Só depende do fetchData para evitar loops infinitos

  // Retorna todos os estados e funções para uso em componentes
  return { teams, matches, loading, error, searchTeams, fetchMatchesByTeam };
}
