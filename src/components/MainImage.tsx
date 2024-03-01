import mainImage from '../assets/images/mainImage.png'

export default function MainImage() {
    return (
        <div className="relative flex size-full max-h-[60rem] justify-center">
            <div className="m-auto size-11/12 rounded-2xl bg-primaryColor-light"></div>
            <img
                src={mainImage}
                className="absolute inset-0 m-auto bg-auto bg-no-repeat"
            />
        </div>
    )
}
