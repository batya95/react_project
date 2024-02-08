import { createBrowserRouter } from 'react-router-dom';
import AdminPage from './components/admin/AdminPage';
import UserHome from '../src/components/user/UserHome'
import ToAdd from './components/service/ToAdd';
import ToMeet from './components/meeting/ToMeet';
import MeetingList from './components/meeting/MeetingList';


const isAdmin = true;
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserHome />,
    children: [{
      path: '/',
      element: <ToMeet />
    }
    ]
  },
  {
    path: '/admin',
    element: <AdminPage isAdmin={isAdmin} />,
    children: [
      {
        path: ':addService',
        element: <ToAdd />,
      },
      {
        path: ':meeting',
        element: <MeetingList />,
        errorElement: <div>error contant not found</div>
      }
    ]
  }
])

export default router;