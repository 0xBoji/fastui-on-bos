let here = prop.here || ``;
const props = {
  copyBtn: `
  const props ={
    padding: "0.6em 2em",
    fontsize: "0.5em",
    text:"Button0001"
  };
  <Widget src="marketplacebos.near/widget/CB.CBP.Checkbox0001" props={props}/>`,
  component: (
    <Widget src="marketplacebos.near/widget/CB.CBP.CB0001" props={props} />
  ),
  text: `  const props ={
    padding: "0.6em 2em",
    fontsize: "0.5em",
    text:"Button0001"
  };
  return(
<Widget src="marketplacebos.near/widget/Button.ButtonP.Button0001" props={props}/>
    );
  `,
};
return (
  <>
    <Widget
      src="marketplacebos.near/widget/CardMain.CardDetail"
      props={props}
    />
  </>
);
