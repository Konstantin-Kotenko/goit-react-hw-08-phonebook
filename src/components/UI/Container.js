import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  align-items: center;
  width: 1440px;
  border-radius: ${({ theme }) => theme.radii.normal};
  /* background-image: url(../../assets/background); */
`;
