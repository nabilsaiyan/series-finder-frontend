import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 40px auto 0;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  padding: 15px;
  border: none;
  border-radius: 40px 0 0 40px;
  font-size: 18px;
  width: 100%;
  outline: none;
  background-color: transparent;
  color: #333;
  font-family: "Ubuntu";

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const SearchButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 0 40px 40px 0;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Ubuntu";

  &:hover {
    background-color: #ff6b6b;
  }
`;

export const SerieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;
