import React,{Suspense} from 'react'
import './assets/css/index.css'
import { useRoutes } from 'react-router-dom'
import routes from'@/router/index'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import './index.css'
import useScrollTop from './hooks/useScrollTop'
export default function App() {
  useScrollTop()
  return (
    <div className='app divide-y'>
       <AppHeader />
       <Suspense fallback='loading...'>
        <div className="page  ">
          {useRoutes(routes)}
          </div>
       </Suspense>
       
        <AppFooter />
    </div>
  )
}
