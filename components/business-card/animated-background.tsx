"use client";
import { motion } from "framer-motion";
import React from "react";


export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10">
            {/* Darker gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black" />

            {/* Reduced opacity animated patterns */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#91712a,transparent)]" />

                {/* Geometric shapes with reduced intensity */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 300 + 100}px`,
                                height: `${Math.random() * 300 + 100}px`,
                                background: `radial-gradient(circle at center, rgba(145,113,42,0.05) 0%, transparent 70%)`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [`${Math.random() * 360}deg`, `${Math.random() * 360 + 180}deg`],
                                opacity: [0.05, 0.15, 0.05],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>

                {/* Golden lines with reduced opacity */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-px bg-gradient-to-r from-transparent via-[#91712a] to-transparent"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: 0,
                                right: 0,
                                opacity: 0.05,
                            }}
                            animate={{
                                opacity: [0.05, 0.1, 0.05],
                                translateY: [0, 10, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                {/* Floating particles with reduced opacity */}
                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-[#e7bd5f]"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0, 0.2, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Noise overlay with reduced opacity */}
            <div className="absolute inset-0 bg-noise opacity-[0.1] mix-blend-soft-light" />
        </div>
    );
}
