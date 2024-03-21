import mainImage from '../assets/images/mainImage.png'

export default function MainImage() {
    return (
        <div
            className="flex size-full max-h-[58rem] justify-center bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${mainImage})` }}
        >
            <div className="-z-10 w-5/6 rounded-2xl bg-primaryColor-light"></div>
        </div>
    )
}
