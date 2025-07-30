import { useState } from 'react'
import { fetchHook } from '../helpers/assetHelpers'
import './HomePage.css'
import { Link } from 'react-router'
import { useAssetContext } from "../context/AssetContext"

export function HomePage () {
    const { assets } = useAssetContext()
    const [input, setInput] = useState('')
    const [filteredAssets, setFilteredAssets] = useState(assets)

    const handleFetch = async () => {
        const filtered = assets.filter(asset =>
            asset.serialNo.toLowerCase().includes(input.toLowerCase()) || asset.name.toLowerCase().includes(input.toLowerCase()) || asset.category.toLowerCase().includes(input.toLowerCase()) ||asset.type.toLowerCase().includes(input.toLowerCase())
        )

        const result = await fetchHook<typeof filtered>(filtered)
        setFilteredAssets(result)

        /*if (KeyboardEvent === "Enter") {
            handleFetch ()
        }*/
    }

    return (
        <>
            <title>Home</title>

            <div className='header'>
                <h1 className='assetHead'>Asset</h1>
                <input className='searchInput' placeholder='Search...' value={input} onChange={(e) => setInput(e.target.value)}></input><button className='searchBtn' onClick={handleFetch}><img className='searchBtn-img' src='/assets/search.png'/></button>
                <Link to='create-asset'> <button className='createButton'> + Create</button> </Link> 
            </div>

            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th className='thead-details'>Serial Number</th>
                            <th className='thead-details'>Name</th>
                            <th className='thead-details'>Category</th>
                            <th className='thead-details' >Type</th>
                            <th className='thead-details'>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAssets.map((asset, index) => (
                            <tr key={index}>
                                <td>{asset.serialNo}</td>
                                <td>{asset.name}</td>
                                <td>{asset.category}</td>
                                <td>{asset.type}</td>
                                <td>{asset.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}