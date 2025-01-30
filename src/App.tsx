import { Route, Routes } from 'react-router-dom'
import { HomePage } from "@pages/HomePage";
import { AllRecipes } from "@pages/AllRecipes";
import { SpecificRecipe } from "@pages/SpecificRecipe";

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
