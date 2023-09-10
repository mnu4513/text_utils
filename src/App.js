import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">


        <NavBar title="TextUtils"/>
<TextForm heading="Enter the text to analyze"/>
    </div>
  );
}

export default App;
