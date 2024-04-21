export default function LogCard() {
    return (
        <div className="my-auto flex h-14 w-full content-baseline items-center rounded-xl bg-bgColor px-6">
            <div className="mr-5 flex h-7 w-14 items-center justify-center rounded bg-white text-textColor">
                22:35
            </div>
            <span className="text-textColor-light">
                ImageID: <b className="text-textColor">fQSunHvl8</b> was added
                to Favorites
            </span>
        </div>
        // <img src={likeIcon} width={20} height={20} className="ml-auto" />
    )
}
