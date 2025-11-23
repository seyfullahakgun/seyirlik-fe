const API_BASE_URL = "http://localhost:8080/api";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  production_companies?: { id: number; name: string }[];
}

export interface SearchResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export async function searchMovies(query: string): Promise<SearchResponse> {
  const response = await fetch(
    `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Film arama başarısız oldu");
  }

  return response.json();
}

export async function getMovieDetails(id: string | number): Promise<Movie> {
  const response = await fetch(`${API_BASE_URL}/movie/${id}`);

  if (!response.ok) {
    throw new Error("Film detayları alınamadı");
  }

  return response.json();
}
