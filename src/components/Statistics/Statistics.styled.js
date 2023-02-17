import styled from '@emotion/styled';
export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 20px;
`;
