export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden min-h-[70vh] flex items-center justify-center">
            {/* 🔵 Animated Gradient Background */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#0ea5e9,#8b5cf6,#22c55e)] bg-300% animate-gradient opacity-30"
            />

            {/* 🟣 Floating Blurred Blob 1 */}
            <div
                aria-hidden
                className="absolute -top-24 -left-16 -z-10 h-72 w-72 rounded-full blur-3xl opacity-30 animate-drift"
                style={{ background: 'radial-gradient(circle at 30% 30%, #60a5fa 0%, transparent 60%)' }}
            />

            {/* 🟢 Floating Blurred Blob 2 */}
            <div
                aria-hidden
                className="absolute bottom-[-60px] right-[-40px] -z-10 h-80 w-80 rounded-full blur-3xl opacity-25 animate-float"
                style={{ background: 'radial-gradient(circle at 70% 40%, #a78bfa 0%, transparent 60%)' }}
            />

            {/* ✨ Content */}
            <div className="mx-auto max-w-3xl px-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                    Growing by building ideas into reality.
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                    I combine technical expertise and design to deliver better web experiences.
                </p>
                <div className="mt-8">
                    <a
                        href="#contact"
                        className="inline-block rounded-xl px-5 py-3 text-sm font-medium border hover:shadow-lg transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}