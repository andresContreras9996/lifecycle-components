import './App.css';
import DisplayClock from './components/displayClock/displayClock.component';
import ButtonCounter from './components/button-counter/button-counter.component';
import ErrorBoundary from './components/errorBoundary/errorBoundary.component';
function App() {
  return (
    <div className="App">
      <DisplayClock></DisplayClock>
      <ErrorBoundary>
        <ButtonCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
