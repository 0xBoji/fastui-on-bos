const Spinner = styled.div`
  position: absolute;
  width: 9px;
  height: 9px;
`;

const SpinnerDiv = styled.div`
  position: absolute;
  width: 50%;
  height: 150%;
  background: #000000;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
  @keyframes spinner-fzua35 {0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
  }
  &:nth-child(1) {
    --delay: 0.1;
    --rotation: 36;
    --translation: 150;
  }

  &:nth-child(2) {
    --delay: 0.2;
    --rotation: 72;
    --translation: 150;
  }

  &:nth-child(3) {
    --delay: 0.3;
    --rotation: 108;
    --translation: 150;
  }

  &:nth-child(4) {
    --delay: 0.4;
    --rotation: 144;
    --translation: 150;
  }

  &:nth-child(5) {
    --delay: 0.5;
    --rotation: 180;
    --translation: 150;
  }

  &:nth-child(6) {
    --delay: 0.6;
    --rotation: 216;
    --translation: 150;
  }

  &:nth-child(7) {
    --delay: 0.7;
    --rotation: 252;
    --translation: 150;
  }

  &:nth-child(8) {
    --delay: 0.8;
    --rotation: 288;
    --translation: 150;
  }

  &:nth-child(9) {
    --delay: 0.9;
    --rotation: 324;
    --translation: 150;
  }

  &:nth-child(10) {
    --delay: 1;
    --rotation: 360;
    --translation: 150;
  }
`;

const props = {
  copyBtn:
    "const Spinner = styled.div`\n" +
    `    position: absolute;
  width: 9px;
  height: 9px;` +
    "`;" +
    "\nconst SpinnerDiv = styled.div`\n" +
    `    position: absolute;
  width: 50%;
  height: 150%;
  background: #000000;
  transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
  @keyframes spinner-fzua35 {0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
  }

  50% {
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
  }
  }
  &:nth-child(1) {
    --delay: 0.1;
    --rotation: 36;
    --translation: 150;
  }

  &:nth-child(2) {
    --delay: 0.2;
    --rotation: 72;
    --translation: 150;
  }

  &:nth-child(3) {
    --delay: 0.3;
    --rotation: 108;
    --translation: 150;
  }

  &:nth-child(4) {
    --delay: 0.4;
    --rotation: 144;
    --translation: 150;
  }

  &:nth-child(5) {
    --delay: 0.5;
    --rotation: 180;
    --translation: 150;
  }

  &:nth-child(6) {
    --delay: 0.6;
    --rotation: 216;
    --translation: 150;
  }

  &:nth-child(7) {
    --delay: 0.7;
    --rotation: 252;
    --translation: 150;
  }

  &:nth-child(8) {
    --delay: 0.8;
    --rotation: 288;
    --translation: 150;
  }

  &:nth-child(9) {
    --delay: 0.9;
    --rotation: 324;
    --translation: 150;
  }

  &:nth-child(10) {
    --delay: 1;
    --rotation: 360;
    --translation: 150;
  }` +
    "`;" +
    `\n return(
       <Spinner>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
        <SpinnerDiv></SpinnerDiv>
      </Spinner>
  )`,
  component: (
    <Spinner>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
      <SpinnerDiv></SpinnerDiv>
    </Spinner>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);