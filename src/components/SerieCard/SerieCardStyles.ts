import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  margin: 0.63rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.13rem 0.25rem rgba(0, 0, 0, 0.2);
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  font-size: 2rem;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: auto;
  height: 300px;
  border-radius: 0.25rem 0.25rem 0 0;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const CircularProgressWrapper = styled.div`
  position: absolute;
  top: 16.5rem;
`;

export const DetailsContainer = styled.div`
  margin: 0;
  padding: 1.5rem 0.6rem 0 0.6rem;
`;

export const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  transition: color 0.2s ease-in-out;
  color: #333;
  text-shadow: none;

  ${CardContainer}:hover & {
    color: #ff6b6b;
  }
`;

export const AirDate = styled.p`
  font-size: 0.7rem;
  margin: 0;
  padding: 0.3rem 0 0.6rem;
  color: #666;
  transition: opacity 0.2s ease-in-out;

  ${CardContainer}:hover & {
    opacity: 0.8;
  }
`;
