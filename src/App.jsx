
import './App.css'
import Navbar from './components/Navbar'
function App() {
  return (
   <>
     <Navbar />

     <div className="container">
       <h1>Welcome to LedgerRoute</h1>

      <p>Accounting Approval System</p>

      <input
        type="email"
        placeholder="Enter your email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter your password"
      />

      <br /><br />

      <button>Sign In</button>
    </div>
    </>  
    
  )
}

export default App
