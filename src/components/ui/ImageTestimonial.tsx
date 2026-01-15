import Image from "next/image"

interface ImageTestimonialProps {
    /**
     * Main quote - the emphasized/bold portion
     */
    quoteHighlight: string
    /**
     * Secondary quote text
     */
    quoteText: string
    /**
     * Name of the person giving testimonial
     */
    authorName: string
    /**
     * Role/title of the person
     */
    authorRole: string
    /**
     * Author's profile image
     */
    authorImage: string
    /**
     * Background image for the section
     */
    backgroundImage: string
    /**
     * Optional foreground/overlay image (like a drone)
     */
    overlayImage?: string
    /**
     * Shadow color class
     * @default "shadow-sage-700/50"
     */
    shadowClass?: string
    /**
     * Optional accent color for role text
     * @default "text-lime-700"
     */
    roleColorClass?: string
}

export function ImageTestimonial({
    quoteHighlight,
    quoteText,
    authorName,
    authorRole,
    authorImage,
    backgroundImage,
    overlayImage,
    shadowClass = "shadow-sage-700/50",
    roleColorClass = "text-lime-700",
}: ImageTestimonialProps) {
    return (
        <section
            className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl ${shadowClass}`}
        >
            <div className="absolute inset-0 object-cover">
                <Image
                    alt=""
                    aria-hidden
                    src={backgroundImage}
                    fill
                    className="object-cover"
                />
            </div>
            {overlayImage && (
                <div className="absolute top-76 -right-14 w-76 sm:top-48 sm:right-3 sm:w-92 md:top-48 md:right-0 md:w-100 lg:top-64 lg:right-12 lg:w-136">
                    <Image
                        alt=""
                        aria-hidden
                        src={overlayImage}
                        width={1583}
                        height={554}
                        className="animate-hover"
                    />
                </div>
            )}
            <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
                <div>
                    <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-sage-900 md:text-2xl lg:text-3xl">
                        <p className="before:absolute before:top-0 before:right-full before:content-['\201C'] after:text-sage-700 after:content-['\201D']">
                            <strong className="font-semibold">{quoteHighlight}</strong>{" "}
                            <span className="text-sage-700">{quoteText}</span>
                        </p>
                    </blockquote>
                </div>
                <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
                        <Image
                            alt={authorName}
                            src={authorImage}
                            width={56}
                            height={56}
                            className="rounded-full border object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-base font-medium text-sage-900">
                            {authorName}
                        </div>
                        <div className={`text-sm ${roleColorClass}`}>{authorRole}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
