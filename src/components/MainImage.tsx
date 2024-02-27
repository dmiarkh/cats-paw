import mainImage from '../assets/images/mainImage.png'

export default function MainImage() {
    return (
        <div className="relative h-full w-full">
            <img src={mainImage} className="absolute right-0 w-full" />
            <div className="ml-10 mr-4 h-full rounded-2xl bg-primaryColor-light"></div>
        </div>
    )
}
