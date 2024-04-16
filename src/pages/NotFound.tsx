import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-3">
            <p className="text-3xl text-textColor-light">404</p>
            <p className="text-2xl text-textColor">This page doesn't exist.</p>
            <Link
                to={'/'}
                relative="path"
                className="mt-4 rounded-xl bg-primaryColor px-4 py-2 font-bold text-white"
            >
                Return to the home page
            </Link>
        </div>
    )
}
