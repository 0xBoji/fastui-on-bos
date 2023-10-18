const Button0027 = styled.button`
 background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }

  &:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
`;

const props = {
  copyBtn:
    "const Button0027 = styled.button`\n" +
    ` background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }

  &:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
` +
    "`;" +
    `\n return(
      <Button0027>Button 0027</Button0027>
  )`,
  component: <Button0027>Button 0027</Button0027>,
  text:
    "const Button0027 = styled.button`\n" +
    ` background-color: white;
  color: black;
  border-radius: 10em;
  font-size: 17px;
  font-weight: 600;
  padding: 1em 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid black;
  box-shadow: 0 0 0 0 black;

  &:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }

  &:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
` +
    "`;" +
    `\n return(
      <Button0027>Button 0027</Button0027>
  )`,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardDetail" props={props} />
  </>
);
