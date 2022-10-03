export default function LayoutVisual({ title, message, height = '75vh', visual = 'visual-home' }) {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center z-10" style={{ minHeight: height }}>
            <div className={`absolute top-0 w-full h-full bg-center bg-cover ${visual}`}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div>
                            <h1 className="text-white font-semibold text-4xl text-shadow md:whitespace-nowrap">{title}</h1>
                            {message && <p className="mt-4 text-lg text-white text-shadow-md whitespace-pre-wrap">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: '70px', transform: 'translateZ(0px)' }}>
                <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
    );
}
