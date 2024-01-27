import { Route, Routes } from "react-router-dom"
import ResumeLayout from "../layouts/ResumeLayout"
import Home from "../pages/Home"
import Resume from "../pages/Resume"

type props = {}

const Router: React.FC<props> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeLayout />} >
          <Route index element={<Resume />} />
        </Route>
      </Routes>
    </>
  )
}
export default Router