import { NavLink } from 'react-router-dom'

interface Props {
    cardName: string
    colorClassName: string
    imageUrl: string
    linkTo: string
}

export default function NavCard({
    imageUrl,
    colorClassName,
    cardName,
    linkTo,
}: Props) {
    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) =>
                `${isActive ? 'isActive' : ''} group flex flex-col gap-3 md:w-36`
            }
        >
            <div
                className={`${colorClassName} hidden h-48 w-36 items-center justify-center rounded-2xl ring-4 ring-opacity-40 group-hover:ring-opacity-100 group-[.isActive]:ring-primaryColor-light group-[.isActive]:ring-opacity-100 md:flex`}
            >
                <img src={imageUrl} />
            </div>
            <span className="w-full rounded-2xl bg-white py-4 text-center text-lg tracking-wider group-hover:bg-primaryColor-light group-[.isActive]:bg-primaryColor group-[.isActive]:text-white">
                {cardName}
            </span>
        </NavLink>
    )
}
