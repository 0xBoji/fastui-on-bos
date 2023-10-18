const Button0016 = styled.button`
  width: 150px;
  height: 60px;
  border: 3px solid #315cfd;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 550;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }`;

const props = {
  copyBtn:
    "const Button0016 = styled.button`\n" +
    `  width: 150px;
  height: 60px;
  border: 3px solid #315cfd;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 550;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }` +
    "`;" +
    `\n return(
        <Button0016>Button 0016</Button0016>
        )`,
  component: <Button0016>Button 0016</Button0016>,
  text:
    "const Button0016 = styled.button`\n" +
    `  width: 150px;
  height: 60px;
  border: 3px solid #315cfd;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 550;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: #315cfd;
    color: white;
    font-size: 1.5em;
  }` +
    "`;" +
    `\n return(
        <Button0016>Button 0016</Button0016>
        )`,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardDetail" props={props} />
  </>
);
