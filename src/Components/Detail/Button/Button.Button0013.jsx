const Button0013 = styled.button`
 /* Styling for the button in its default state */
  display: inline-block;
  position: relative;
  padding: 10px 25px;
  background-color: #4CC713;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 0.9em;
  text-align: center;
  text-indent: 15px;
  border: none;
  cursor: pointer;

  /* Styling for the button on hover */
  &:hover {
    background-color: #45a21a;
    color: white;

    /* Styling for the pseudo-elements before and after on hover */
    &:before {
      border-color: #cdefbd; // Change border color on hover
    }

    &:after {
      margin-top: 0; // Move the arrow downward on hover
      opacity: 0.4; // Reduce opacity of the arrow on hover
    }
  }

  /* Styling for the pseudo-elements before and after */
  &:before, &:after {
content: ' ';    display: block;
    position: absolute;
    left: 15px;
    top: 52%;
  }

  /* Styling for the arrow before the button text */
  &:before {
    width: 10px;
    height: 2px;
    border-style: solid;
    border-width: 0 2px 2px;
    transition: border-color 0.3s; // Smooth transition for border color
  }

  /* Styling for the arrow after the button text */
  &:after {
    width: 0;
    height: 0;
    margin-left: 1px;
    margin-top: -7px;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: transparent;
    border-top-color: inherit;
    transition: margin-top 0.3s, opacity 0.3s; // Smooth transitions for animation
  }`;

const props = {
  copyBtn:
    "const Button0013 = styled.button`\n" +
    ` /* Styling for the button in its default state */
  display: inline-block;
  position: relative;
  padding: 10px 25px;
  background-color: #4CC713;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 0.9em;
  text-align: center;
  text-indent: 15px;
  border: none;
  cursor: pointer;

  /* Styling for the button on hover */
  &:hover {
    background-color: #45a21a;
    color: white;

    /* Styling for the pseudo-elements before and after on hover */
    &:before {
      border-color: #cdefbd; // Change border color on hover
    }

    &:after {
      margin-top: 0; // Move the arrow downward on hover
      opacity: 0.4; // Reduce opacity of the arrow on hover
    }
  }

  /* Styling for the pseudo-elements before and after */
  &:before, &:after {` +
    "\ncontent: ' ';" +
    `    display: block;
    position: absolute;
    left: 15px;
    top: 52%;
  }

  /* Styling for the arrow before the button text */
  &:before {
    width: 10px;
    height: 2px;
    border-style: solid;
    border-width: 0 2px 2px;
    transition: border-color 0.3s; // Smooth transition for border color
  }

  /* Styling for the arrow after the button text */
  &:after {
    width: 0;
    height: 0;
    margin-left: 1px;
    margin-top: -7px;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: transparent;
    border-top-color: inherit;
    transition: margin-top 0.3s, opacity 0.3s; // Smooth transitions for animation
  }` +
    "`;" +
    `\n return(
        <Button0013>Download</Button0013>
        )`,
  component: <Button0013>Download</Button0013>,
  text:
    "const Button0013 = styled.button`\n" +
    ` /* Styling for the button in its default state */
  display: inline-block;
  position: relative;
  padding: 10px 25px;
  background-color: #4CC713;
  color: white;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 0.9em;
  text-align: center;
  text-indent: 15px;
  border: none;
  cursor: pointer;

  /* Styling for the button on hover */
  &:hover {
    background-color: #45a21a;
    color: white;

    /* Styling for the pseudo-elements before and after on hover */
    &:before {
      border-color: #cdefbd; // Change border color on hover
    }

    &:after {
      margin-top: 0; // Move the arrow downward on hover
      opacity: 0.4; // Reduce opacity of the arrow on hover
    }
  }

  /* Styling for the pseudo-elements before and after */
  &:before, &:after {` +
    "\ncontent: ' ';" +
    `    display: block;
    position: absolute;
    left: 15px;
    top: 52%;
  }

  /* Styling for the arrow before the button text */
  &:before {
    width: 10px;
    height: 2px;
    border-style: solid;
    border-width: 0 2px 2px;
    transition: border-color 0.3s; // Smooth transition for border color
  }

  /* Styling for the arrow after the button text */
  &:after {
    width: 0;
    height: 0;
    margin-left: 1px;
    margin-top: -7px;
    border-style: solid;
    border-width: 4px 4px 0 4px;
    border-color: transparent;
    border-top-color: inherit;
    transition: margin-top 0.3s, opacity 0.3s; // Smooth transitions for animation
  }` +
    "`;" +
    `\n return(
        <Button0013>Download</Button0013>
        )`,
};
return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardDetail" props={props} />
  </>
);
