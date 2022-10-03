import styles from '../styles/Header.module.css';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);

    return (
        <header className="w-full absolute md:static bg-black px-2 py-2 z-50 top-0">
            <div className="md:max-w-3xl mx-auto md:flex md:items-center">
                <div className="w-full md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16">
                    <h1>
                        <Link href="/">
                            <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap" onClick={() => showModal && setShowModal(!showModal)}>
                                Anml Cafe
                            </a>
                        </Link>
                    </h1>
                    <div className="text-white md:hidden">
                        <button className="focus:outline-none" onClick={() => setShowModal(!showModal)}>
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {!showModal ? <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /> : <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />}
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className={`w-full md:block absolute left-0 md:static bg-black md:bg-none z-20 ${showModal ? 'block' : 'hidden'}`}>
                    <ul className="md:flex md:justify-end md:items-end">
                        <li className="w-full md:w-auto md:ml-5">
                            <Link href="/concept/">
                                <a className="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full" onClick={() => setShowModal(!showModal)}>
                                    コンセプト
                                </a>
                            </Link>
                        </li>
                        <li className="w-full md:w-auto md:ml-5">
                            <Link href="/shop/">
                                <a className="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full" onClick={() => setShowModal(!showModal)}>
                                    店舗情報
                                </a>
                            </Link>
                        </li>
                        <li className="w-full md:w-auto md:ml-5">
                            <Link href="/menu/">
                                <a className="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full" onClick={() => setShowModal(!showModal)}>
                                    メニュー
                                </a>
                            </Link>
                        </li>
                        <li className="w-full md:w-auto md:ml-5">
                            <Link href="/information/">
                                <a className="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full" onClick={() => setShowModal(!showModal)}>
                                    お知らせ
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
