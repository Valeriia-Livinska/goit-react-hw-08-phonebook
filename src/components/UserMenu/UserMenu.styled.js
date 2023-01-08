import styled from 'styled-components';

export const LogoutBtn = styled.button`
  padding: 6px;

  color: ${p => p.theme.colors.text};
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.bold};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};

  background-color: transparent;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.textColorized};
  }
`;
