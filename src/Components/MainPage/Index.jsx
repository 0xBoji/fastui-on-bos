State.init({
    selectedTab: props.tab || "buttons",
  });
  
  const Wrapper = styled.div`
    padding-bottom: 48px;
  `;
  
  const Title = styled.p`
    font-weight: 600;
    font-size: ${(p) => p.size || "25px"};
    line-height: 1.2em;
    color: #11181c;
    margin: ${(p) => (p.margin ? "0 0 24px" : "0")};
    overflow-wrap: anywhere;
  `;
  
  const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border-right: 1px solid #eceef0;
    padding-right: 24px;
    overflow-y: auto;
    max-height: 700px;
    position: sticky;
    top: 0; 
    @media (max-width: 1200px) {
      background: #f8f9fa;
      border: none;
      margin: 0;
      padding: 0;
  
      > * {
        flex: none;
        margin-bottom: 12px;
      }
    }
  `;
  
  const TabsButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 23px;
    padding: 12px 0;
    position: relative;
    color: ${(p) => (p.selected ? "black" : "white")};
    background: none !important;
    border: none !important;
    outline: none;
    text-align: left;
    text-decoration: none !important;
  
    &:hover {
      color: #11181c;
      cursor: pointer;
    }
  
    &::after {
      content: "";
      display: ${(p) => (p.selected ? "block" : "none")};
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 6px;
      background: orange;
      background: 
        radial-gradient(rgba(63,94,251,1), rgba(63,94,251,1) 40%, rgba(63,94,251,1) 40%, rgba(252,70,107,1) 60%, rgba(252,70,107,1)100%), 
        linear-gradient(to right, rgb(255, 217, 0), rgb(255, 217, 0), rgb(255, 217, 0) 10%, rgb(230, 54, 97), rgb(157, 0, 253), rgb(230, 54, 97), rgb(255, 217, 0) 90%, rgb(255, 217, 0), rgb(255, 217, 0));
      background-color: rgba(255, 255, 255, 0.5);
      background-size: 200% 100%, 200% 100%;
      background-position: 100% 0, 100% 0;
  
      animation: moveLines 3s linear infinite;
  
      @keyframes moveLines {
        0% {
          background-position: 200% 0, 200% 0;
        }
        100% {
          background-position: -200% 0, -200% 0;
        }
      }
  }
  `;
  const handleTabClick = (tab) => {
    State.update({
      selectedTab: tab,
    });
  };
  return (
    <div class="container">
      <>
        <Widget src="freeui.testnet/widget/LeonardoHeader" />
      </>
      <div class="row">
        <div class="col-md-3">
          <Wrapper>
            <Tabs>
              <TabsButton
                onClick={() => handleTabClick("buttons")}
                selected={state.selectedTab === "buttons"}
              >
                <Title>Buttons</Title>
              </TabsButton>
  
              <TabsButton
                onClick={() => handleTabClick("checkboxes")}
                selected={state.selectedTab === "checkboxes"}
              >
                <Title>Checkboxes</Title>
              </TabsButton>
  
              <TabsButton
                onClick={() => handleTabClick("toggleswitches")}
                selected={state.selectedTab === "toggleswitches"}
              >
                <Title>Toggle Switches</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("cards")}
                selected={state.selectedTab === "cards"}
              >
                <Title>Cards</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("loaders")}
                selected={state.selectedTab === "loaders"}
              >
                <Title>Loaders</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("inputs")}
                selected={state.selectedTab === "inputs"}
              >
                <Title>Inputs</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("radiobuttons")}
                selected={state.selectedTab === "radiobuttons"}
              >
                <Title>Radio Buttons</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("forms")}
                selected={state.selectedTab === "forms"}
              >
                <Title>Forms</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("charts")}
                selected={state.selectedTab === "charts"}
              >
                <Title>Charts</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("patterns")}
                selected={state.selectedTab === "patterns"}
              >
                <Title>Patterns</Title>
              </TabsButton>
              <TabsButton
                onClick={() => handleTabClick("myfavorites")}
                selected={state.selectedTab === "myfavorites"}
              >
                <Title>My Favorites</Title>
              </TabsButton>
            </Tabs>
          </Wrapper>
        </div>
        <div class="col-md-9">
          {state.selectedTab === "buttons" && (
            <>
              <Widget src="freeui.testnet/widget/Page.ButtonPage1" />
              <br />
              <br />
            </>
          )}
          {state.selectedTab === "checkboxes" && (
            <>
              <Widget src="freeui.testnet/widget/Page.CheckBoxPage1" />
              <br />
              <br />
            </>
          )}
          {state.selectedTab === "toggleswitches" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.ToggleSwitchPage1" />
              <br />
              <br />
            </>
          )}
          {state.selectedTab === "cards" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.CardPage1" />
              <br />
              <br />
            </>
          )}
          {state.selectedTab === "loaders" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.LoaderPage1" />
              <br />
              <br />
            </>
          )}{" "}
          {state.selectedTab === "inputs" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.InputPage1" />
              <br />
              <br />
            </>
          )}{" "}
          {state.selectedTab === "radiobuttons" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.RadioButtonPage1" />
              <br />
              <br />
            </>
          )}
          {""}
          {state.selectedTab === "forms" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.FormPage1" />
              <br />
              <br />
            </>
          )}
          {""}
          {state.selectedTab === "charts" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.ChartPage1" />
              <br />
              <br />
            </>
          )}
          {""}
          {state.selectedTab === "patterns" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.Pattern1" />
              <br />
              <br />
            </>
          )}
          {state.selectedTab === "myfavorites" && (
            <>
              {" "}
              <Widget src="freeui.testnet/widget/Page.MyFavouritesPage" />
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </div>
  );
  