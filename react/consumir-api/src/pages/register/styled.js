import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input {
    height: 35px;
    font-size: 16px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
      transition: 0.2s;
    }
  }
`
