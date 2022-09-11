// CSS
import './App.css'

//Component Imports
import Header from './components/header/header'
import FTF from './components/FTF/FTF'
import Documents from './components/documents/documents'
import Covid from './components/covid/covid'
import Flying from './components/flying/flying'
import Voting from './components/voting/voting'

const App = () => {
  return (
    <>
      <div id='tree-background'></div>
      <Header />
      <FTF />
      <Documents />
      <Covid />
      <Flying />
      <Voting />
    </>
  )
}

export default App
