import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
