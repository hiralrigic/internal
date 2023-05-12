import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
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
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

function Adduser() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repassword, setRPassword] = useState()
  const navigate = useNavigate()

  function handleSubmit(e) {
    // e.preventDefault()
    const data = {
      name: username,
      email: email,
      password: password,
      c_password: repassword,
    }
    axios
      .post('http://127.0.0.1:8000/api/register', data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.success)
          navigate('/user')
        } else {
          alert(response.data.success)
        }
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm clamd={12}>
                <div className="card-header">
                  <h4>
                    Add User
                    <Link to={'/user'} className="btn btn-primary btn-sm float-end">
                      Back
                    </Link>
                  </h4>
                </div>
                <CCol md={12}>
                  <CFormInput
                    label="Name"
                    placeholder="Username"
                    autoComplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    label="Email"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    label="Password"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </CCol>
                <CCol md={12}>
                  {/* <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText> */}
                  <CFormInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    onChange={(e) => setRPassword(e.target.value)}
                  />
                </CCol>
                <CCol md={12}>
                  <CButton type="submit" color="success" onClick={handleSubmit}>
                    Submit
                  </CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
 
}

export default Adduser
