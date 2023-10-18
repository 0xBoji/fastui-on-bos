const Button0023 = styled.button`
  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: rgb(161, 255, 20);
  border-radius: 30px;
  color: rgb(19, 19, 19);
  font-weight: 600;
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
  padding-left: 8px;

  &:hover {
    background-color: rgb(192, 255, 20);
    transition-duration: 0.5s;
  }

  &:active {
    transform: scale(0.97);
    transition-duration: 0.2s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  path {
    fill: rgb(19, 19, 19);
  }

  &:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }
`;

const props = {
  copyBtn:
    "const Button0023 = styled.button`\n" +
    `  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: rgb(161, 255, 20);
  border-radius: 30px;
  color: rgb(19, 19, 19);
  font-weight: 600;
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
  padding-left: 8px;

  &:hover {
    background-color: rgb(192, 255, 20);
    transition-duration: 0.5s;
  }

  &:active {
    transform: scale(0.97);
    transition-duration: 0.2s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  path {
    fill: rgb(19, 19, 19);
  }

  &:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }
` +
    "`;" +
    `\n return(
         <Button0023>
          <svg
            className="svgIcon"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore
        </Button0023>
              )`,
  component: (
    <Button0023>
      <svg
        className="svgIcon"
        viewBox="0 0 512 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
      </svg>
      Explore
    </Button0023>
  ),
  text:
    "const Button0023 = styled.button`\n" +
    `  width: 110px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background-color: rgb(161, 255, 20);
  border-radius: 30px;
  color: rgb(19, 19, 19);
  font-weight: 600;
  border: none;
  position: relative;
  cursor: pointer;
  transition-duration: 0.2s;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
  padding-left: 8px;

  &:hover {
    background-color: rgb(192, 255, 20);
    transition-duration: 0.5s;
  }

  &:active {
    transform: scale(0.97);
    transition-duration: 0.2s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
  }

  path {
    fill: rgb(19, 19, 19);
  }

  &:hover .svgIcon {
    transform: rotate(250deg);
    transition-duration: 1.5s;
  }
` +
    "`;" +
    `\n return(
         <Button0023>
          <svg
            className="svgIcon"
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
          </svg>
          Explore
        </Button0023>      
        )`,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardDetail" props={props} />
  </>
);
