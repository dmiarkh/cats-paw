import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import MainImage from './components/MainImage'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    errorElement: <p></p>,
                    children: [
                        {
                            index: true,
                            element: <MainImage />,
                        },
                        {
                            path: 'voting',
                            element: <p>voting</p>,
                        },
                        {
                            path: 'breeds',
                            element: <p>breeds</p>,
                        },
                        {
                            path: 'gallery',
                            element: <p>gallery</p>,
                        },
                    ],
                },
            ],
        },
    ])

    return (
        <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />
    )
}

export default App
