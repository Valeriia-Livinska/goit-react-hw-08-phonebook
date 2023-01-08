import styled from 'styled-components';

export const LabelReg = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputReg = styled.input`
  height: ${p => p.theme.space[5]}px;
  width: 200px;

  border: ${p => p.theme.borders.medium} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.medium} ${p => p.theme.colors.accentBlue};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;

