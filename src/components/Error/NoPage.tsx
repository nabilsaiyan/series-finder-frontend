import { MessageStyles } from "../../styles/MessageStyles";

interface NoPageProps {
  message?: string;
}

function NoPage({ message = "Page not found ! 😓" }: NoPageProps) {
  return (
    <MessageStyles>
      <h1>{message}</h1>
    </MessageStyles>
  );
}

export default NoPage;
