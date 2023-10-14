const CardMain = styled.div`
  position: relative;
  width: 220px;
  height: 270px;
  background: mediumturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: lightblue;
    transition: all 0.5s;
  }

  &:before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  &:after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  &:hover:after {
    content: "HELLO";
  }
`;

const props = {
  copyBtn:
    "const CardMain = styled.div`\n" +
    `  position: relative;
  width: 220px;
  height: 270px;
  background: mediumturquoise;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: lightblue;
    transition: all 0.5s;
  }

  &:before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  &:after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  &:hover:after {
    content: "HELLO";
  }
` +
    "\n`;" +
    `\n return(
    <CardMain>HOVER</CardMain>
  )`,
  component: <CardMain>HOVER</CardMain>,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardLarge" props={props} />
  </>
);
