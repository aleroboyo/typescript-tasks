import { Link } from 'react-router'
import { AddAsset } from '../components/AddAsset'
import { RemoveAsset } from '../components/RemoveAsset'
import './CreateAssetPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export function CreateAssetPage () {
    return (
        <>
            <title>Create Asset</title>

            <div className='container'>
                <div>
                    <Link to='/' className='return-btn'><FontAwesomeIcon icon={faChevronLeft}/> Asset</Link>
                </div>

                <div className='form-container'>
                    <form>
                        <div className='form-pt'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text' placeholder="Enter Name"></input>
                            </div>

                            <div className='form-group'>
                                <label>Category</label>
                                <select>
                                    <option>Select Category</option>
                                    <option>Hardware</option>
                                    <option>Software</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-pt'>
                            <div className='form-group'>
                                <label>Type</label>
                                <input type="text" placeholder="Enter Type"></input>
                            </div>

                            <div className='form-group'>
                                <label>Serial Number</label>
                                <input type='text' placeholder="Enter Serial Number"></input>
                            </div>
                        </div>

                        <div className='form-pt'>
                            <div className='form-group' id='descriptionInfo'>
                                <label>Description</label>
                                <input type='text' placeholder="Enter Note..." id='descriptionInput'></input>
                            </div>
                        </div>
                    </form>
                    

                    <div className='action-btns'>
                        <button id='clear-btn' onClick={RemoveAsset}>Cancel</button>
                        <button id='addAsset-btn' onClick={AddAsset}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}