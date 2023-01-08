import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: ${p => p.theme.space[4]}px;
  
  width: 100%;

  border-bottom: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
`;
