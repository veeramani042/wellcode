import LandingFooter from "@/components/constructed/landing-footer";
import { MotionDiv, MotionH2 } from "@/components/motion/motion-client";
import { AuroraText } from "@/components/ui/aurora-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Mail, NotebookPen, User } from "lucide-react";

export const dynamic = "force-static"; // ensures SSG

export default function ContactSection() {
    return (
        <>
            <section className="relative text-gray-100 py-20 px-6">
                <div className="pointer-events-none absolute inset-0 md:-inset-10 -z-10 bg-linear-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />

                <div className="max-w-5xl mx-auto">
                    <MotionH2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-8xl text-center my-15"
                    >
                        <AuroraText>Get in Touch</AuroraText>
                    </MotionH2>

                    <MotionDiv
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="p-10 gap-10"
                    >
                        <form className="space-y-6 block max-w-2xl mx-auto">
                            <div>
                                <label className="block text-sm mb-2">Name</label>
                                <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <User size={16} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full pl-12 py-3 bg-transparent outline-none rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-2">Email</label>
                                <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                        <Mail size={16} />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full pl-12 py-3 bg-transparent outline-none rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm mb-2">Message</label>
                                <div className="relative w-full rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20">
                                    <span className="absolute left-4 top-5">
                                        <NotebookPen size={16} />
                                    </span>
                                    <textarea
                                        placeholder="Leave a message here"
                                        className="w-full pl-12 py-3 bg-transparent outline-none rounded-2xl"
                                    />
                                </div>
                            </div>

                            <RainbowButton className="w-full py-5 rounded-lg shadow-lg">
                                Send Message
                            </RainbowButton>
                        </form>
                    </MotionDiv>
                </div>
            </section>

            <LandingFooter />
        </>
    );
}
