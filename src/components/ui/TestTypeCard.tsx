import { cx } from "@/lib/utils"

interface TestTypeCardProps {
    title: string
    description: string
    Icon: React.ElementType
    comingSoon?: boolean
}

export function TestTypeCard({
    title,
    description,
    Icon,
    comingSoon = false,
}: TestTypeCardProps) {
    return (
        <div className="relative">
            <div
                className={cx(
                    "relative z-10 mt-0 block h-full w-full overflow-hidden",
                    "transition-all duration-180 ease-in-out",
                    "rounded-lg rounded-tr-[26px] bg-white px-4 pt-5 pb-[18px] shadow-[inset_0_0_0_1px] shadow-sage-200",
                    "before:absolute before:top-0 before:right-0 before:z-3 before:h-[30px] before:w-[30px] before:-translate-y-1/2 before:translate-x-1/2 before:rotate-45 before:bg-cream-50 before:shadow-[0_1px_0_0] before:shadow-sage-200 before:transition-all before:duration-180 before:ease-in-out before:content-['']",
                    "after:absolute after:top-0 after:right-0 after:z-2 after:size-7 after:-translate-y-2 after:translate-x-2 after:rounded-bl-lg after:border after:bg-cream-50 after:shadow-xs after:transition-all after:duration-180 after:ease-in-out after:content-['']",
                    comingSoon && "opacity-75",
                )}
            >
                {comingSoon && (
                    <div className="absolute top-2 right-8 z-20">
                        <span className="rounded-full bg-sage-100 px-2 py-0.5 text-xs font-medium text-sage-600">
                            Coming Soon
                        </span>
                    </div>
                )}
                <div>
                    <div className="relative flex items-center gap-2">
                        <div className="absolute -left-4 h-5 w-[3px] rounded-r-sm bg-lime-600" />
                        <Icon
                            className={cx(
                                "size-5 shrink-0",
                                comingSoon ? "text-sage-400" : "text-lime-600",
                            )}
                        />
                        <h3
                            className={cx(
                                "font-medium",
                                comingSoon ? "text-sage-600" : "text-sage-900",
                            )}
                        >
                            {title}
                        </h3>
                    </div>
                    <p className="mt-2 text-sage-600 sm:text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}
