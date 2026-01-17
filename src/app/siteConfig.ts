import type { RemixiconComponentType } from "@remixicon/react"
import {
  RiBugLine,
  RiDropLine,
  RiPlantLine,
  RiVirusLine,
} from "@remixicon/react"

export interface TestService {
  id: string
  title: string
  description: string
  icon: RemixiconComponentType
  available: boolean
  price: number
  isDefault?: boolean
}

export const testServices: TestService[] = [
  {
    id: "hlvd",
    title: "HLVd Testing",
    description:
      "Hop Latent Viroid (HLVd) detection for cannabis, hemp, hops, and other crops. PCR-based molecular testing identifies viroid infections before symptoms appear, preventing yield losses and quality degradation.",
    icon: RiVirusLine,
    available: true,
    price: 400,
    isDefault: true,
  },
  {
    id: "phytophthora",
    title: "Phytophthora",
    description:
      "Phytophthora species detection for root rot, crown rot, and stem rot diseases. Critical for avocado, citrus, tomato, pepper, and ornamental plant producers. Molecular diagnostics identify species-level infections.",
    icon: RiDropLine,
    available: false,
    price: 400,
  },
  {
    id: "pythium",
    title: "Pythium",
    description:
      "Pythium species testing for root rot and damping-off diseases in seedlings, vegetables, cannabis, and ornamentals. Essential for greenhouse operations and hydroponic systems.",
    icon: RiPlantLine,
    available: false,
    price: 400,
  },
  {
    id: "fusarium",
    title: "Fusarium",
    description:
      "Fusarium wilt, root rot, and crown rot testing for cannabis, tomato, banana, ornamentals, and field crops. Species-level identification helps target treatment strategies.",
    icon: RiBugLine,
    available: false,
    price: 450,
  },
]

export const siteConfig = {
  name: "Mycelico",
  url: "https://mycelico.co.za",
  description:
    "Professional plant pathogen testing laboratory in South Africa. Molecular diagnostics for HLVd (Hop Latent Viroid), Fusarium, Phytophthora, and Pythium. Serving cannabis growers, fruit producers, and agricultural operations across South Africa with fast, accurate, affordable testing services.",
  baseLinks: {
    home: "/",
  },
}
