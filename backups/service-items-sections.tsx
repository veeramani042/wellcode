// "use client";
// import { useEffect, useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { cn, services } from "@/lib/utils";
// import { motion } from "framer-motion";
// import { AuroraText } from "../ui/aurora-text";
// import { BorderBeam } from "../ui/border-beam";
// import { ShinyButton } from "../ui/shiny-button";
// import { servicesData } from "@/lib/utils";
// import { ServiceSection } from "@/lib/model";

// gsap.registerPlugin(ScrollTrigger)

// const HorizontalSection = ({
//     service,
//     reverse = false,
//     index = 0
// }: {
//     service: ServiceSection;
//     reverse?: boolean;
//     index?: number
// }) => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const trackRef = useRef<HTMLDivElement>(null);

//     useLayoutEffect(() => {
//         const ctx = gsap.context(() => {
//             const section = sectionRef.current!;
//             const track = trackRef.current!;
//             const scrollDistance = track.scrollWidth - section.offsetWidth;

//             gsap.to(track, {
//                 x: reverse ? scrollDistance : -scrollDistance,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: section,
//                     start: "top top",
//                     end: () => "+=" + scrollDistance,
//                     scrub: true,
//                     pin: true,
//                     anticipatePin: 1,
//                 },
//             });
//         }, sectionRef);

//         return () => ctx.revert();
//     }, [reverse]);


//     return (
//         <section draggable={false} ref={sectionRef} className="relative h-screen w-full">
//             {/* <Spotlight /> */}
//             {index % 2 == 0 ?
//                 <>
//                     <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
//                     <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
//                 </> :
//                 <>
//                     <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/10 via-transparent from-[#a855f7]/10 blur-3xl" />
//                     <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/10 via-transparent from-[#a855f7]/10 blur-3xl" />
//                 </>
//             }

//             {/* Section title */}
//             <motion.div
//                 initial={{ y: 80, opacity: 0 }}
//                 whileInView={{ y: [80, -10, 0], opacity: 1 }}
//                 transition={{
//                     duration: 1,
//                     ease: "easeOut",
//                     bounce: 0.4,
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="text-center pt-30"
//                 id={service.tag.split(" ").join("-")}
//             >
//                 <AuroraText className="block text-4xl mb-5 md:text-5xl lg:text-7xl">
//                     {service.title}
//                 </AuroraText>
//                 <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
//                     {service.subtitle}
//                 </p>
//             </motion.div>
//             <motion.div
//                 initial={{ y: 80, opacity: 0 }}
//                 whileInView={{ y: [80, -10, 0], opacity: 1 }}
//                 transition={{
//                     duration: 1,
//                     ease: "easeOut",
//                     bounce: 0.4
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="flex gap-2 max-w-7xl mx-auto justify-center flex-wrap mb-10 cursor-pointer">
//                 {
//                     service.cards.map((item, i) => {
//                         return <div key={i} className={cn("relative overflow-hidden px-5 py-3 text-sm text-white/50 rounded-4xl bg-white/5 backdrop-blur-xl border border-transparent transition-colors duration-300 hover:bg-teal-500/20 hover:border-teal-800",
//                             Math.floor(service.cards.length / 2) == i && 'bg-teal-500/20 border-teal-800'
//                         )}>
//                             {item.title}
//                             <BorderBeam
//                                 size={40}
//                                 initialOffset={20}
//                                 className="from-transparent via-teal-800 to-transparent"
//                             />
//                         </div>
//                     })
//                 }
//             </motion.div>
//             <motion.div
//                 initial={{ y: 100, opacity: 0 }}
//                 whileInView={{ y: [80, -10, 0], opacity: 1 }}
//                 transition={{
//                     duration: 1,
//                     ease: "easeOut",
//                     bounce: 0.4
//                 }}
//                 viewport={{ once: true, amount: 0.3 }}
//             >
//                 <div
//                     ref={trackRef}
//                     className="flex px-10"
//                 >
//                     {service.cards.map((item, i) => {
//                         return <motion.a
//                             href={`/services/${item.title.split(" ").join("-").toLocaleLowerCase()}#content`}
//                             key={i}
//                             className="relative p-3 w-[400px] min-w-[400px] m-4 flex flex-col bg-white dark:bg-neutral-900/15 rounded-3xl overflow-hidden shadow-lg backdrop-blur-3xl"
//                         >
//                             <img
//                                 src={`./assets/images/image${String(i + 1).padStart(2, "0")}.jpg`}
//                                 alt={item.title}
//                                 className="w-full h-60 object-cover object-top opacity-80 rounded-2xl"
//                             />
//                             <div className="p-4">
//                                 <motion.h3 className="font-semibold text-xl text-neutral-700 dark:text-neutral-200 line-clamp-1 mb-1">
//                                     {item.title}
//                                 </motion.h3>
//                                 <motion.p className="text-neutral-600 dark:text-neutral-400 line-clamp-5">
//                                     {item.description}
//                                 </motion.p>
//                                 <ShinyButton className="mt-4 rounded-lg px-10">Explore</ShinyButton>
//                             </div>
//                         </motion.a>
//                     })}
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

export default function ServicesPage() {
    return (
       <div></div>
    );
}
