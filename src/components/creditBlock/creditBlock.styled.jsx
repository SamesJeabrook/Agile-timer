import styled from 'styled-components';

export const CreditBlock = styled.div`
  position: fixed;
  bottom: 5px;
  left: 5px;
  font-size: 0.75em;
  color: rgba(251,251,251,0.7);
  transition: 0.5s;

  &:hover{
    color: rgba(251,251,251,1);
  }
`;

export const CreditBlockLink = styled.a`
  color: inherit;
  text-decoration: none;
`