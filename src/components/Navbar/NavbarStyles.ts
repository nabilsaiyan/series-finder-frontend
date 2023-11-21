import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const descendAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #f1f1f1;
  padding: 0.315rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.15rem;
  animation: ${descendAnimation} 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem 0;
    flex-wrap: wrap;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    justify-content: left;
    margin-left: 1rem;
  }
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-left: 0.7rem;
  color: #333;
  font-family: "Russo One", sans-serif;

  span {
    color: #ff6b6b;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 100%;
    animation: ${descendAnimation} 0.3s ease;
  }
`;

export const Li = styled.li`
  margin-right: 0.625rem;

  @media (max-width: 768px) {
    margin-bottom: 0.625rem;
    padding: 0.625rem;
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    padding: 0.625rem;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
    transform: translateZ(0);

    &:hover {
      background-color: #e1e1e1;
      color: #ff6b6b;
    }

    &.active {
      background-color: #ff6b6b;
      color: #fff;
      margin-bottom: 0.125rem;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 0.625rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  transform: translateZ(0);

  &:hover {
    background-color: #e1e1e1;
    color: #ff6b6b;
  }

  &.active {
    background-color: #ff6b6b;
    color: #fff;
    margin-bottom: -0.125rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 300px;
  background-color: #fff;
  border-radius: 7px;

  &:focus-within {
    box-shadow: 0 0 0 0.15rem #ff6b6b;
  }
`;

export const SearchInput = styled.input`
  padding: 0.625rem;
  border: none;
  font-size: 1.15rem;
  width: 100%;
  outline: none;
  color: #333;
  border-radius: 10px;
  transition: border-color 0.3s ease;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const SearchButton = styled.button`
  background: #fff;
  color: #333;
  border: none;
  font-size: 1.15rem;
  margin: 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #ff6b6b;
  }
`;
