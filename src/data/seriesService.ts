import { Serie } from "../types/Serie";
import seriesData from "./seriesData.json";

async function searchByKeyword(query: string): Promise<Serie[]> {
  const lowercaseQuery = query.toLowerCase();

  const matchingSeries = seriesData.filter((serie: Serie) => {
    const lowercaseTitle = serie.name.toLowerCase();
    const lowercaseOverview = serie.overview.toLowerCase();

    return (
      lowercaseTitle.includes(lowercaseQuery) ||
      lowercaseOverview.includes(lowercaseQuery)
    );
  });

  return matchingSeries;
}

export { searchByKeyword };
