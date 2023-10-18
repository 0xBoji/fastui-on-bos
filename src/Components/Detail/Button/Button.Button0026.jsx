const Button0026 = styled.button`
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37FF8B;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);

  &:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }`;
const HoverText0026 = styled.span`
   position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: width 0.5s, filter 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);`;

const props = {
  copyBtn:
    "const Button0026 = styled.button`\n" +
    `  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37FF8B;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);

  &:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }` +
    "`;" +
    "\nconst HoverText0026 = styled.span`\n" +
    `   position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: width 0.5s, filter 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);` +
    "`;" +
    `\n return(
    <Button0026 data-text="Awesome">
      <span className="actual-text">&nbsp;Button0026&nbsp;</span>
      <HoverText0026 className="hover-text" aria-hidden="true">
        &nbsp;Button0026&nbsp;
      </HoverText0026>
    </Button0026>
  )`,
  component: (
    <Button0026 data-text="Awesome">
      <span className="actual-text">&nbsp;Button0026&nbsp;</span>
      <HoverText0026 className="hover-text" aria-hidden="true">
        &nbsp;Button0026&nbsp;
      </HoverText0026>
    </Button0026>
  ),
  text:
    "const Button0026 = styled.button`\n" +
    `  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37FF8B;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);

  &:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }` +
    "`;" +
    "\nconst HoverText0026 = styled.span`\n" +
    `   position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: width 0.5s, filter 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);` +
    "`;" +
    `\n\n return(
    <Button0026 data-text="Awesome">
      <span className="actual-text">&nbsp;Button0026&nbsp;</span>
      <HoverText0026 className="hover-text" aria-hidden="true">
        &nbsp;Button0026&nbsp;
      </HoverText0026>
    </Button0026>
  )`,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardDetail" props={props} />
  </>
);
