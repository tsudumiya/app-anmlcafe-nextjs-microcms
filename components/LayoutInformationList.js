import Link from 'next/link';
import { dateFormat } from '../utils/functions';

export default function LayoutInformationList({ id, title, date }) {
    const valueDate = dateFormat(date);
    return (
        <>
            <div className="bg-white border-t-8 border-neutral-300 rounded-b text-teal-900 shadow-md mb-5">
                <Link href={`/information/${id}`}>
                    <a className="block px-4 py-3">
                        <time className="text-gray-700 text-base mb-1 block md:w-1/6">{valueDate}</time>
                        <div className="md:w-10/12">{title}</div>
                    </a>
                </Link>
            </div>
        </>
    );
}
