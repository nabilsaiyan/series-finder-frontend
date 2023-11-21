import { useEffect, useState } from "react";
import { Serie } from "../../types/Serie";
import { getTrendingSeries } from "../../data/seriesService";
import { SerieList } from "../SearchSeries/FindSeriesStyles";
import SerieCard from "../SerieCard/SerieCard";
import NoPage from "../Error/NoPage";

function TrendingSeries() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    getTrendingSeries()
      .then((result: Serie[]) => {
        setSeries(result);
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to fetch data");
      });
  }, []);

  return (
    <>
      <SerieList>
        {message && <NoPage message={message} />}
        {series.length > 0 &&
          series.map((serie) => <SerieCard serie={serie} />)}
      </SerieList>
    </>
  );
}

export default TrendingSeries;
