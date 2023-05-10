import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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

function Userlist() {
  const [value, setValue] = useState([])

  useEffect(() => {
    fetchValue()
  }, [])

  const fetchValue = () => {
    axios({
      method: 'get',

      url: 'http://127.0.0.1:8000/api/show',
    })
      .then(function (response) {
        setValue(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  // deleteRow(id,e)
  // {
      
  //   axios.delete('http://127.0.0.1:8000/api/destroy/${id}')  
  //     .then(response => {  
  //       console.log(response);  
  //       console.log(response.data);  
    
  //       const posts = this.state.posts.filter(row => row.id !== id);  
  //       this.setState({ posts });  
  //     })  
    
  // }  

  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={12}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <div className="card-header">
                <h4>
                  User List
                  <Link to={'/pages/user/adduser'} className="btn btn-primary btn-sm float-end">
                    Add User
                  </Link>
                </h4>
              </div>

              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.length > 0 &&
                      value.map((row, key) => (
                        <tr key={key}>
                        <td>{row.id}</td>

                          <td>{row.name}</td>
                          <td>{row.email}</td>

                          <td>
                            <Link to={'/pages/user/edituser/'}$  className="btn btn-success me-2">
                              Edit
                            </Link>
                            <CButton variant="danger" onClick={(e) => this.deleteRow(row.id, e)} >Delete</CButton>
                          </td>
                        </tr>
                      ))}
                   
                  </tbody>
                </table>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Userlist
