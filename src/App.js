// CSS
import './App.css'

//Component Imports
import Header from './components/header/header'
import FTF from './components/FTF/FTF'
import Documents from './components/documents/documents'
import Covid from './components/covid/covid'

const App = () => {
  return (
    <>
      <div id='tree-background'></div>
      <Header />
      <FTF />
      <Documents />
      <Covid />
    </>
  )
}

export default App
