const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 200px; 
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #ccc; 
  font-weight: 500; 
  cursor: not-allowed; 
  opacity: 0.7; 

`;

const Input = styled.input`
  height: 2.5rem; 
  width: 100%;
  border: 1px solid #ccc; 
  border-radius: 0.375rem;
  background-color: #fff; 
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #666; 
  font-weight: 500;
  outline: none; 
  transition: background-color 0.7s ease-in-out;

  &:hover{
    color:red;
    background: black;
  }
`;

const props = {
  copyBtn:
    "const Grid = styled.div`\n" +
    `  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 200px; 
  align-items: center;` +
    "`;" +
    "\nconst Label = styled.div`\n" +
    `  font-size: 0.875rem;
  color: #ccc; 
  font-weight: 500; 
  cursor: not-allowed; 
  opacity: 0.7; ` +
    "`;" +
    "\nconst Input = styled.input`\n" +
    `  height: 2.5rem; 
  width: 100%;
  border: 1px solid #ccc; 
  border-radius: 0.375rem;
  background-color: #fff; 
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #666; 
  font-weight: 500;
  outline: none; 
  transition: background-color 0.7s ease-in-out;
  &:hover{
    color:red;
    background: black;
  }` +
    "`;" +
    `\n return(
        <Grid>
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
        </Grid>  
    )`,
  component: (
    <Grid>
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </Grid>
  ),
};

return (
  <>
    <Widget src="freeui.testnet/widget/CardMain.CardMini" props={props} />
  </>
);
