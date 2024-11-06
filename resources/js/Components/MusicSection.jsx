import { useRef, useEffect, useState } from 'react';

export default function MusicSection({ className, musicList, title }) {
    const carouselRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const checkOverflow = () => {
            if (carouselRef.current) {
                setIsOverflowing(carouselRef.current.scrollWidth > carouselRef.current.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, []);

    const handleNext = () => {
        const newPosition = Math.min(
            scrollPosition + carouselRef.current.clientWidth,
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        );
        setScrollPosition(newPosition);
        carouselRef.current.scrollLeft = newPosition;
    };

    const handlePrev = () => {
        const newPosition = Math.max(0, scrollPosition - carouselRef.current.clientWidth);
        setScrollPosition(newPosition);
        carouselRef.current.scrollLeft = newPosition;
    };

    return (
        <section className={"md:pl-64 " + className}>
            <div className="px-4 pb-4 pt-14 carousel-container w-full overflow-hidden relative">
                <span className="absolute top-4 text-xl font-bold">{title}</span>
                {isOverflowing && (
                    <>
                        <button
                            className="prev-button absolute bg-base-100 right-14 top-6 transform -translate-y-1/2 hover:bg-neutral-600 text-white p-2 rounded-l-xl shadow-md z-50 border border-neutral-300"
                            onClick={handlePrev}
                        >
                            &larr;
                        </button>
                        <button
                            className="next-button absolute bg-base-100 right-6 top-6 transform -translate-y-1/2 hover:bg-neutral-600 text-white p-2 rounded-r-xl shadow-md z-50 border border-neutral-300"
                            onClick={handleNext}
                        >
                            &rarr;
                        </button>
                    </>
                )}

                <div
                    ref={carouselRef}
                    className="flex flex-row carousel w-full gap-2 overflow-x-auto scroll-smooth"
                >
                    {musicList.map((music, i) => (
                        <a
                            key={i}
                            href={route('music.main.show', music.id)}
                            className="card card-compact bg-neutral shadow-xl flex-[0_0_40%] sm:flex-[0_0_22%]"
                        >
                            <figure>
                                <img
                                    src={music.cover}
                                    alt="Album"
                                    className="object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between items-start flex-row">
                                    <h2 className="card-title mr-1">{music.title}</h2>
                                    <span>{music.price}</span>
                                </div>
                                <div className="flex flex-row">
                                    <span className="text-xs">{music.album}</span>
                                    <span className="mx-1">*</span>
                                    <span className="text-xs">{music.artist}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
