import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Root } from "./components/Root"

import { Home } from "./pages/Home"
import { Pokemon } from "./pages/Pokemon"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/pokedex/:page" element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/" element={<Navigate to="/pokedex/1" />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
