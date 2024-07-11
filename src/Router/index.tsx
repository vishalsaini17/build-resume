import { Outlet, Route, Routes } from "react-router-dom";
import ResumeLayout from "../App/layouts/ResumeLayout";
import Home from "../App/pages/Home";
import NotFound from "../App/pages/NotFound/NotFound";
import Portfolio from "../App/pages/Portfolio";
import Resume from "../App/pages/Resume";

type props = {};

const Router: React.FC<props> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<><Outlet /></>}>
          <Route index element={<Portfolio />} />
          
          <Route path="cv" element={<ResumeLayout />}>
            <Route index element={<Resume />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export default Router;
