const accountId = props.accountId ?? context.accountId;

const url = "https://test.near.org";

const width = "35px";
const height = "35px";

const GradientText = styled.h4`
  font-weight: 800;
  margin: 0 0 0 20px;
  color: linear-gradient(to right, rgb(255, 217, 0), rgb(255, 217, 0), rgb(255, 217, 0) 10%, rgb(230, 54, 97), rgb(157, 0, 253), rgb(230, 54, 97), rgb(255, 217, 0) 90%, rgb(255, 217, 0), rgb(255, 217, 0));
  display: inline;
`;

const HeaderBtn = styled.button`
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: black;
  width: 7em;
  height: 2.5em;
  line-height: 2em;
  text-align: center;
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  display: inline;
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);


  display: inline;
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }

  &:active {
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  display: inline;
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }
`;

const AcountID = styled.p`
  height:35px;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: black;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  display: inline;
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  cursor: pointer;

  &:hover {
    animation: ani 8s linear infinite;
    border: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  display: inline;
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }

  &:active {
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

  display: inline;
  }

  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }
`;

const Wrapper = styled.div`
  background-color: #FFFFFF;
`;

const Svg = styled.svg`
  font-family: 'Russo One', sans-serif;
  width: 100%;
  height: 100%;
`;

const SvgText = styled.text`
  animation: stroke 4s infinite alternate;
  stroke-width: 1;
  stroke: #1150ed;
  font-size: 20px;
  
  @keyframes stroke {
    0% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba (255, 132, 8, 1);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 1;
    }
    70% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba (255, 132, 8, 1);
    }
    80% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba (255, 132, 8, 1);
      stroke-width: 2;
    }
    100% {
      fill: rgba (255, 84, 0, 1);
      stroke: rgba (255, 132, 8, 1);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
`;

if (!accountId) {
  return "Please sign in with NEAR wallet to save this UI";
}

return (
  <div className="mw-120 d-flex justify-content-between align-items-center p-2 border-bottom">
    <Wrapper>
      <Svg>
        <SvgText x="60%" y="50%" dy=".35em" text-anchor="middle">
          <a href={`${url}/freeui.testnet/widget/Index`}>Fast UI</a>{" "}
        </SvgText>
      </Svg>
    </Wrapper>

    <div className="w-25 mw-100 d-flex justify-content-end align-items-center">
      <a className="mx-2 text-dark fs-6" href="#">
        <HeaderBtn>About</HeaderBtn>
      </a>

      <a className="mx-2 text-dark fs-6" href="#">
        <HeaderBtn>Docs</HeaderBtn>
      </a>
      <a className="mx-2 text-dark fs-6" href="#">
        <AcountID>
          <span>{accountId}</span>
        </AcountID>
      </a>
    </div>
  </div>
);
