import './App.css';
import "./shared/global/style.css"
import {SignInView} from '../src/views/signInView/signInView'
import { Routing } from './routes/routes';
import { UserProvider } from './shared/provider/UserProvider';

function App() {
  return (
    <UserProvider>
      <Routing>
        <SignInView/>
      </Routing>
    </UserProvider>
  );
}

export default App;
