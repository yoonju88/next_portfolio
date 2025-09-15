"use client";
import { useEffect, useRef, useState } from "react";

export default function MouseInvertSpot({ size, softEdge, strength, className = "hidden md:block" }) {
    const spotRef = useRef(null);
    const raf = useRef(null);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const check = () =>
            root.classList.contains("dark") ||
            window.matchMedia?.("(prefers-color-scheme: dark)").matches;

        setIsDark(check());

        // OS 다크모드 변경 감지
        const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
        const onChange = () => setIsDark(check());
        mql?.addEventListener?.("change", onChange);

        // Tailwind 'dark' 클래스 변경 감지 (선택)
        const mo = new MutationObserver(() => setIsDark(check()));
        mo.observe(root, { attributes: true, attributeFilter: ["class"] });

        return () => {
            mql?.removeEventListener?.("change", onChange);
            mo.disconnect();
        };
    }, []);

    useEffect(() => {
        const el = spotRef.current;

        if (!el) return;

        const onMove = (e) => {
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(() => {
                el.style.transform = `translate(${e.clientX - size / 2}px, ${e.clientY - size / 2
                    }px)`;
            });
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [size]);

    // 라이트/다크에 따라 스팟 색상 전환 (라이트=검정, 다크=흰색)
    const rgb = isDark ? "255,255,255 " : "287,182,193";
    const inner = Math.max(0, (size - softEdge) / 2);
    const outer = size / 2;

    const bg = `radial-gradient(circle, rgba(${rgb},${strength}) 0%, rgba(${rgb},${strength}) ${inner}px, rgba(${rgb},0) ${outer}px)`;


    return (
        <div
            ref={spotRef}
            aria-hidden
            className={`pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference ${className}`}
            style={{
                width: size,
                height: size,
                backgroundImage: bg,
                willChange: "transform",
                transition: "transform 70ms linear",
            }}
        />
    );
}