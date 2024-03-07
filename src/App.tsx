import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import MainImage from './components/MainImage'
import ErrorPage from './pages/ErrorPage'
import ContentLayout from './pages/ContentLayout'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <MainImage />,
                },
                {
                    element: <ContentLayout />,
                    children: [
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
