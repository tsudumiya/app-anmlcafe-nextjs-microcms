import Image from 'next/image';

export default function LayoutMenuList({ image, imageUrl, imageWidth, imageHeight, name, body, price, flagBody = true, itemClass = 'w-full mb-10 shadow-lg', blockClass = 'w-full bg-white flex flex-wrap justify-between px-4 py-4', imageClass = 'w-full md:w-2/5', dataClass = 'w-full md:w-7/12 px-6 py-4 mb:px-0 mb:px-0' }) {
    return (
        <>
            <div className={itemClass}>
                <div className={blockClass}>
                    <div className={imageClass}>
                        <Image src={imageUrl} alt={name} layout="responsive" objectFit="cover" width={imageWidth} height={imageHeight} />
                    </div>
                    <div className={dataClass}>
                        <div className="font-bold text-xl mb-2">{name}</div>
                        {flagBody && <p className="text-base mb-2">{body}</p>}
                        <p className="text-gray-700 text-base mb-4">{price}円(税込)</p>
                    </div>
                </div>
            </div>
        </>
    );
}
