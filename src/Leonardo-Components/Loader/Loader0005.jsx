const Loader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  content: '';
  background: #076fe5;
  width: 13.6px;
  height: 32px;
  animation: loading-keys-app-loading 1.2s infinite ease-in-out;
  @keyframes loading-keys-app-loading {
    0%, 100% {
      opacity: 0.75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40%, 80% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }
  &:nth-child(1) {
    left: -19.992px;
    animation-delay: 0.4s !important;
  }

  &:nth-child(2) {
    left: 0;
    animation-delay: 0.2s !important;
  }

  &:nth-child(3) {
    left: 19.992px;
    animation-delay: 0.6s !important;
  }
`;

const props = {
  copyBtn:
    "const Loader = styled.label`\n" +
    `  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;` +
    "`;" +
    "\nconst LoadingBar = styled.div`\n" +
    `  position: absolute;
  top: 0;
  content: '';
  background: #076fe5;
  width: 13.6px;
  height: 32px;
  animation: loading-keys-app-loading 1.2s infinite ease-in-out;
  @keyframes loading-keys-app-loading {
    0%, 100% {
      opacity: 0.75;
      box-shadow: 0 0 #076fe5;
      height: 32px;
    }

    40%, 80% {
      opacity: 1;
      box-shadow: 0 -8px #076fe5;
      height: 40px;
    }
  }
  &:nth-child(1) {
    left: -19.992px;
    animation-delay: 0.4s !important;
  }

  &:nth-child(2) {
    left: 0;
    animation-delay: 0.2s !important;
  }

  &:nth-child(3) {
    left: 19.992px;
    animation-delay: 0.6s !important;
  }` +
    "`;" +
    `\n return(
       <Loader>
        <LoadingBar className="jimu-primary-loading"></LoadingBar>
        <LoadingBar className="jimu-primary-loading"></LoadingBar>
        <LoadingBar className="jimu-primary-loading"></LoadingBar>
      </Loader>
  )`,
  component: (
    <Loader>
      <LoadingBar className="jimu-primary-loading"></LoadingBar>
      <LoadingBar className="jimu-primary-loading"></LoadingBar>
      <LoadingBar className="jimu-primary-loading"></LoadingBar>
    </Loader>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
