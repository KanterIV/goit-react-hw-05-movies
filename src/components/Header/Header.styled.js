import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 75px;
  border-bottom: 1px solid black;
  border-radius: 10px;

  .header-list {
    list-style: none;
    display: flex;
  }

  .header-link {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 15px;
    font-size: 18px;
    text-decoration: none;
    margin-right: 15px;
    border-radius: 10px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: black;
      color: white;
      border-radius: 10px;
    }
  }
`;
