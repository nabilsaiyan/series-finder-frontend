import { SearchButton, SearchForm, SearchInput } from "./NavbarStyles";
import {
  Nav,
  LogoContainer,
  Logo,
  Title,
  Ul,
  Li,
  StyledNavLink,
} from "./NavbarStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface SearchFormData {
  query: string;
}

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/trending");
  };

  const { register, handleSubmit } = useForm<SearchFormData>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    const { query } = data;
    if (query) navigate(`search/${query}`);
  };

  return (
    <Nav>
      <LogoContainer onClick={handleLogoClick}>
        <Logo src="/logo.png" alt="Logo" />
        <Title>
          SERIES <span>FINDER</span>
        </Title>
      </LogoContainer>
      <Ul>
        <Li>
          <StyledNavLink
            to="/trending"
            className={location.pathname === "/trending" ? "active" : ""}
          >
            Trending Series
          </StyledNavLink>
        </Li>
        <Li>
          <SearchForm onSubmit={handleSubmit(onSubmit)}>
            <SearchInput
              type="text"
              placeholder="Find series..."
              {...register("query")}
            />
            <SearchButton type="submit">
              <span className="material-symbols-outlined">search</span>
            </SearchButton>
          </SearchForm>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
