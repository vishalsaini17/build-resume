import { Route, Routes } from "react-router-dom"
import ResumeLayout from "../Layouts/ResumeLayout"
import Home from "../Pages/Home"
import Resume from "../Pages/Resume"

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