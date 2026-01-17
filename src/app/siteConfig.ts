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
      "Hop Latent Viroid detection for any crop type. Identify infections early before they spread.",
    icon: RiVirusLine,
    available: true,
    price: 400,
    isDefault: true,
  },
  {
    id: "phytophthora",
    title: "Phytophthora",
    description:
      "Water mould pathogen testing for root rot and crown rot diseases.",
    icon: RiDropLine,
    available: false,
    price: 400,
  },
  {
    id: "pythium",
    title: "Pythium",
    description:
      "Root rot and damping-off disease detection for seedlings and mature plants.",
    icon: RiPlantLine,
    available: false,
    price: 400,
  },
  {
    id: "fusarium",
    title: "Fusarium",
    description:
      "Fusarium wilt and root rot testing across a range of crop species.",
    icon: RiBugLine,
    available: false,
    price: 450,
  },
]

export const siteConfig = {
  name: "Mycelico",
  url: "https://mycelico.co.za",
  description:
    "Professional plant pathogen testing services for South African agriculture. Fast, accurate diagnostic services for crop disease detection and management.",
  baseLinks: {
    home: "/",
  },
}
