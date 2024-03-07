import { Link } from 'react-router-dom'
import SearchIcon from '../assets/images/search.svg'
import LikeIcon from '../assets/images/like.svg'
import FavoriteIcon from '../assets/images/fav_empty.svg'
import DisLikeIcon from '../assets/images/dislike.svg'

export default function TopBar() {
    return (
        <div className="flex flex-wrap gap-3">
            <>
                <div className="order-3 ms-auto flex gap-3">
                    <Link
                        to={'/likes'}
                        role="button"
                        className="group flex h-14 w-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
                    >
                        <img src={LikeIcon} />
                    </Link>
                    <Link
                        to={'/favourites'}
                        role="button"
                        className="group flex h-14 w-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
                    >
                        <img src={FavoriteIcon} />
                    </Link>
                    <Link
                        to={'/dislikes'}
                        role="button"
                        className="group flex h-14 w-14 items-center justify-center rounded-xl bg-white hover:bg-primaryColor-light active:bg-primaryColor"
                    >
                        <img src={DisLikeIcon} />
                    </Link>
                </div>
            </>
            <div className="relative order-3 flex min-w-full flex-1 items-center md:order-2 md:min-w-max">
                <div className="pointer-events-none absolute right-5 flex h-10 w-10 justify-center rounded-xl bg-primaryColor-light">
                    <img src={SearchIcon} width={20} height={20} />
                </div>
                <input
                    type="text"
                    placeholder="Search for breeds by name"
                    className="flex h-14 w-full rounded-2xl p-4 pe-16 hover:ring hover:ring-primaryColor-light focus:outline-none focus:ring focus:ring-primaryColor"
                />
            </div>
        </div>
    )
}
