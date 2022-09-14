import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: ${({ theme }) => theme.space.ml};
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  font-weight: 500;
`;
