import StateContext from '../context/StateContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  )
}

export default MyApp
