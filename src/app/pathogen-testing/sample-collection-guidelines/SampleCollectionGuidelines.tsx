"use client"

import { PageWrapper } from "@/components/PageWrapper"
import { DiagonalHatching } from "@/components/ui/DiagonalHatching"
import { ReadyToGetStarted } from "@/components/ui/ReadyToGetStarted"
import { VerticalDottedLines } from "@/components/ui/VerticalDottedLines"
import {
  RiAlertLine,
  RiArrowLeftLine,
  RiCheckLine,
  RiDropLine,
  RiLeafLine,
  RiPlantLine,
} from "@remixicon/react"
import Link from "next/link"
import { useState } from "react"

type SampleType = "leaf" | "soil" | "water"

interface TabData {
  id: SampleType
  label: string
  icon: React.ReactNode
}

const tabs: TabData[] = [
  {
    id: "leaf",
    label: "Leaf Samples",
    icon: <RiLeafLine className="size-5" />,
  },
  {
    id: "soil",
    label: "Soil Samples",
    icon: <RiPlantLine className="size-5" />,
  },
  {
    id: "water",
    label: "Water Samples",
    icon: <RiDropLine className="size-5" />,
  },
]

export default function SampleCollectionGuidelines() {
  const [activeTab, setActiveTab] = useState<SampleType>("leaf")

  return (
    <PageWrapper>
      <div className="relative space-y-8 overflow-hidden">
        <VerticalDottedLines />

        {/* Breadcrumb */}
        <div className="relative z-10">
          <Link
            href="/pathogen-testing"
            className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-900 transition-colors"
          >
            <RiArrowLeftLine className="size-4" />
            Back to Pathogen Testing
          </Link>
        </div>

        {/* Header */}
        <header className="relative z-10 space-y-4">
          <h1 className="text-4xl font-bold text-sage-900 md:text-5xl">
            Sample Collection Guidelines
          </h1>
          <p className="text-lg text-sage-700 max-w-3xl">
            Proper sample collection is critical for accurate pathogen
            detection. Follow these guidelines to ensure your samples arrive in
            optimal condition for testing.
          </p>
        </header>

        {/* Important Notice */}
        <div className="relative z-10 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <RiAlertLine className="size-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-semibold text-amber-900 mb-1">
                Before You Begin
              </h2>
              <p className="text-amber-800 text-sm">
                Clean hands and sterile equipment are essential for accurate
                results. Contaminated samples may yield false positives or
                inconclusive results. Always wear clean gloves and sanitise
                collection tools between samples.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 border-b border-sage-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === tab.id
                  ? "border-lime-600 text-lime-700 bg-lime-50"
                  : "border-transparent text-sage-600 hover:text-sage-900 hover:bg-sage-50"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative z-10">
          {activeTab === "leaf" && <LeafSampleGuide />}
          {activeTab === "soil" && <SoilSampleGuide />}
          {activeTab === "water" && <WaterSampleGuide />}
        </div>

        {/* CTA */}
        <div className="relative z-10 mt-12">
          <ReadyToGetStarted
            patternId="sample-guidelines-cta"
            variant="beige"
            title="Ready to Submit Samples?"
            description="Contact us to arrange sample submission or request collection materials."
            primaryLabel="Contact Us"
            primaryHref="/contact"
            secondaryLabel="View Pricing"
            secondaryHref="/pricing"
          />
        </div>
      </div>
    </PageWrapper>
  )
}

