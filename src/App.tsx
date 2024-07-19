import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UrlProps } from './models/typescript'
import { HomePage } from './pages/home/page'
import { LoginPage } from './pages/login/page'
import { RegitserPage } from './pages/register/page'
import { SetUsernamePage } from './pages/setusername/page'
import { RequiredAuth } from './components/requiredAuth/requiredAuth'
import { AuthLayout } from './components/Layout/AuthLayout'
import { MuiPlayground } from './components/mui/page'

const routes: UrlProps[] = [
  {
    url: "/login",
    AuthLayout: false,
    element: <LoginPage />
  },
  {
    url: "/register",
    AuthLayout: false,
    element: <RegitserPage />
  },
  {
    url: "/",
    AuthLayout: true,
    element: <HomePage />
  },
  {
    url: "/setup-username",
    AuthLayout: false,
    element: <SetUsernamePage />
  },
  {
    url: "/mui",
    AuthLayout: false,
    element: <MuiPlayground />
  }
]

function App() {

  return (
    <>
      <Routes>
        {routes.map((route => {
          return (
            <Route key={route.url} path={route.url} element={
              route.AuthLayout ? 
              <RequiredAuth>
                <AuthLayout>
                  {route.element}
                </AuthLayout>
              </RequiredAuth>
                :
                route.element
            } />
          )
        }))}
      </Routes>
    </>
  )
}

export default App
