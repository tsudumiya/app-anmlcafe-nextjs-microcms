import Link from 'next/link';

export default function BaseButton({ name, link, classPosition = 'text-center', classShape = 'rounded-lg', classBackGroundColor = 'bg-white', classBackGroundHoverColor = 'hover:bg-gray-200', classTextColor = 'text-gray-800' }) {
    return (
        <div className={`mx-auto ${classPosition}`}>
            <Link href={link}>
                <a className={`font-semibold md:text-lg xl:text-base px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 leading-tight shadow-md inline-block ${classShape} ${classBackGroundColor} ${classBackGroundHoverColor} ${classTextColor}`}>{name}</a>
            </Link>
        </div>
    );
}
