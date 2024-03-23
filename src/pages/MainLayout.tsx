import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import NavCard from '../components/NavCard'
import votingImage from '../assets/images/votingImage.png'
import breedsImage from '../assets/images/breedsImage.png'
import galleryImage from '../assets/images/galleryImage.png'

export default function MainLayout() {
    return (
        //TODO: try out lg:container (side margins on the small screens)
        <div className="container mx-auto flex max-h-screen min-h-screen p-8 font-jost selection:bg-primaryColor-light">
            <div className="flex flex-1 flex-col items-center pt-2">
                <div>
                    <header className="w-fit">
                        <Link to="/" className="flex gap-2">
                            <img
                                src={logo}
                                width={24}
                                height={24}
                                alt="cats paw logo"
                            />
                            <h1 className="text-lg font-bold text-textColor drop-shadow-md">
                                CatsPaw
                            </h1>
                        </Link>
                    </header>
                    <div className="mt-40">
                        <h2 className="text-3xl font-semibold text-textColor">
                            Hello there!
                        </h2>
                        <p className="mt-2 text-textColor-light">
                            Welcome to CatsPaw!
                        </p>
                    </div>
                    <nav className="mt-16 flex gap-4 text-primaryColor">
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
            <main className="flex-1 shrink-0">
                <Outlet />
            </main>
        </div>
    )
}
