import { Route, Routes } from "react-router-dom"
import ResumeLayout from "../layouts/ResumeLayout"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound/NotFound"
import Resume from "../pages/Resume"

type props = {}

const Router: React.FC<props> = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username"  element={<ResumeLayout />} >
        <Route index element={<Resume />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  )
}
export default Router