
export default function ScrollEditedImages() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center pb-10 md:pb-40 bg-black">
            <div className="from-black pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-black pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            <div className="w-full absolute bottom-[-200px] h-100 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </section>
    )
}
