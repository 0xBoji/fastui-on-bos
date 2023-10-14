const ContainerBox = styled.div`
  position: relative;
  font-family: sans-serif;
`;

const Box = styled.div`
  width: 220px;
  height: 270px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  div strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  div p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  div span {
    font-size: 0.7rem;
    font-weight: 300;

    &:nth-child(3) {
      font-weight: 500;
      margin-right: 0.2rem;
    }
  }

  &:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }
`;
const props = {
  copyBtn:
    "const ContainerBox = styled.div`\n" +
    `      position: relative;
  font-family: sans-serif;
` +
    "\n`;" +
    "\nconst Box = styled.div`\n" +
    `      width: 220px;
  height: 270px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  div strong {
    display: block;
    margin-bottom: 0.5rem;
  }

  div p {
    margin: 0;
    font-size: 0.9em;
    font-weight: 300;
    letter-spacing: 0.1em;
  }

  div span {
    font-size: 0.7rem;
    font-weight: 300;

    &:nth-child(3) {
      font-weight: 500;
      margin-right: 0.2rem;
    }
  }

  &:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.454);
  }
` +
    "\n`;" +
    `\n return(
         <ContainerBox>
            <Box>
            <span className="title">GLASS EFFECT</span>
            <div>
                <strong>JOE WATSON SBF</strong>
                <p>0000 000 000 0000</p>
                <span>VALID</span> <span>01/28</span>
            </div>
            </Box>
        </ContainerBox>
  )`,
  component: (
    <ContainerBox>
      <Box>
        <span className="title">GLASS EFFECT</span>
        <div>
          <strong>JOE WATSON SBF</strong>
          <p>0000 000 000 0000</p>
          <span>VALID</span> <span>01/28</span>
        </div>
      </Box>
    </ContainerBox>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardLarge" props={props} />
  </>
);
