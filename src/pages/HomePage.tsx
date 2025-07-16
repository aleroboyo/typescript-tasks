import { FetchHook } from '../components/FetchHook'
import './HomePage.css'
import { Link } from 'react-router'

export function HomePage () {
    return (
        <>
            <title>Home</title>

            <div className='header'>
                <h1 className='assetHead'>Asset</h1>
                <input className='searchInput' placeholder='Input Asset Type'></input><button className='searchBtn' onClick={FetchHook}><img className='searchBtn-img' src='src/assets/search.png'/></button>
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
                        <tr>
                            <td>6466</td>
                            <td>Hp Laptop</td>
                            <td>Hardware</td>
                            <td>Laptop</td>
                            <td>This is a Laptop</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}