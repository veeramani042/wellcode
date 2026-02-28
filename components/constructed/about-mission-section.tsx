"use client";

import React from "react";
import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";

const AboutMissionSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-28 px-6 md:px-16 text-white">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#000000_0%,#0b0f1a_40%,#0e1627_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(30,41,59,0.4),transparent_50%)]" />
            <div className="max-w-6xl mx-auto space-y-28">

                {/* Mission */}

                <div className="bg-white/5 backdrop-blur-xl mb-10 md:mb-18 border border-white/10 rounded-2xl p-8 md:p-14 transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_0_60px_rgba(251,146,60,0.25)]">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center"> Our <span className="text-orange-300">Mission</span> </h2>
                    <p className="text-gray-300 leading-relaxed text-md sm:text-lg text-center"> Our mission is to empower businesses with reliable, scalable, and visually compelling digital solutions. We aim to become a long-term technology and creative partner for our clients by consistently delivering value, quality, and innovation.
                    </p>
                </div>

                {/* Vision */}

                <div className="bg-white/5 backdrop-blur-xl mb-18 border border-white/10 rounded-2xl p-10 md:p-14 transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(96,165,250,0.25)]">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center"> Our <span className="text-blue-400">Vision</span> </h2>
                    <p className="text-gray-300 leading-relaxed text-md sm:text-lg text-center">
                        To be a globally trusted digital service provider known for creativity, technical excellence, and measurable results helping brands stand out in an increasingly competitive digital world.
                    </p>
                </div>

                {/* Work Culture - Card Style */}

                <div className="bg-white/5 backdrop-blur-xl mb-18 border border-white/10 rounded-2xl p-10 md:p-14 transition-all duration-500 hover:border-green-500/40 hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center"> Our <span className="text-green-300">Work Culture</span></h2>
                    <p className="text-gray-300 leading-relaxed text-md sm:text-lg max-w-4xl mx-auto text-center">
                        We believe in collaboration, transparency, and continuous improvement. At Wellcode Studio, creativity meets discipline, and innovation is backed by proven processes. This culture helps us build strong relationships with clients and deliver consistent results.
                    </p>
                </div>

                {/* CTA */}

                <div className="text-center pt-6">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6"> Let’s Build Something Great Together </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8"> Whether you’re a startup, small business, or enterprise, Wellcode Studio is here to support your digital journey.
                        <Link
                            href="/contact"
                            className="text-blue-500 hover:text-blue-400 font-medium underline underline-offset-4 transition px-1"
                        >
                            Partner with us
                        </Link>
                        to transform your ideas into powerful digital solutions that make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMissionSection;
