import { useForm, SubmitHandler } from "react-hook-form";

import { useState } from "react";
import {
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchInput,
  SerieList,
} from "./FindSeriesStyles";
import { Serie } from "../../types/Serie";
import { searchByKeyword } from "../../data/seriesService";
import SerieCard from "../SerieCard/SerieCard";

interface SearchFormData {
  query: string;
}

function FindSeries() {
  const [series, setSeries] = useState<Serie[]>([]);
  const { register, handleSubmit } = useForm<SearchFormData>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    const { query } = data;
    searchByKeyword(query)
      .then((result: Serie[]) => {
        setSeries(result);
        setMessage("The keyword doesn't match any series ! 😐");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to fetch data");
      });
  };

  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SearchInput
            type="text"
            placeholder="Search series..."
            {...register("query")}
          />
          <SearchButton type="submit">
            <span className="material-symbols-outlined">search</span>
          </SearchButton>
        </SearchForm>
      </SearchContainer>

      <SerieList>
        {series.map((serie) =>
          !serie.poster_path.includes("originalnull") &&
          serie.overview !== "" ? (
            <SerieCard key={serie.id} serie={serie} />
          ) : null
        )}
      </SerieList>
    </>
  );
}

export default FindSeries;
