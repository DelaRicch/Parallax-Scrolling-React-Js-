import './App.css';
import FirstPic from './components/FirstPic';
import SecondPic from './components/SecondPic';
import ThirdPic from './components/ThirdPic';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <FirstPic />
      <Text />
      <SecondPic />
      <Text />
      <ThirdPic />
    </div>
  );
}

export default App;
