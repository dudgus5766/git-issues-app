import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
} from 'react-native';
import { COLORS } from '../../../constants/Colors';

export type TextProps = DefaultText['props'] & {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
};
export type ViewProps = DefaultView['props'] & {
  backgroundColor?: string;
  borderColor?: string;
};
export type SearchBarProps = DefaultView['props'] & { isFocused: boolean };
export type TextInputProps = DefaultTextInput['props'] & {
  color?: string;
  placeholderTextColor?: string;
};

export function Text(props: TextProps) {
  const {
    style,
    color = COLORS.MAIN_BLACK,
    fontSize = 15,
    ...otherProps
  } = props;

  return <DefaultText style={[{ color, fontSize }, style]} {...otherProps} />;
}

export function SubText(props: TextProps) {
  const {
    style,
    color = COLORS.SUB_GREY_01,
    fontSize = 13,
    ...otherProps
  } = props;

  return <DefaultText style={[{ color, fontSize }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const {
    style,
    backgroundColor = COLORS.MAIN_WHITE,
    borderColor,
    ...otherProps
  } = props;

  return (
    <DefaultView
      style={[{ backgroundColor, borderColor }, style]}
      {...otherProps}
    />
  );
}

export function ViewWithBottomBorder(props: ViewProps) {
  const { style, ...otherProps } = props;

  return (
    <DefaultView
      style={[
        { borderBottomWidth: 1, borderBottomColor: COLORS.SUB_GREY_02 },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function TextInput(props: TextInputProps) {
  const { style, color, placeholderTextColor, ...otherProps } = props;

  return (
    <DefaultTextInput
      style={[{ color }, style]}
      placeholderTextColor={placeholderTextColor}
      {...otherProps}
    />
  );
}

export function SearchBar(props: SearchBarProps) {
  const { style, isFocused, ...otherProps } = props;

  return (
    <DefaultView
      style={[
        {
          backgroundColor: COLORS.MAIN_WHITE,
          borderColor: isFocused ? COLORS.MAIN_BLUE : COLORS.SUB_GREY_02,
          borderWidth: isFocused ? 1.5 : 1,
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
