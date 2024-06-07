import './App.css'
import { Routes, Route } from 'react-router-dom'
import { UrlProps } from './models/typescript'
import { HomePage } from './pages/home/page'
import { LoginPage } from './pages/login/page'
import { RegitserPage } from './pages/register/page'
import { RequiredAuth } from './components/requiredAuth/requiredAuth'
import { MuiPlayground } from './components/mui/page'

const routes: UrlProps[] = [
  {
    url: "/login",
    requiredAuth: false,
    element: <LoginPage />
  },
  {
    url: "/register",
    requiredAuth: false,
    element: <RegitserPage />
  },
  {
    url: "/",
    requiredAuth: true,
    element: <HomePage />
  },
  {
    url: "/mui",
    requiredAuth: false,
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
              route.requiredAuth ? <RequiredAuth>
                {route.element}
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
