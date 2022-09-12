import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

export const UserMenu = () => {
  return (
    <Wrapper>
      <h2>Hello</h2>
      <button>Logout</button>
    </Wrapper>
  );
};
