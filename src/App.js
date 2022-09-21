import './App.css';
import { MessagesContainer } from './components/Chat/MessagesContainer';
import CajaChats from './components/ContenedorChats/CajaChats'
function App() {
  return (
    <div className='app'>
      <CajaChats/>
      <MessagesContainer/>
    </div>
  );
}

export default App;
