import styled from 'styled-components';

const color = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#F4F4F4',
  darkGray: '#222222',
  blue: '#2196F3',
  lightBlue: '#E3F2FD',
  green: '#4CAF50',
  lightGreen: '#E8F5E9',
  red: '#F44336',
  lightRed: '#FFEBEE',
};

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: ${color.white};
  margin: 10% auto;
  padding: 20px;
  border: 1px solid ${color.gray};
  width: 60%;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${color.darkGray};
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: ${color.darkGray};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  color: ${color.darkGray};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${color.gray};
  background-color: ${color.white};
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${color.blue};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${color.green};
  color: ${color.white};

  &:hover {
    background-color: ${color.lightGreen};
  }
`;

export const CloseButton = styled(Button)`
  background-color: ${color.red};
  color: ${color.white};

  &:hover {
    background-color: ${color.lightRed};
  }
`;
