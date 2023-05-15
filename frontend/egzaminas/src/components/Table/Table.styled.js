import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 20px auto;
  max-width: 75%;

  h1 {
    text-align: center;
  }

  button {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #4caf50;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    text-align: left;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background-color: #2e7d32;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 2px solid #ddd;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 3px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  td:last-child {
    text-align: center;
  }

  td button {
    margin-right: 10px;
    padding: 5px;
    background-color: #f44336;
    border: none;
    border-radius: 15%;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #c62828;
    }
  }

  td button:last-child {
    background-color: #2196f3;

    &:hover {
      background-color: #0d47a1;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type='text'] {
      margin-bottom: 10px;
      padding: 5px;
      border: 1px solid #ddd;
    }

    button[type='submit'] {
      margin-top: 10px;
      padding: 10px;
      background-color: #4caf50;
      border: none;
      color: #fff;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #2e7d32;
      }
    }
  }
`;
