const CheckContainer = styled.div`
  position: relative;
  line-height: 0;
  font-size: 25px;

  & input[type="checkbox"],
  & label,
  & label::before,
  & label::after {
    appearance: none;
    display: inline-block;
    font-size: inherit;
    border-radius: 1em;
    border: 0;
    transition: .35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + label {
    background: transparent;
  }

  & label {
    width: 2.2em;
    height: 1em;
    background: #d7d7d7;
    overflow: hidden;
  }

  & input[type="checkbox"] {
    position: absolute;
    z-index: 1;
    width: .8em;
    height: .8em;
    top: .1em;
    left: .1em;
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    outline: none;
  }

  & input[type="checkbox"]:checked {
    left: 1.3em;
  }

  & label::before,
  & label::after {
    content: "· ·";
    position: absolute;
    overflow: hidden;
    left: .50em;
    top: .5em;
    height: 1em;
    letter-spacing: -.04em;
    color: #9b9b9b;
    font-family: "Times New Roman", serif;
    z-index: 2;
    font-size: .6em;
    border-radius: 0;
    transform-origin: 0 0 -.5em;
    backface-visibility: hidden;
  }

  & label::after {
    content: "?";
    top: .65em;
    left: .6em;
    height: .1em;
    width: .35em;
    font-size: .2em;
    transform-origin: 0 0 -.4em;
  }

  & input[type="checkbox"]:checked + label::before,
  & input[type="checkbox"]:checked + label::after {
    left: 2.55em;
    top: .4em;
    line-height: .1em;
    transform: rotateY(360deg);
  }

  & input[type="checkbox"]:checked + label::after {
    height: .16em;
    top: .55em;
    left: 2.6em;
    font-size: .6em;
    line-height: 0;
  }
`;

const props = {
  copyBtn:
    "const CheckContainer = styled.label`\n" +
    `  position: relative;
  line-height: 0;
  font-size: 25px;

  & input[type="checkbox"],
  & label,
  & label::before,
  & label::after {
    appearance: none;
    display: inline-block;
    font-size: inherit;
    border-radius: 1em;
    border: 0;
    transition: .35s ease-in-out;
    box-sizing: border-box;
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + label {
    background: transparent;
  }

  & label {
    width: 2.2em;
    height: 1em;
    background: #d7d7d7;
    overflow: hidden;
  }

  & input[type="checkbox"] {
    position: absolute;
    z-index: 1;
    width: .8em;
    height: .8em;
    top: .1em;
    left: .1em;
    background: linear-gradient(45deg, #dedede, #ffffff);
    box-shadow: 0 6px 7px rgba(0,0,0,0.3);
    outline: none;
  }

  & input[type="checkbox"]:checked {
    left: 1.3em;
  }

  & label::before,
  & label::after {
    content: "· ·";
    position: absolute;
    overflow: hidden;
    left: .50em;
    top: .5em;
    height: 1em;
    letter-spacing: -.04em;
    color: #9b9b9b;
    font-family: "Times New Roman", serif;
    z-index: 2;
    font-size: .6em;
    border-radius: 0;
    transform-origin: 0 0 -.5em;
    backface-visibility: hidden;
  }

  & label::after {
    content: "?";
    top: .65em;
    left: .6em;
    height: .1em;
    width: .35em;
    font-size: .2em;
    transform-origin: 0 0 -.4em;
  }

  & input[type="checkbox"]:checked + label::before,
  & input[type="checkbox"]:checked + label::after {
    left: 2.55em;
    top: .4em;
    line-height: .1em;
    transform: rotateY(360deg);
  }

  & input[type="checkbox"]:checked + label::after {
    height: .16em;
    top: .55em;
    left: 2.6em;
    font-size: .6em;
    line-height: 0;
  }` +
    "\n`;" +
    `\n return(
        <CheckContainer>
          <input id="check" type="checkbox" />
          <label htmlFor="check"></label>
        </CheckContainer>
  )`,
  component: (
    <CheckContainer>
      <input id="check" type="checkbox" />
      <label htmlFor="check"></label>
    </CheckContainer>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
