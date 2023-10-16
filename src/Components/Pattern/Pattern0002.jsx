const Container = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 96%;
  background-color: #e5e5f7;
  background-image: radial-gradient(#444cf7 10%, transparent 10%),
                    radial-gradient(#444cf7 10%, transparent 10%);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color:black;
`;
const props = {
  copyBtn:
    "const Container = styled.div`\n" +
    `   border-radius: 20px;
  width: 100%;
  height: 96%;
  background-color: #e5e5f7;
  background-image: radial-gradient(#444cf7 10%, transparent 10%),
                    radial-gradient(#444cf7 10%, transparent 10%);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
` +
    "\n`;" +
    "const Text = styled.p`\n" +
    `  color: black;
` +
    "\n`;" +
    `\n return(
         <Container>
      {" "}
      <Text>Add some text or content here to test!</Text>
    </Container>  )`,
  component: (
    <Container>
      {" "}
      <Text>Add some text or content here to test!</Text>
    </Container>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardPattern" props={props} />
  </>
);
