import { Route, Routes } from 'react-router-dom';
// import './index.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import ForumPage from './pages/ForumPage';
import RequireAuth from './middleware/RequireAuth';
import Layout from './Layout';
import useAuth from './hooks/useAuth';
import InsightPage from './pages/InsightPage';
import ViewPage from './pages/forum/ViewPage';
import SignOut from './pages/auth/SignOut';
import PresistAuth from './middleware/PresistAuth';
import CreateForum from './component/form/CreateForum';
import EditForum from './component/form/EditForum';
import HubPage from './pages/HubPage';
// import { authMin } from './firemin';

function App() {
    // authMin.setCustomUserClaims('MvPwUze5DYNLXjYS6Ufjv8dkMtr1', {admin : true});
    
    

   return (
            <Routes>
              <Route path='/' element={<Layout/>}>
                {/* Public + Logged */}
                <Route path='/' element={<HomePage/>} />

                {/* <Route path='/register' Component={} /> */}
                <Route path='spacerum' element={<ForumPage/>} />
                <Route path='spacerum/:id' element={<ViewPage/>} />
                <Route path='gamesight' element={<InsightPage/>} />
                <Route path='gamehub' element={<HubPage/>} />
                {/* User Login Only */} 
                
                {/* <Route element={<PresistAuth/>}> Nyalakan saja Jika Perlu! -Reza*/}
                  <Route element={<RequireAuth allowedRoles={['user']}/>}>
                    <Route path='spacerum/create' element={<CreateForum/>} />
                    <Route path='spacerum/edit/:id' element={<EditForum/>} />
                    <Route path='account' element={<AccountPage/>} />
                    <Route path='signout' element={<SignOut/>} />
                  </Route>
                {/* </Route> */}
                {/* Error page */}
                {/* <Route path='*' Component={Page404}/> */}
              </Route>
              <Route path='login' element={<Login/>} />
            </Routes>  
  );
}

export default App;
