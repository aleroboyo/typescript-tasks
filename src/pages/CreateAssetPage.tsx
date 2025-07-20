import { Link } from 'react-router'
import './CreateAssetPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useNavigate } from 'react-router'
import { resetAssetForm } from '../helpers/assetHelpers'
import { useAssetContext } from '../context/AssetContext'

type AssetCategory = "software" | "hardware" | ""

export function CreateAssetPage() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState<AssetCategory>("")
  const [type, setType] = useState("")
  const [serialNo, setSerialNo] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()
  const { addAsset } = useAssetContext()

  const handleAddAsset = (e: React.MouseEvent) => {
    e.preventDefault()

    const newAsset = { name, category, type, serialNo, description }

    const success = addAsset(newAsset)
    if (success) {
      resetAssetForm({ setName, setCategory, setType, setSerialNo, setDescription })
      navigate("/")
    }
  }

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault()
    resetAssetForm({ setName, setCategory, setType, setSerialNo, setDescription })
  }

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
                <input type='text' placeholder="Enter Name" className='nameInput' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className='form-group'>
                <label>Category</label>
                <select className='categoryInput' value={category} onChange={(e) => setCategory(e.target.value as AssetCategory)}>
                  <option value=''>Select Category</option>
                  <option value='hardware'>Hardware</option>
                  <option value='software'>Software</option>
                </select>
              </div>
            </div>

            <div className='form-pt'>
              <div className='form-group'>
                <label>Type</label>
                <input type="text" placeholder="Enter Type" className='typeInput' value={type} onChange={(e) => setType(e.target.value)} />
              </div>

              <div className='form-group'>
                <label>Serial Number</label>
                <input type='text' placeholder="Enter Serial Number" className='serialNoInput' value={serialNo} onChange={(e) => setSerialNo(e.target.value)} />
              </div>
            </div>

            <div className='form-pt'>
              <div className='form-group' id='descriptionInfo'>
                <label>Description</label>
                <input type='text' placeholder="Enter Note..." id='descriptionInput' className='description-Input' value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
            </div>
          </form>

          <div className='action-btns'>
            <button id='clear-btn' onClick={handleReset}>Cancel</button>
            <button id='addAsset-btn' onClick={handleAddAsset}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}
