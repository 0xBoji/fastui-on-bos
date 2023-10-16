const Container = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 96%;
  --color1: rgb(108, 231, 221);
  --color2: rgb(250, 255, 178);
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
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
  height: 100%;
  --color1: rgb(108, 231, 221);
  --color2: rgb(250, 255, 178);
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
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
