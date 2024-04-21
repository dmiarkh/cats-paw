import { NavLink } from 'react-router-dom'
import SearchIcon from '../assets/images/search.svg'
import LikeIcon from './icons/LikeIcon'
import FavoriteIcon from './icons/FavoriteIcon'
import DislikeIcon from './icons/DislikeIcon'

export default function Header() {
    return (
        <div className="sticky top-0 z-10 flex gap-3 bg-bgColor pb-3 pt-8">
            <form className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Search for breeds by name"
                    name="search"
                    className="relative h-14 w-full rounded-2xl p-4 pe-16 hover:ring hover:ring-primaryColor-light focus:outline-none focus:ring focus:ring-primaryColor"
                />
                <button className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-xl bg-primaryColor-light">
                    <img src={SearchIcon} width={20} height={20} />
                </button>
            </form>
            <nav className="flex gap-3">
                <NavLink
                    to={'likes'}
                    className={({ isActive }) =>
                        `${isActive ? 'isActive bg-primaryColor' : 'bg-white hover:bg-primaryColor-light'} group flex size-14 items-center justify-center rounded-xl`
                    }
                >
                    <LikeIcon
                        className={
                            'fill-primaryColor group-[.isActive]:fill-white'
                        }
                    />
                </NavLink>
                <NavLink
                    to={'favorites'}
                    className={({ isActive }) =>
                        `${isActive ? 'isActive bg-primaryColor' : 'bg-white hover:bg-primaryColor-light'} group flex size-14 items-center justify-center rounded-xl`
                    }
                >
                    <FavoriteIcon
                        className={
                            'fill-primaryColor group-[.isActive]:fill-white'
                        }
                    />
                </NavLink>
                <NavLink
                    to={'dislikes'}
                    className={({ isActive }) =>
                        `${isActive ? 'isActive bg-primaryColor' : 'bg-white hover:bg-primaryColor-light'} group flex size-14 items-center justify-center rounded-xl`
                    }
                >
                    <DislikeIcon
                        className={
                            'fill-primaryColor group-[.isActive]:fill-white'
                        }
                    />
                </NavLink>
            </nav>
        </div>
    )
}
