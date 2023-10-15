const ToggleContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + span {
    background-color: #4caf50;
  }

  &:checked + span::before {
    transform: translateX(30px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s;
  }
`;

const [isChecked, setIsChecked] = useState(false);

const toggleSwitch = () => {
  setIsChecked(!isChecked);
};

const props = {
  copyBtn:
    "const ToggleContainer = styled.label`\n" +
    `  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;` +
    "\n`;" +
    "const ToggleInput = styled.input`\n" +
    `  display: none;

  &:checked + span {
    background-color: #4caf50;
  }

  &:checked + span::before {
    transform: translateX(30px);
  }` +
    "\n`;" +
    "const ToggleSlider = styled.span`\n" +
    `  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
  }` +
    "\n`;" +
    `\n return(
       <ToggleContainer>
        <ToggleInput type="checkbox" checked={isChecked} onChange={toggleSwitch} />
        <ToggleSlider />
    </ToggleContainer>
  )`,
  component: (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <ToggleSlider />
    </ToggleContainer>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
