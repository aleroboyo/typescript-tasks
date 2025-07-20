import { useState } from "react"

type AssetName = string
type AssetCategory = "software" | "hardware"
type SerialNo = string
type AssetType = string
type AssetDescription = string

type AssetDetails = {
    name: AssetName
    category: AssetCategory
    serialNo: SerialNo
    type: AssetType
    description?: AssetDescription
}

export function RemoveAsset () {
       const [name, setName] = useState('')
       const [category, setCategory] = useState<AssetCategory>('hardware')
       const [type, setType] = useState('')
       const [serialNo, setSerialNo] = useState('')
       const [description, setDescription] = useState('')
       const [assets, setAssets] = useState<AssetDetails[]>([])
       
       function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
              e.preventDefault()
              setName('')
              setCategory('software')
              setType('')
              setSerialNo('')
              setDescription('')
       }
}