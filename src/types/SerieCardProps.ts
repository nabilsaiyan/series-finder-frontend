import { Serie } from "./Serie";

export interface SerieCardProps {
  serie: Serie;
  onClick?: () => void;
  openModal?: () => void;
}
