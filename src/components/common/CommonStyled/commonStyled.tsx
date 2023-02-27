import styled from 'styled-components/native';

/**
 * [ Common ] : 공통 사용 Styled Components
 */
export const Container = styled.View<{ padding?: boolean }>`
  flex: 1;
  padding: ${props => (props.padding ? 20 : 0)}px;
`;

export const ScrollContainer = styled.ScrollView<{ padding?: boolean }>`
  flex: 1;
  padding: ${props => (props.padding ? 20 : 0)}px;
`;

export const Row = styled.View<{
  withPaddingBottom?: boolean;
  center?: boolean;
}>`
  flex-direction: row;
  align-items: ${props => (props.center ? 'center' : 'flex-start')};
  padding-bottom: ${props => (props.withPaddingBottom ? 5 : 0)}px;
`;

export const SpaceBetweenRow = styled(Row)`
  justify-content: space-between;
`;
