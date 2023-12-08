const HelloComponent = (props: { word: string }) => {
  const { word } = props;
  return <h4> HELLO {word} </h4>;
};

export default HelloComponent;
