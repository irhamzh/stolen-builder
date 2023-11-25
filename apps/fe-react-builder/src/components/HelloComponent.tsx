const HelloComponent = (props: { word: string }) => {
  const { word } = props;
  return <span> HELLO {word} </span>;
};

export default HelloComponent;
