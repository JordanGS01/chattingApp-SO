import './App.css';
import { MessagesContainer } from './components/Chat/MessagesContainer';
import ContenedorPrincipal from './components/ContenedorChats/ContenedorPrincipal'
function App() {
  return (
    <div className='app'>
      <ContenedorPrincipal/>
      <MessagesContainer/>
    </div>
  );
}

export default App;
