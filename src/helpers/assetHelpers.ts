export type AssetName = string
export type AssetCategory = "software" | "hardware" | ""
export type SerialNo = string
export type AssetType = string
export type AssetDescription = string

export type AssetDetails = {
    name: AssetName
    category: AssetCategory
    serialNo: SerialNo
    type: AssetType
    description?: AssetDescription
}

export function resetAssetForm(setters: {
    setName: React.Dispatch<React.SetStateAction<AssetName>>
    setCategory: React.Dispatch<React.SetStateAction<AssetCategory>>
    setType: React.Dispatch<React.SetStateAction<AssetType>>
    setSerialNo: React.Dispatch<React.SetStateAction<SerialNo>>
    setDescription: React.Dispatch<React.SetStateAction<AssetDescription>>
  }) {

    setters.setName('')
    setters.setCategory('')
    setters.setType('')
    setters.setSerialNo('')
    setters.setDescription('')
}

export async function fetchHook<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data)
        }, 500)
    })
}