function LeafSampleGuide() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="rounded-lg border border-sage-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-sage-900 mb-4">
          Leaf Sample Collection Overview
        </h2>
        <p className="text-sage-700 mb-4">
          Leaf samples are the most common sample type for detecting plant
          pathogens including viroids, fungi, and bacteria. Fresh, properly
          collected leaf tissue provides the best results for molecular testing.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Sample Size</div>
            <div className="text-sage-600">3-5 leaves per sample</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Storage</div>
            <div className="text-sage-600">Cool (4°C), dry conditions</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Shelf Life</div>
            <div className="text-sage-600">48-72 hours if refrigerated</div>
          </div>
        </div>
      </div>

      {/* Step by Step */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-sage-900">
          Step-by-Step Collection Process
        </h3>

        <div className="space-y-4">
          <StepCard
            step={1}
            title="Prepare Your Equipment"
            description="Gather clean, sealable plastic bags or containers, clean scissors or pruning shears, disposable gloves, and a permanent marker for labelling."
            tips={[
              "Sterilise cutting tools with 70% isopropyl alcohol between plants",
              "Use new gloves for each sample to prevent cross-contamination",
              "Pre-label bags before collecting to avoid confusion",
            ]}
          />

          <StepCard
            step={2}
            title="Select the Right Leaves"
            description="Choose leaves that best represent the condition you want to test for. For symptomatic plants, select leaves showing early symptoms. For screening healthy plants, select young, fully expanded leaves."
            tips={[
              "Avoid dead or heavily damaged tissue",
              "Include leaves from different parts of the plant if possible",
              "For HLVd testing, young leaves near growing tips are ideal",
            ]}
          />

          <StepCard
            step={3}
            title="Collect the Sample"
            description="Using clean scissors or shears, cut 3-5 leaves from the selected plant. Handle the leaves gently to minimise bruising and tissue damage."
            tips={[
              "Cut the leaf with a short section of petiole (stem) attached",
              "Avoid touching the leaf surface with bare hands",
              "Work quickly to prevent wilting",
            ]}
          />

          <StepCard
            step={4}
            title="Package the Sample"
            description="Place the collected leaves in a clean, sealable plastic bag. Gently press out excess air before sealing. Avoid crushing or folding the leaves."
            tips={[
              "Include a slightly damp (not wet) paper towel to maintain humidity",
              "Do not add water directly to the bag",
              "Ensure the bag is properly sealed",
            ]}
          />

          <StepCard
            step={5}
            title="Label and Store"
            description="Clearly label each sample with the date, plant identifier, location, and any relevant notes about symptoms observed. Store samples in a cool location until shipping."
            tips={[
              "Store at 4°C (refrigerator) if not shipping immediately",
              "Never freeze leaf samples—this damages cell structure",
              "Ship samples within 48 hours of collection",
            ]}
          />
        </div>
      </div>

      {/* What to Avoid */}
      <AvoidanceCard
        items={[
          "Collecting wet leaves (wait until dew has dried)",
          "Using dirty or rusty cutting tools",
          "Mixing samples from different plants in one bag",
          "Leaving samples in direct sunlight or hot vehicles",
          "Freezing samples unless specifically instructed",
        ]}
      />
    </div>
  )
}

function SoilSampleGuide() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="rounded-lg border border-sage-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-sage-900 mb-4">
          Soil Sample Collection Overview
        </h2>
        <p className="text-sage-700 mb-4">
          Soil samples are used to detect soil-borne pathogens such as
          Phytophthora, Pythium, and Fusarium species. Proper collection ensures
          representative samples that reflect actual field conditions.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Sample Size</div>
            <div className="text-sage-600">200-500g per sample</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Storage</div>
            <div className="text-sage-600">Cool (4°C), dark conditions</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Depth</div>
            <div className="text-sage-600">5-20cm below surface</div>
          </div>
        </div>
      </div>

      {/* Step by Step */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-sage-900">
          Step-by-Step Collection Process
        </h3>

        <div className="space-y-4">
          <StepCard
            step={1}
            title="Prepare Your Equipment"
            description="Gather a clean trowel or soil probe, sealable plastic bags or containers, disposable gloves, and a permanent marker for labelling."
            tips={[
              "Clean tools with water and 70% alcohol between sampling locations",
              "Use sturdy bags that won't puncture from soil particles",
              "Bring a cooler with ice packs for transport",
            ]}
          />

          <StepCard
            step={2}
            title="Identify Sampling Locations"
            description="For symptomatic areas, sample from the edge of affected zones where plants are showing early symptoms. For general screening, take multiple samples across the field in a systematic pattern."
            tips={[
              "Sample near the root zone of affected plants",
              "Avoid sampling from extremely wet or waterlogged areas",
              "Take at least 5-10 sub-samples for a composite sample",
            ]}
          />

          <StepCard
            step={3}
            title="Collect the Sample"
            description="Remove surface debris and organic matter. Insert your trowel or probe to a depth of 5-20cm (root zone depth). Collect approximately 200-500g of soil per sample."
            tips={[
              "Include fine roots if possible—they often harbour pathogens",
              "Mix sub-samples thoroughly in a clean bucket",
              "Remove large stones and debris but keep fine organic matter",
            ]}
          />

          <StepCard
            step={4}
            title="Package the Sample"
            description="Place the collected soil in a clean, sealable plastic bag. Press out excess air but do not compact the soil. Double-bag if the soil is very wet."
            tips={[
              "Do not add water to the sample",
              "Keep soil samples slightly moist, not dry or waterlogged",
              "Ensure bags are properly sealed to prevent drying",
            ]}
          />

          <StepCard
            step={5}
            title="Label and Store"
            description="Label each sample with the collection date, field/location identifier, GPS coordinates if available, and any relevant observations about plant health in the area."
            tips={[
              "Store at 4°C (refrigerator) until shipping",
              "Do not freeze soil samples",
              "Ship within 48-72 hours of collection",
            ]}
          />
        </div>
      </div>

      {/* What to Avoid */}
      <AvoidanceCard
        items={[
          "Sampling only from the soil surface",
          "Mixing samples from different fields or zones",
          "Collecting samples during or immediately after heavy rain",
          "Using contaminated tools from previous sampling",
          "Allowing samples to dry out or overheat",
        ]}
      />
    </div>
  )
}

