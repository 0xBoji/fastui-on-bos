const Card1 = styled.div`
  width: 220px;
  height: 270px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }
`;

const Card2 = styled.div`
  width: 220px;
  height: 270px;
  background-color: #1a1a1a;
  transition: all 0.2s;
  border-radius: 20px;

  ${Card1}:hover & {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

const props = {
  copyBtn:
 "const Card1 = styled.div`\n" +
    `   width: 220px;
  height: 270px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }
` +
    "\n`;" +
    "\nconst Card2 = styled.div`\n" +
    `   width: 220px;
  height: 270px;
  background-color: #1a1a1a;
  transition: all 0.2s;
  border-radius: 20px;

  ${Card1}:hover & {
    transform: scale(0.98);
    border-radius: 20px;
  }
` +
    "\n`;" +
    `\n return(
    <Card1>
        <Card2></Card2>
    </Card1>
  )`,
  component: (
    <Card1>
        <Card2></Card2>
    </Card1>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardLarge" props={props} />
  </>
);
