import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  width: 1400px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
  margin: 0 auto;

  .trending-list {
    list-style: none;
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .trending-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }

  .trending-item {
    width: calc((100% - 160px) / 5);
  }
  .trending-item-img {
    width: 100%;
    min-height: 372px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .trending-item-title {
    font-size: 20px;
    height: 60px;
    padding-top: 10px;
    border: 1px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
  }

  .search-form {
    margin-bottom: 30px;
  }
  .search-form-text {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .search-form-input {
    width: 300px;
    height: 23px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
  }

  .search-form-submit {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 9px 5px;
    font-size: 16px;
    text-decoration: none;
    margin-left: 15px;
    border-radius: 10px;

    transition: all 0.3s;
  }

  .search-form-submit:hover {
    border: 1px solid white;
    background-color: black;
    color: white;
    border-radius: 10px;
  }

  .backLink {
    margin-bottom: 10px;
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 9px 5px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 10px;

    transition: all 0.3s;
  }

  .backLink:hover {
    border: 1px solid white;
    background-color: black;
    color: white;
    border-radius: 10px;
  }

  .card-wraper {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
  }

  .card-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .genres-list {
    display: flex;
    gap: 10px;
  }

  .additional-wrapper {
    padding: 20px 0 20px 30px;
    margin-bottom: 15px;
    border: 1px solid black;
    border-radius: 10px;
  }

  .adittional-title {
    margin-bottom: 15px;
  }

  .adittional-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: square;
  }

  .adittional-item:hover {
    color: blue;
  }
`;
