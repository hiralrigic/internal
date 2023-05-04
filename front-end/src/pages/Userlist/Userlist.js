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
        rows = response.data.data
        setValue(rows)
        //console.log(rows);
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
                          <td>{row.name}</td>
                          <td>{row.email}</td>

                          <td>
                            <Link to={''} className="btn btn-success me-2">
                              Edit
                            </Link>
                            <CButton variant="danger">Delete</CButton>
                          </td>
                        </tr>
                      ))}
                    {/* {value ? (
                            value.map((row, i) => (
                              <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.password}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td>No Data Found</td>
                            </tr>
                          )} */}
                    {/* <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>herman@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Messsy Adam</td>
                            <td>messy@gmail.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John Richards</td>
                            <td>john@gmail.com</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Peter Meggik</td>
                            <td>peter@gmail.com</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Edward</td>
                            <td>edwards@gmail.com</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>John Doe</td>
                            <td>john@gmail.com</td>
                        </tr> */}
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
