
export default function ScrollEditedImages() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center pb-10 md:pb-40 bg-black">
            {/* <ScrollVelocityContainer className="w-full">
                <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4 ">
                    {Array.from({ length: 10 }).map((src, idx) => (
                        <Image
                            key={idx}
                            src={`/assets/images/image${String(idx + 1).padStart(2, "0")}.jpg`}
                            alt={"wellcode-asset - " + idx}
                            width={240}
                            height={160}
                            loading="lazy"
                            decoding="async"
                            className="mx-4 inline-block h-40 w-60 lg:h-60 lg:w-100 rounded-lg object-cover shadow-sm"
                        />
                    ))}
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
                    {Array.from({ length: 10 }).map((src, idx) => (
                        <Image
                            key={idx}
                            src={`/assets/images/image${String(idx + 12).padStart(2, "0")}.webp`}
                            alt={"wellcode-asset - " + idx}
                            width={240}
                            height={160}
                            loading="lazy"
                            decoding="async"
                            className="mx-4 inline-block h-40 w-60 lg:h-60 lg:w-100 rounded-lg object-cover shadow-sm"
                        />
                    ))}
                </ScrollVelocityRow>
            </ScrollVelocityContainer> */}
            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            <div className="w-full absolute bottom-[-200px] h-100 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </section>
    )
}
