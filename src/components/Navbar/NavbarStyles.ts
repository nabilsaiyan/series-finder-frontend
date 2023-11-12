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
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  animation: ${descendAnimation} 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px 0;
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
    margin-left: 15px;
  }
`;

export const Logo = styled.img`
  height: 30px;
  width: 30px;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-left: 10px;
  color: #333;
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
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 10px;
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
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
      margin-bottom: 2px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  transform: translateZ(0);

  &:hover {
    background-color: #e1e1e1
    color: #ff6b6b;
  }

  &.active {
    background-color: #ff6b6b;
    color: #fff;
    margin-bottom: -2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
