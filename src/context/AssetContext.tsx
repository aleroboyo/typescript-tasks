/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

type AssetCategory = "software" | "hardware" | ""

export type Asset = {
  name: string
  category: AssetCategory
  type: string
  serialNo: string
  description?: string
}

type AssetContextType = {
  assets: Asset[]
  addAsset: (asset: Asset) => boolean
}

const AssetContext = createContext<AssetContextType | undefined>(undefined)

export function useAssetContext() {
  const context = useContext(AssetContext)
  if (!context) throw new Error("AssetContext must be used within AssetProvider")
  return context
}

export function AssetProvider({ children }: { children: ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>([])

  function addAsset(asset: Asset): boolean {
    if (
      !asset.name.trim() ||
      !asset.category.trim() ||
      !asset.serialNo.trim() ||
      !asset.type.trim()
    ) {
      alert("Please fill all required fields!")
      return false
    }

    setAssets(prev => [...prev, asset])
    alert("Asset added successfully!")
    return true
  }

  return <AssetContext.Provider value={{ assets, addAsset }}>{children}</AssetContext.Provider>
}
