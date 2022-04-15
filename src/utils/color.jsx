const color = (colorName, props) => {
  const { colorMode, theme } = props;
  return theme.colors.modes[colorMode][colorName];
};

export default color;