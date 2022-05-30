const Float = ({
  children,
  float = "right",
  margin = 5,
  width = 35,
  border = false,
  borderColor = "red",
}) => {
  const styles = {
    float: float,
    margin: `${margin}px`,
    width: `${width}%`,
    border: border ? `solid thin ${borderColor}` : "none",
  };
  return <div style={styles}>{children}</div>;
};

export default Float;
