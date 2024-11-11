import Header from './components/Header';
import Form from './components/Form';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Header />
      <Form />
    </AuthProvider>
  );
}

export default App;