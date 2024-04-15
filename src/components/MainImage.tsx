import mainImage from '../assets/images/mainImage.png'

export default function MainImage() {
    return (
        <div
            className="flex size-full justify-center bg-contain bg-center bg-no-repeat py-8"
            style={{ backgroundImage: `url(${mainImage})` }}
        >
            <div className="-z-10 w-5/6 rounded-2xl bg-primaryColor-light"></div>
        </div>
    )
}
