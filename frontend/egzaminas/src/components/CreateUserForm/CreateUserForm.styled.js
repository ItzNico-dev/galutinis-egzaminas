import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 100%;
  max-width: 50%;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  & > span {
    font-weight: bold;
    margin-bottom: 5px;
  }

  & > input {
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
  }

  & > input:focus {
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  background-color: #0066cc;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0052a3;
  }

  &:disabled {
    background-color: #b3b3b3;
    cursor: not-allowed;
  }
`;
