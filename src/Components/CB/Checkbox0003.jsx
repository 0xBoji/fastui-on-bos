const CheckboxBtn = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;

  /* Customize the label (the checkbox-btn) */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  label {
    cursor: pointer;
    font-size: 14px;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2.5px solid #ffffff;
    transition: 0.2s linear;

    /* Create the checkmark/indicator (hidden when not checked) */
    &::after {
      content: "";
      position: absolute;
      visibility: hidden;
      opacity: 0;
      left: 50%;
      top: 40%;
      width: 10px;
      height: 14px;
      border: 2px solid #0ea021;
      filter: drop-shadow(0px 0px 10px #0ea021);
      border-width: 0 2.5px 2.5px 0;
      transition: 0.2s linear;
      transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
    }
  }

  /* Show the checkmark when checked */
  input:checked + .checkmark::after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: pulse 1s ease-in;
  }

  input:checked + .checkmark {
    transform: rotate(45deg);
    border: none;
  }

  /* Define the keyframes animation */
  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
  }
`;

const props = {
  copyBtn:
    "const CheckboxBtn = styled.label`\n" +
    `  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;

  /* Customize the label (the checkbox-btn) */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  label {
    cursor: pointer;
    font-size: 14px;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 2.5px solid #ffffff;
    transition: 0.2s linear;

    /* Create the checkmark/indicator (hidden when not checked) */
    &::after {
      content: "";
      position: absolute;
      visibility: hidden;
      opacity: 0;
      left: 50%;
      top: 40%;
      width: 10px;
      height: 14px;
      border: 2px solid #0ea021;
      filter: drop-shadow(0px 0px 10px #0ea021);
      border-width: 0 2.5px 2.5px 0;
      transition: 0.2s linear;
      transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
    }
  }

  /* Show the checkmark when checked */
  input:checked + .checkmark::after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: pulse 1s ease-in;
  }

  input:checked + .checkmark {
    transform: rotate(45deg);
    border: none;
  }

  /* Define the keyframes animation */
  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
  }` +
    "`;" +
    `\n return(
      <CheckboxBtn>
        <label htmlFor="checkbox"></label>
        <input id="checkbox" type="checkbox" />
        <span className="checkmark"></span>
      </CheckboxBtn>
  )`,
  component: (
    <CheckboxBtn>
      <label htmlFor="checkbox"></label>
      <input id="checkbox" type="checkbox" />
      <span className="checkmark"></span>
    </CheckboxBtn>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
