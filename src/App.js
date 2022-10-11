import Screen from './assets/Screen';

const testNumPlayers = 1;
const testButtonsPerPlayer = 2;
const testWebGLLink = "https://www.youtube.com/embed/FmKTiH5Lca4";
const testGameTitleDisplayLink = "test";
const testGameName = "test";
const testBackgroundColor = "#309159";

function App() {
  return (
    <div>
      <Screen
        screenWidth={window.innerWidth}
        screenHeight={window.innerHeight}
        numPlayers={testNumPlayers}
        buttonsPerPlayer={testButtonsPerPlayer}
        webGLLink={testWebGLLink}
        gametitleDisplayLink={testGameTitleDisplayLink}
        gameName={testGameName}
        backgroundColor={testBackgroundColor}
      />
    </div>
  );
}

export default App;
