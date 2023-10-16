const Button0025 = styled.button`
  border: 2px solid #24b4fb;
  background-color: #24b4fb;
  border-radius: 0.9em;
  padding: 0.8em 1.2em 0.8em 1em;
  transition: all ease-in-out 0.2s;
  font-size: 16px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    background-color: #0071e2;
  }
`;
const props = {
  copyBtn:
    "const Button0025 = styled.button`\n" +
    `  border: 2px solid #24b4fb;
  background-color: #24b4fb;
  border-radius: 0.9em;
  padding: 0.8em 1.2em 0.8em 1em;
  transition: all ease-in-out 0.2s;
  font-size: 16px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
  }

  &:hover {
    background-color: #0071e2;
  }
` +
    "`;" +
    `\n return(
        <Button0025>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
              ></path>
            </svg>
            Create
          </span>
        </Button0025>
              )`,
  component: (
    <Button0025>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
          ></path>
        </svg>
        Create
      </span>
    </Button0025>
  ),
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
