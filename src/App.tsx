import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import MainImage from './components/MainImage'
import ErrorPage from './pages/ErrorPage'
import ContentLayout from './pages/ContentLayout'
import Voting, { loader as votingLoader } from './pages/Voting'

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
                            element: <Voting />,
                            loader: votingLoader,
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
        <RouterProvider
            router={router}
            fallbackElement={
                <h1 className="text-center text-9xl">Loading...</h1>
            }
        />
    )
}

export default App
