import styled from 'styled-components/native';

/**
 * Icon Styled Components
 */
export const IconContainer = styled.View``;

export const IconImage = styled.Image<{
  iconSize?: number;
}>`
  width: ${props => (props.iconSize ? props.iconSize : 20)}px;
  height: ${props => (props.iconSize ? props.iconSize : 20)}px;
`;
