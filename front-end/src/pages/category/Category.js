import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroupText,
  CRow,
} from '@coreui/react'

function Category() {

  const [data, setData] = useState([])
  // const [Value, setValue] = useState([])
  // const navigate = useNavigate()

  useEffect(() => {

    fetchValue()
  }, [])

  const fetchValue = () => {
    var token = localStorage.getItem('platformDashToken')
    // console.log(token)
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/category',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(function (response) {
       var response = response.data.data
        setData(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  //delete record
  const deleteData = id  => {
    var token = localStorage.getItem('platformDashToken')
    // console.log(token)

    const header = { 'Authorization': `Bearer ${token}` }

    axios.delete(`http://127.0.0.1:8000/api/category/${id}`, header)
    .then(function (response) {
      var response = response.data.data
       setData(response)
     })
     .catch(function (error) {
       console.log(error)
     })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Category List
                <Link to={'/addcategory'} className="btn btn-primary btn-sm float-end">
                  Add Category
                </Link>
              </h4>
            </div>
            <div className="card-body">

              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      data.map((element, index) => (
                        <>    <tr>
                          <td>{index + 1}</td>
                          <td>{element.name}</td>
                          <td>
                            {/* <Link to={`/editcategory/${element.id}`} $ className="btn btn-success me-2">
                              Edit
                            </Link> */}
                            <CButton variant="danger" onClick={() => deleteData(element.id)} >Delete</CButton>
                          </td>
                        </tr></>
                      ))
                    }
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Category
