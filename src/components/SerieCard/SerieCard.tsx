import { CardContainer, Title, AirDate, Image } from "./SerieCardStyles";
import { SerieCardProps } from "../../types/SerieCardProps";

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

  return (
    <CardContainer onClick={onClick}>
      <Image src={serie.poster_path} alt={serie.name} onClick={openModal} />
      <Title>{serie.name}</Title>
      <AirDate>{formattedDate}</AirDate>
    </CardContainer>
  );
}

export default SerieCard;
