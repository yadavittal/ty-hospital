import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface AnimatedBoxProps {
    children: ReactNode;
    angle: number;
    radius: number;
    centerX: number;
    centerY: number;
    delay: number;
}

export const AnimatedBox = ({
    children,
    angle,
    radius,
    centerX,
    centerY,
    delay,
}: AnimatedBoxProps) => {
    const controls = useAnimation();

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const finalX = centerX + radius * Math.cos(angle);
    const finalY = centerY + radius * Math.sin(angle);

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: finalX,
                y: finalY,
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: { delay, duration: 1, ease: "easeOut" },
            });
        } else {
            controls.start({
                x: centerX,
                y: centerY,
                opacity: 0,
                scale: 0.3,
                rotate: -20,
            });
        }
    }, [isInView, controls, centerX, centerY, finalX, finalY, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ x: centerX, y: centerY, opacity: 0, scale: 0.3, rotate: -20 }}
            animate={controls}
            style={{ position: "absolute" }}
        >
            {children}
        </motion.div>
    );
};