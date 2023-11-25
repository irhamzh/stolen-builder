// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HelloComponent from './components/HelloComponent';
import './scss/style.scss';

export function App() {
  return (
    <div>
      <HelloComponent word="MAN" />
      <h3>Active skills</h3>
      <h4>Passive skills</h4>
    </div>
  );
}

export default App;