function WaterSampleGuide() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="rounded-lg border border-sage-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-sage-900 mb-4">
          Water Sample Collection Overview
        </h2>
        <p className="text-sage-700 mb-4">
          Water samples from irrigation systems, dams, and reservoirs can be
          tested for water-borne pathogens. This is particularly important for
          detecting Phytophthora and Pythium in recirculating irrigation
          systems.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Sample Volume</div>
            <div className="text-sage-600">500ml - 1 litre per sample</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Storage</div>
            <div className="text-sage-600">Cool (4°C), dark conditions</div>
          </div>
          <div className="rounded-lg bg-sage-50 p-4">
            <div className="font-medium text-sage-900 mb-1">Container</div>
            <div className="text-sage-600">Sterile plastic bottle</div>
          </div>
        </div>
      </div>

      {/* Step by Step */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-sage-900">
          Step-by-Step Collection Process
        </h3>

        <div className="space-y-4">
          <StepCard
            step={1}
            title="Prepare Your Equipment"
            description="Gather sterile collection bottles (we can provide these), disposable gloves, a permanent marker, and a cooler with ice packs for transport."
            tips={[
              "Use only sterile or new bottles—never reuse containers",
              "Rinse new bottles three times with the water to be sampled",
              "Prepare labels in advance",
            ]}
          />

          <StepCard
            step={2}
            title="Identify Sampling Points"
            description="For irrigation systems, sample from multiple points including the water source, after filters, and at emitters. For dams, sample at multiple locations and depths."
            tips={[
              "Sample at the same time of day for consistency",
              "Include samples from areas where plants show symptoms",
              "Note water temperature at time of collection",
            ]}
          />

          <StepCard
            step={3}
            title="Collect the Sample"
            description="Submerge the bottle about 20-30cm below the surface, allowing it to fill completely. For tap/pipe samples, run water for 1-2 minutes before collecting."
            tips={[
              "Avoid touching the inside of the bottle or cap",
              "Fill the bottle completely, leaving no air space",
              "Include any visible sediment or organic debris",
            ]}
          />

          <StepCard
            step={4}
            title="Seal and Store"
            description="Secure the cap tightly immediately after collection. Place the sample in a cooler with ice packs. Keep samples cool and out of direct sunlight."
            tips={[
              "Transport samples upright to prevent leakage",
              "Maintain temperature at 4°C during transport",
              "Do not freeze water samples",
            ]}
          />

          <StepCard
            step={5}
            title="Label and Document"
            description="Label each sample with the collection date, time, location, water source type (dam, bore, tap, etc.), and any relevant observations about water clarity or odour."
            tips={[
              "Record pH and temperature if measuring equipment is available",
              "Note any recent chemical treatments to the water",
              "Ship samples within 24-48 hours of collection",
            ]}
          />
        </div>
      </div>

      {/* What to Avoid */}
      <AvoidanceCard
        items={[
          "Using non-sterile or previously used containers",
          "Collecting samples during or immediately after treatment",
          "Sampling only from the water surface",
          "Allowing samples to freeze or overheat",
          "Delaying shipment beyond 48 hours",
        ]}
      />
    </div>
  )
}

interface StepCardProps {
  step: number
  title: string
  description: string
  tips: string[]
}

function StepCard({ step, title, description, tips }: StepCardProps) {
  return (
    <div className="rounded-lg border border-sage-200 bg-white p-6 overflow-hidden relative">
      <DiagonalHatching
        patternId={`step-${step}-hatching`}
        strokeClass="stroke-sage-100/50"
        maskDirection="both"
      />
      <div className="relative z-10">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lime-800 font-semibold">
            {step}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-sage-900 mb-2">{title}</h4>
            <p className="text-sage-700 text-sm mb-4">{description}</p>
            <div className="space-y-2">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <RiCheckLine className="size-4 text-lime-600 shrink-0 mt-0.5" />
                  <span className="text-sage-600">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface AvoidanceCardProps {
  items: string[]
}

function AvoidanceCard({ items }: AvoidanceCardProps) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6">
      <h3 className="font-semibold text-red-900 mb-4 flex items-center gap-2">
        <RiAlertLine className="size-5" />
        What to Avoid
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-red-600 font-bold">✕</span>
            <span className="text-red-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
