import './App.css';
import "./shared/global/style.css"
import {SignInView} from '../src/views/signInView/signInView'
import { Routing } from './routes/routes';

function App() {
  return (
    <Routing>
      <SignInView/>
    </Routing>
  );
}

export default App;
