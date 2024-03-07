import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function ContentLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
