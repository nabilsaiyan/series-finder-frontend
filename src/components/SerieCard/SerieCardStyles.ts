import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 10px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 10px 0px 10px;
  transition: color 0.2s ease-in-out;
  color: #333;
  text-shadow: none;

  ${CardContainer}:hover & {
    color: #ff6b6b;
  }
`;

export const Overview = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 7px;
  color: #666;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: opacity 0.2s ease-in-out;

  ${CardContainer}:hover & {
    opacity: 0.8;
  }
`;
