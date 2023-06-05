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



function Product() {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchValue()
  }, [])

  const fetchValue = () => {
    var token = localStorage.getItem('platformDashToken')
    // console.log(token)
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/products',
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
  const deleteData = async (e) => {
    console.log(e)
    var token = localStorage.getItem('platformDashToken')
    // console.log(token)

    const header = { 'Authorization': `Bearer ${token}` }
    // const url ='http://127.0.0.1:8000/api/products/'+e
    console.log(header)
    axios({
      method: 'delete',
      url: 'http://127.0.0.1:8000/api/products/' + e,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(function (response) {
        fetchValue()

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
                Product List
                <Link to={'/addproduct'} className="btn btn-primary btn-sm float-end">
                  Add Product
                </Link>
              </h4>
            </div>
            <div className="card-body">

              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Product Name</th>
                      <th>Detail</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((row, index) => (
                        <>    <tr>
                          <td>{index + 1}</td>
                          <td>{row.name}</td>
                          <td>{row.detail}</td>
                          <td>
                            <Link to={`/editproduct/${row.id}`} $ className="btn btn-success me-2">
                              Edit
                            </Link>
                            <CButton variant="danger" value={row.id} onClick={(e) => {if (window.confirm('Are you sure you wish to delete this item?'))deleteData(e.target.value)} }>Delete</CButton>
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

export default Product
