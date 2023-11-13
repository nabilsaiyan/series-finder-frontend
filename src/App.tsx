import { GlobalStyle } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/routes";
import { ContentWrapper } from "./styles/ContentWrapper";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ContentWrapper>
        <AppRoutes />
      </ContentWrapper>
    </>
  );
}

export default App;
