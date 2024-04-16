import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import MainImage from './components/MainImage'
import ContentLayout from './pages/ContentLayout'
import Voting, { loader as votingLoader } from './pages/Voting'
// import Likes, { loader as likesLoader } from './pages/Likes'
import ErrorMessage from './components/ErrorMessage'
import NotFound from './pages/NotFound'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <MainImage />,
                },
                {
                    element: <ContentLayout />,
                    children: [
                        {
                            errorElement: <ErrorMessage />,
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
                                {
                                    path: 'likes',
                                    // element: <Likes />,
                                    // loader: likesLoader,
                                },
                                {
                                    // path: 'favorites',
                                    // element: <Likes />,
                                    // loader: likesLoader,
                                },
                                {
                                    path: 'dislikes',
                                    // element: <Likes />,
                                    // loader: likesLoader,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
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
