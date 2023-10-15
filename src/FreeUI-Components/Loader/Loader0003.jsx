const Spinner = styled.div`
  --size: 30px;
  --first-block-clr: #005bba;
  --second-block-clr: #fed500;
  --clr: #111;
  width: 100px;
  height: 100px;
  position: relative;

  &::after,
  &::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    top: 50%;
    left: 50%;
    background: var(--first-block-clr);
  }

  &::before {
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  &::after {
    background: var(--second-block-clr);
    top: calc(50% - var(--size));
    left: calc(50% - var(--size));
    animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes down {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(100%) translateY(100%);
    }
    75% {
      transform: translateY(100%);
    }
  }

  @keyframes up {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-100%) translateY(-100%);
    }
    75% {
      transform: translateY(-100%);
    }
  }
`;

const props = {
  copyBtn:
    "const Spinner = styled.div`\n" +
    `  --size: 30px;
  --first-block-clr: #005bba;
  --second-block-clr: #fed500;
  --clr: #111;
  width: 100px;
  height: 100px;
  position: relative;

  &::after,
  &::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    top: 50%;
    left: 50%;
    background: var(--first-block-clr);
  }

  &::before {
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  &::after {
    background: var(--second-block-clr);
    top: calc(50% - var(--size));
    left: calc(50% - var(--size));
    animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes down {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(100%) translateY(100%);
    }
    75% {
      transform: translateY(100%);
    }
  }

  @keyframes up {
    0%, 100% {
      transform: none;
    }
    25% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-100%) translateY(-100%);
    }
    75% {
      transform: translateY(-100%);
    }
  }` +
    "`;" +
    `\n return(
<Spinner class="spinner"></Spinner>
  )`,
  component: <Spinner class="spinner"></Spinner>,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
