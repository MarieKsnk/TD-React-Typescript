import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import AllRecipes from './components/pages/AllRecipes'
import SpecificRecipe from './components/pages/SpecificRecipe'
import './App.css'

function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recettes" element={<AllRecipes />} />
        <Route path="/recette/:id" element={<SpecificRecipe />} />
      </Routes>
  )
}

export default App
