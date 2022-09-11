// CSS
import './App.css'

//Component Imports
import Header from './components/header/header'
import FTF from './components/FTF/FTF'
import Documents from './components/documents/documents'
import Covid from './components/covid/covid'
import Flying from './components/flying/flying'
import Voting from './components/voting/voting'
import Housing from './components/housing/housing'
import Food from './components/food/food'
import Transportation from './components/transportation/transportation'
import Money from './components/money/money'
import Communication from './components/communication/communication'
import Health from './components/health_care/health_care'
import Performance from './components/performance/performance'
import Costumes_HMU from './components/costumes_hmu/costumes_hmu'
import Leisure from './components/leisure/leisure'
import Packing from './components/packing/packing'
import Footer from './components/footer/footer'

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
      <Housing />
      <Food />
      <Transportation />
      <Money />
      <Communication />
      <Health />
      <Performance />
      <Costumes_HMU />
      <Leisure />
      <Packing />
      <Footer />
    </>
  )
}

export default App
