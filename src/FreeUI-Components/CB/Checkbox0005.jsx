const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  update
  & svg {
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: all 0.3s;
    fill: #666;

    &:hover {
      transform: scale(1.1);
    }
  }

  & input:checked ~ svg {
    fill: #E3474F;
  }
`;

const props = {
  copyBtn:
    "const Container = styled.label`\n" +
    `    display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & svg {
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: all 0.3s;
    fill: #666;

    &:hover {
      transform: scale(1.1);
    }
  }

  & input:checked ~ svg {
    fill: #E3474F;
  }` +
    "\n`;" +
    `\n return(
        <Container>
            <input type="checkbox" />
            <svg
            id="Layer_1"
            version="1.0"
            viewBox="0 0 24 24"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            >
            <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
            </svg>
        </Container>
  )`,
  component: (
    <Container>
      <input type="checkbox" />
      <svg
        id="Layer_1"
        version="1.0"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
      </svg>
    </Container>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
