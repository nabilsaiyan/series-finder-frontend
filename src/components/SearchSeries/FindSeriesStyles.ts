import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 2.5rem auto 0;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: 0.125rem 0.313rem 0.313rem rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 40px 0 0 4px;
  font-size: 1.15rem;
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
  padding: 1rem 1.25rem;
  border-radius: 0 40px 40px 0;
  font-size: 1.15rem;
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
  margin-top: 2.5rem;
`;
