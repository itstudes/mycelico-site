import { testServices } from "@/app/siteConfig"
import { TestTypeCard } from "./TestTypeCard"

export function AvailableTestingServices() {
    return (
        <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-sage-900 mb-6">
                Available Testing Services
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {testServices.map((test) => (
                    <TestTypeCard
                        key={test.id}
                        Icon={test.icon}
                        title={test.title}
                        description={test.description}
                        comingSoon={!test.available}
                    />
                ))}
            </div>
        </div>
    )
}
