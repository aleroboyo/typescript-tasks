import { HomePage } from './pages/HomePage'
import { CreateAssetPage } from './pages/CreateAssetPage'
import { Routes , Route } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="create-asset" element={<CreateAssetPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
