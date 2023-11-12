import {
  Nav,
  LogoContainer,
  Logo,
  Title,
  Ul,
  Li,
  StyledNavLink,
} from "./NavbarStyles";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/search");
  };

  return (
    <Nav>
      <LogoContainer onClick={handleLogoClick}>
        <Logo src="/logo.png" alt="Logo" />
        <Title>MySERIES</Title>
      </LogoContainer>
      <Ul>
        <Li>
          <StyledNavLink to="/search">Find Series</StyledNavLink>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
