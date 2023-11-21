import { useEffect, useState } from "react";
import { Serie } from "../../types/Serie";
import { searchByKeyword } from "../../data/seriesService";
import SerieCard from "../SerieCard/SerieCard";
import { useParams } from "react-router-dom";
import { SerieList } from "./FindSeriesStyles";
import NoPage from "../Error/NoPage";

function FindSeries() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [message, setMessage] = useState<string>("");

  const { keyword } = useParams<{ keyword: string }>();

  useEffect(() => {
    if (!keyword) {
      setMessage("No keyword provided!");
      return;
    }

    setMessage("");

    searchByKeyword(keyword)
      .then((result: Serie[]) => {
        if (result.length === 0) {
          setMessage("The keyword doesn't match any series! 😐");
        }
        setSeries(result);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to fetch data");
      });
  }, [keyword]);

  return (
    <>
      {message && <NoPage message={message} />}
      {series.length > 0 && (
        <SerieList>
          {series
            .filter(
              (serie) =>
                serie.poster_path &&
                !serie.poster_path.includes("originalnull") &&
                serie.overview !== ""
            )
            .map((serie) => (
              <SerieCard key={serie.id} serie={serie} />
            ))}
        </SerieList>
      )}
    </>
  );
}

export default FindSeries;
