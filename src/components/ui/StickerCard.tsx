import { cx } from "@/lib/utils"

export const StickerCard = ({
  title,
  description,
  Icon,
}: {
  title: string
  description: string
  Icon: React.ElementType
}) => (
  <div className="relative">
    <div
      className={cx(
        "relative z-10 block h-full w-full overflow-hidden",
        "rounded-lg border border-sage-200 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow",
      )}
    >
      <div>
        <div className="relative flex items-center gap-2">
          <div className="absolute -left-4 h-5 w-[3px] rounded-r-sm bg-lime-600" />
          <Icon className="size-5 shrink-0 text-lime-600" />
          <h3 className="font-medium text-sage-900">{title}</h3>
        </div>
        <p className="mt-2 text-sage-700 sm:text-sm">{description}</p>
      </div>
    </div>
  </div>
)
