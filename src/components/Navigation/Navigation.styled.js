import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNavLink = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};

  text-decoration: none;
  transition: border-bottom-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-bottom-color: ${p => p.theme.colors.accentPink};
  }

  &.active {
    border-bottom-color: ${p => p.theme.colors.accentPink};
  }
`;
