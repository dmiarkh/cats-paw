import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import votingImage from '../assets/images/votingImage.png'
import breedsImage from '../assets/images/breedsImage.png'
import galleryImage from '../assets/images/galleryImage.png'
import NavCard from '../components/NavCard'

export default function MainLayout() {
    return (
        <div className="flex h-screen max-h-screen bg-bgColor py-8 selection:bg-primaryColor-light">
            <div className="flex flex-1 flex-col items-center">
                <header>
                    <Link to="/" className="flex gap-2">
                        <img
                            src={logo}
                            alt="cats paw logo"
                            width={24}
                            height={24}
                        />
                        <h1 className="text-lg font-bold drop-shadow-md">
                            CatsPaw
                        </h1>
                    </Link>
                </header>
                <div className="mt-40">
                    <h2 className="text-3xl font-semibold">Hello there!</h2>
                    <p className="text-textColor-light">Welcome to CatsPaw!</p>
                    <nav className="mt-20 flex flex-col gap-4 text-primaryColor md:flex-row">
                        <NavCard
                            cardName="VOTING"
                            className="bg-votingCardColor ring-votingCardColor"
                            linkTo="voting"
                            imageUrl={votingImage}
                        />
                        <NavCard
                            cardName="BREEDS"
                            className="bg-breedsCardColor ring-breedsCardColor"
                            linkTo="breeds"
                            imageUrl={breedsImage}
                        />
                        <NavCard
                            cardName="GALLERY"
                            className="bg-galleryCardColor ring-galleryCardColor"
                            linkTo="gallery"
                            imageUrl={galleryImage}
                        />
                    </nav>
                </div>
            </div>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
