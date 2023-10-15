const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoaderSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff; /* Change color as needed */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite; /* Using @keyframes defined below */
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoaderText = styled.p`
  margin-top: 16px;
`;

const props = {
  copyBtn:
    "const LoaderWrapper = styled.div`\n" +
    `  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;` +
    "`;" +
    "\nconst LoaderSpinner = styled.div`\n" +
    `  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff; /* Change color as needed */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  UpdateComponents
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }` +
    "`;" +
    "\nconst LoaderText = styled.p`\n" +
    `  margin-top: 16px;` +
    "`;" +
    `\n return(
        <LoaderWrapper>
            <LoaderSpinner />
            <LoaderText>Loading...</LoaderText>
        </LoaderWrapper>
  )`,
  component: (
    <LoaderWrapper>
      <LoaderSpinner />
      <LoaderText>Loading...</LoaderText>
    </LoaderWrapper>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
