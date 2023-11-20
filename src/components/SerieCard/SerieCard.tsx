import {
  CardContainer,
  Title,
  AirDate,
  Image,
  CircularProgressWrapper,
  DetailsContainer,
} from "./SerieCardStyles";
import { SerieCardProps } from "../../types/SerieCardProps";
import CircularProgress from "../Circular/CircularProgress";

function SerieCard({ serie, onClick, openModal }: SerieCardProps) {
  const date = serie.first_air_date ? new Date(serie.first_air_date) : null;

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedDate = date
    ? date.toLocaleDateString("en-EN", options)
    : "Date Not Available";

  const percentage = Math.ceil(serie.vote_average * 10);
  return (
    <CardContainer onClick={onClick}>
      <Image src={serie.poster_path} alt={serie.name} onClick={openModal} />
      <CircularProgressWrapper>
        <CircularProgress percentage={percentage}></CircularProgress>
      </CircularProgressWrapper>
      <DetailsContainer>
        <Title>{serie.name}</Title>
        <AirDate>{formattedDate}</AirDate>
      </DetailsContainer>
    </CardContainer>
  );
}

export default SerieCard;
