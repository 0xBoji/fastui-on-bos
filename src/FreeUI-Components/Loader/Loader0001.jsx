const Loader = styled.div`
  --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;
  
  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }
  
    20%, 25% {
      transform: scale(1.3) rotate(90deg);
    }
  
    45%, 50% {
      transform: scale(1) rotate(180deg);
    }
  
    70%, 75% {
      transform: scale(1.3) rotate(270deg);
    }
  
    95%, 100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;

const Circle = styled.div`
  --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;
`;

const props = {
  copyBtn:
    "const Loader = styled.div`\n" +
    ` --dim: 3rem;
  width: var(--dim);
  height: var(--dim);
  position: relative;
  animation: spin988 2s linear infinite;
  
  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }
  
    20%, 25% {
      transform: scale(1.3) rotate(90deg);
    }
  
    45%, 50% {
      transform: scale(1) rotate(180deg);
    }
  
    70%, 75% {
      transform: scale(1.3) rotate(270deg);
    }
  
    95%, 100% {
      transform: scale(1) rotate(360deg);
    }
  }` +
    "`;" +
    "\nconst Circle = styled.div`\n" +
    `   --color: #333;
  --dim: 1.2rem;
  width: var(--dim);
  height: var(--dim);
  background-color: var(--color);
  border-radius: 50%;
  position: absolute;` +
    "`;" +
    `\n return(
      <Loader>
                <Circle style={{ top: 0, left: 0 }} />
                <Circle style={{ top: 0, right: 0 }} />
                <Circle style={{ bottom: 0, left: 0 }} />
                <Circle style={{ bottom: 0, right: 0 }} />
      </Loader>
  )`,
  component: (
    <Loader>
      <Circle style={{ top: 0, left: 0 }} />
      <Circle style={{ top: 0, right: 0 }} />
      <Circle style={{ bottom: 0, left: 0 }} />
      <Circle style={{ bottom: 0, right: 0 }} />
    </Loader>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
