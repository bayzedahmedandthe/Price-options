
import { BarChart } from 'recharts'
import './App.css'
import Charts from './Components/Charts/Chart'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
  
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <Charts></Charts>
    <BarChart></BarChart>
    </>
  )
}

export default App
