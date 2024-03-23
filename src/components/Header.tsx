import { Link } from 'react-router-dom'
import SearchIcon from '../assets/images/search.svg'
import LikeIcon from '../assets/images/like.svg'
import FavoriteIcon from '../assets/images/fav_empty.svg'
import DisLikeIcon from '../assets/images/dislike.svg'

export default function Header() {
    return (
        <div className="flex w-full gap-3 bg-bgColor pb-3">
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
            <Link
                to={'likes'}
                className="flex size-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
            >
                <img src={LikeIcon} />
            </Link>
            <Link
                to={'favorites'}
                className="flex size-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
            >
                <img src={FavoriteIcon} />
            </Link>
            <Link
                to={'dislikes'}
                className="flex size-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
            >
                <img src={DisLikeIcon} />
            </Link>
        </div>
    )
}
