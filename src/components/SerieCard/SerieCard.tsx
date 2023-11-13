import { CardContainer, Title, Overview, Image } from "./SerieCardStyles";
import { SerieCardProps } from "../../types/SerieCardProps";

function SerieCard({ serie, onClick, openModal }: SerieCardProps) {
  return (
    <CardContainer onClick={onClick}>
      <Image
        src={`/posters/${serie.poster_path}`}
        alt={serie.name}
        onClick={openModal}
      />
      <Title>{serie.name}</Title>
      <Overview>{serie.overview}</Overview>
    </CardContainer>
  );
}

export default SerieCard;
