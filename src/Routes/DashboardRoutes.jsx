import { Routes, Route } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'
import {
  AddFacilitator,
  AddLearners,
  AddMandE,
  ClusterDashHome,
  ClusterLearners,
  ClustersAddFacilitator,
  ClustersFacilitator,
  DashboardHome,
  FacilitatorDashHome,
  FacilitatorLearner,
  Facilitators,
  FacilitatorsProfile,
  FacilitatorsProfileCluster,
  Learners,
  LearnersProfile,
  LearnersProfileMandE,
  MandE,
  MandEDashHome,
  MandELearners,
  MandeLearnersProfile,
  Messages,
  MyModules,
  Profile,
  Settings
} from '../Pages/Dashboard'

export default function DashboardRoutes () {
  return (
    <Routes>
      <Route
        path='learning/*'
        element={<DashboardLayout dashboardType='learning' />}
      >
        <Route index element={<DashboardHome />} />
        <Route path='messages' element={<Messages />} />
        <Route path='modules' element={<MyModules />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route
        path='facilitator/*'
        element={<DashboardLayout dashboardType='facilitator' />}
      >
        <Route index element={<FacilitatorDashHome />} />
        <Route path='learners' element={<FacilitatorLearner />} />
        <Route path='add-learner' element={<AddLearners />} />
        <Route path='learners-profile' element={<LearnersProfile />} />
        <Route path='messages' element={<Messages />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route path='me/*' element={<DashboardLayout dashboardType='me' />}>
        <Route index element={<MandEDashHome />} />
        <Route path='learners' element={<MandELearners />} />
        <Route path='learners-profile' element={<LearnersProfileMandE />} />
        <Route path='facilitators' element={<Facilitators />} />
        <Route path='add-facilitator' element={<AddFacilitator />} />
        <Route path='facilitator-profile' element={<FacilitatorsProfile />} />
        <Route path='messages' element={<Messages />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>

      <Route
        path='cluster-manager/*'
        element={<DashboardLayout dashboardType='cluster-manager' />}
      >
        <Route index element={<ClusterDashHome />} />
        <Route path='facilitators' element={<ClustersFacilitator />} />        
        <Route path='add-facilitator' element={<ClustersAddFacilitator />} />
        <Route path='facilitator-profile' element={<FacilitatorsProfileCluster />} />        
        <Route path='learners-profile' element={<MandeLearnersProfile />} />
        <Route path='learners' element={<ClusterLearners />} />
        <Route path='m-e' element={<MandE />} />
        <Route path='add-mande' element={<AddMandE />} />
        <Route path='messages' element={<Messages />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}
