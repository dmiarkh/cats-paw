import {
    isRouteErrorResponse,
    useNavigate,
    useRouteError,
} from 'react-router-dom'

export default function ErrorMessage() {
    const error = useRouteError()
    const navigate = useNavigate()

    let errorMessage: JSX.Element | null = null

    if (isRouteErrorResponse(error)) {
        errorMessage = (
            <>
                <p className="text-xl text-textColor-light">{error.status}</p>
                <p className="text-xl text-textColor-light">
                    {error.statusText}
                </p>
            </>
        )
    } else if (error instanceof Error) {
        errorMessage = (
            <p className="text-xl text-textColor-light">{error.message}</p>
        )
    }

    return (
        <div className="flex h-full flex-col items-center justify-center">
            <p className="mb-4 text-3xl text-textColor">
                Oops, there was an error!
            </p>
            {errorMessage}
            <div className="flex gap-3">
                <button
                    className="mt-4 rounded-xl bg-primaryColor px-4 py-2 font-bold text-white"
                    onClick={() => navigate(0)}
                >
                    Retry
                </button>
                <button
                    className="mt-4 rounded-xl bg-primaryColor px-4 py-2 font-bold text-white"
                    onClick={() => navigate(-1)}
                >
                    Go back
                </button>
            </div>
        </div>
    )
}
