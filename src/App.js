import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./components/Results";
import Home from "./pages/Home";
import ImageResults from "./components/ImageResults"
import NewsResults from "./components/NewsResults"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Results />} />
          <Route path="/images" element={<ImageResults />} />
          <Route path="/news" element={<NewsResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
