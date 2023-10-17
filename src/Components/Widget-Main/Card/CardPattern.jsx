const CenteredCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Card = styled.div`
  padding: 30px;
  background: black;
  width: 780px;
  height: 610px;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid rgba(0, 0, 0, 0.3);
  border-radius: 1em;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  transition: background 500ms;
`;

const CardBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFooter = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonCopy = styled.button`
  width: 100px;
  height: 35px;
  display: flex;
  align-items: center;
  background-color: #0a1929ff;
  color: white;
  border-radius: 2em;
  padding: 0.5rem;
  position: absolute; 
  bottom: 10px;
  right: 10px;

  &:hover .text {
    background-color: #0a1929ff;
  }

  &:hover .svgIcon {
    background-color: #0a1929ff;
  }

`;

const TextCopy = styled.span`
  margin-left:10px;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0a1929ff;
`;

const [isToggleSave1, setIsToggleSave1] = useState(false);
const toggleSaveButton1 = () => {
  setIsToggleSave1((prevState) => !prevState); // Toggle the save button state
};

const SaveButton = styled.button`
  width: 2.3rem;
  height: 30px;
  background-color: ${(props) => (props.isToggled ? "#f79a55" : "#0a1929ff")};
  border: none;
  border-radius: 24px;
  cursor: pointer;
  position: absolute;
  bottom: 10px; /* Adjust the vertical position */
  left: 10px; /* Adjust the horizontal position */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: background-color 300ms;
`;

const SaveIcon = (
  <i
    className={
      isToggleSave1 ? "bi bi-bookmark-heart-fill" : "bi bi-bookmark-heart"
    }
  ></i>
);

let copyBtn = props.copyBtn || "Copy Button";
props.copyBtn || <></>;
let component = props.component || <> </>;
let save = props.save || <> </>;

return (
  <Card>
    <CardBody>
      {component}
      <SaveButton onClick={toggleSaveButton1} isToggled={isToggleSave1}>
        {SaveIcon}
        {save}
      </SaveButton>
      <ButtonCopy
        placement="auto"
        overlay={
          <Tooltip>{state.copied ? "Copied!" : "Copy to clipboard"}</Tooltip>
        }
      >
        <TextCopy
          onClick={() => {
            clipboard.writeText(copyBtn).then(() => {
              State.update({ copied: true });
              if (props.onCopy) {
                props.onCopy(copyBtn);
              }
            });
          }}
        >
          Copy
          {state.copied ? (
            <>
              {props.copiedIcon ?? (
                <i className="bi bi-clipboard2-check-fill" />
              )}{" "}
              {props.copiedLabel ?? props.label}
            </>
          ) : (
            <>
              {props.clipboardIcon ?? <i className="bi bi-clipboard" />}{" "}
              {props.label}
            </>
          )}
        </TextCopy>
      </ButtonCopy>
    </CardBody>
  </Card>
);
