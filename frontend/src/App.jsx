import React from "react"
import { Route, Routes } from "react-router-dom"
import Signup from "./pages/signup"

const App = ()=> {
  return(
    <div>
      <Routes>
          <Route path="/auth">
            <Route path="signup" element={<Signup/>} />
          </Route>
      </Routes>
    </div>
  )
}

export default App