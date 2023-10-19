const [isWhiteBackground1, setIsWhiteBackground1] = useState(true);
const [isToggleOn1, setIsToggleOn1] = useState(true);

const toggleButton1 = () => {
  setIsToggleOn1((prevState) => !prevState);
  setIsWhiteBackground1((prevState) => !prevState);
};

const CenteredCardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Card = styled.div`
  top:20px;
  padding: 30px;
  background: ${(props) => (props.isWhiteBackground ? "#000000" : "#fffff")};
  width: 100%;
  height: 70vh;
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

const Button0001 = styled.button`
  width: 80%;
  height: 40px;
  all: unset;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6em 2em;
  border: mediumspringgreen solid 0.15em;
  border-radius: 0.25em;
  color: mediumspringgreen;
  font-size: 1.2em;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: border 300ms, color 300ms;
  user-select: none;

  p {
    z-index: 1;
  }

  &:hover {
    color: #212121;
  }

  &:active {
    border-color: teal;
  }

  &::before,
  &::after
{ content: "";position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  &::before {
    left: 0;
    transform: translateX(-8em);
  }

  &::after {
    right: 0;
    transform: translateX(8em);
  }

  &:hover::before {
    transform: translateX(-1em);
  }

  &:hover::after {
    transform: translateX(1em);
  }

  &:active::before,
  &:active::after {
    background: teal;
  }`;

const ToggleButton = styled.button`
  font-family: inherit;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${(props) => (props.isToggled ? "#f79a55" : "#0a1929ff")};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 10px; /* Điều chỉnh vị trí theo y */
  right: 10px; /* Điều chỉnh vị trí theo x */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: background-color 300ms;
  
`;

const SunIcon = (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    width="23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
      color="red"
    ></path>
  </svg>
);

const MoonIcon = (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    width="23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      color="orange"
    ></path>
    <path
      d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
      color="black"
    ></path>
  </svg>
);

const ColorText = styled.div`
  font-family: inherit;
  position: absolute;
  padding:1px;
  background-color: ${(props) => (props.isToggled ? "#ff8408ff" : "#0a1929ff")};
  border: 1;
  border-radius:14px;
  cursor: pointer;
  position: absolute;
  top: 10px; /* Điều chỉnh vị trí theo y */
  right: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  transition: background-color 300ms;
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

const SvgIconCopy = styled.span`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0a1929ff;

  svg {
    fill: white;
  }
`;
Update detailUpdate detailUpdate detail
Update detail



const EditorContainer = styled.div`
  top:20px;
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  border: none;
  border-radius: 14px;
  padding: 10px;
  position: relative;
  height: 70vh;
`;

const TextAreaWrapper = styled.div`
  border: 1px solid #333;
  border-radius: 4px;
  overflow: hidden;
  height: 100%; 
  border-radius: 14px;

`;

const TextArea = styled.textarea`
  background-color: #1e1e1e;
  color: #d4d4d4;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%; /* Make the text area take up the full height */
  resize: none;
  outline: none;
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
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <Card isWhiteBackground={!isWhiteBackground1}>
          <CardBody>
            <CenteredCardWrapper>{component}</CenteredCardWrapper>
            <SaveButton onClick={toggleSaveButton1} isToggled={isToggleSave1}>
              {SaveIcon}
              {save}
            </SaveButton>
            <ColorText>{isToggleOn1 ? "#FFFFFF" : "#000000"}</ColorText>
            <ToggleButton onClick={toggleButton1} isToggled={isToggleOn1}>
              {isToggleOn1 ? SunIcon : MoonIcon}
            </ToggleButton>
            <ButtonCopy
              placement="auto"
              overlay={
                <Tooltip>
                  {state.copied ? "Copied!" : "Copy to clipboard"}
                </Tooltip>
              }
            >
              <TextCopy
                onClick={() => {
                  clipboard.writeText(copyThis).then(() => {
                    State.update({ copied: true });
                    if (props.onCopy) {
                      props.onCopy(copyThis);
                    }
                  });
                }}
              >
                CopyUI
                {state.copied ? (
                  <>
                    {props.copiedIcon ?? <i className="bi bi-check-lg" />}{" "}
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
      </div>
      <div className="col-md-6">
        <EditorContainer>
          <TextAreaWrapper>
            <TextArea value={text} />
          </TextAreaWrapper>
        </EditorContainer>
      </div>
    </div>
  </div>
);
