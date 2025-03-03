import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "../Layout";
import { DashboardHome, Learners, MyModules, Profile, Settings } from "../Pages/Dashboard";

export default function DashboardRoutes() {
  return (
    <>
      <DashboardLayout>
        <Routes>
           <Route index element={<DashboardHome />}></Route>
           <Route path='/modules' element={<MyModules />}></Route>
           <Route path='/profile' element={<Profile />}></Route>
           <Route path='/settings' element={<Settings />}></Route>
           <Route path='/learners' element={<Learners />}></Route>
         </Routes>
      </DashboardLayout>
    </>
  )
}