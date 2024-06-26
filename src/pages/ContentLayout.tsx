import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function ContentLayout() {
    return (
        <div className="flex h-full flex-col">
            <Header />
            <Outlet />
        </div>
    )
}
