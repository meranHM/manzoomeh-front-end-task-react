import { Route, Routes, useLocation } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Tours from "./pages/Tours"



const App = () => {
  const location = useLocation()

  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Tours />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  )
}

export default App