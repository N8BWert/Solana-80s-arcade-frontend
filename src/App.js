import Screen from './assets/Screen';

const testNumPlayers = [1, 2, 3, 4];
const testButtonsPerPlayers = [2, 4];
const testWebGLLinks = ["https://www.youtube.com/embed/FmKTiH5Lca4",
                        ""];
const testGameTitleDisplayLinks = ["test", "test2"];
const testGameNames = ["test1", "test2"];
const testBackgroundColors = ["#309159", "#0F0F0F"];

function App() {
  return (
    <div>
      <Screen
        screenWidth={window.innerWidth}
        screenHeight={window.innerHeight}
        numPlayers={testNumPlayers[3]}
        buttonsPerPlayer={testButtonsPerPlayers[1]}
        webGLLink={testWebGLLinks[0]}
        gametitleDisplayLink={testGameTitleDisplayLinks[0]}
        gameName={testGameNames[0]}
        backgroundColor={testBackgroundColors[0]}
      />
    </div>
  );
}

export default App;
