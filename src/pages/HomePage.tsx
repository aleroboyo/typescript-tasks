import { fetchHook } from '../helpers/assetHelpers'
import './HomePage.css'
import { Link } from 'react-router'
import { useAssetContext } from "../context/AssetContext"

export function HomePage () {
    const { assets } = useAssetContext()

    return (
        <>
            <title>Home</title>

            <div className='header'>
                <h1 className='assetHead'>Asset</h1>
                <input className='searchInput' placeholder='Input Asset Type'></input><button className='searchBtn' onClick={fetchHook}><img className='searchBtn-img' src='src/assets/search.png'/></button>
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
                        {assets.map((asset, index) => (
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