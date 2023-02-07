import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter,
RouterProvider } from 'react-router-dom'
import Submit from './components/Submit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "./components/Submit",
        element: <Submit />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
