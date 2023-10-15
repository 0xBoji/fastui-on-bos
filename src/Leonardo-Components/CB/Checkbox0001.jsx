const Container = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const Svg = styled.svg`
  overflow: visible;
`;

const Path = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241;
  stroke-dashoffset: ${({ isChecked }) => (isChecked ? "-262.27" : "0")};
`;

const [isChecked, setIsChecked] = useState(false);

const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
};

const props = {
  copyBtn:
    "const Container = styled.label`\n" +
    `  cursor: pointer;` +
    "`;" +
    "const Input = styled.input`\n" +
    `  display: none;` +
    "`;" +
    "const Svg = styled.svg`\n" +
    `  overflow: visible;` +
    "`;" +
    "const Path = styled.path`\n" +
    `  fill: none;
  stroke: black;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241;` +
    " stroke-dashoffset: ${({ isChecked })" +
    `=> (isChecked ? "-262.27" : "0")};` +
    "`;" +
    `const [isChecked, setIsChecked] = useState(false);
     const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };` +
    `\n return(
      <Container className="container">
        <Input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <Svg viewBox="0 0 64 64" height="2em" width="2em">
          <Path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            isChecked={isChecked}
          />
        </Svg>
      </Container>
  )`,
  component: (
    <Container className="container">
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Svg viewBox="0 0 64 64" height="2em" width="2em">
        <Path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
          isChecked={isChecked}
        />
      </Svg>
    </Container>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
