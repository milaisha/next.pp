import '@/styles/globals.css'
import Navbar from './components/Navbar'


 function App({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />

</>
}


export default App