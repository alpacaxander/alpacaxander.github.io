import Logout from '../login/Logout'
import logo from '../../logo.svg'
import store from '../../core/store/Store'
import { fetchProducts } from '../../core/store/ProductSlice'

function Home() {
  return (
    <div className="home">
      <button onClick={() => store.dispatch(fetchProducts())}>dispatch</button>
      <Logout></Logout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Home
