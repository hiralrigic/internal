import React, { useState } from 'react'
import axios from 'axios'
import { Modal} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate()

  function handleSubmit(e) {
    // e.preventDefault()
    const data = {
      email: username,
      password: password,
    }
    axios
      .post("http://127.0.0.1:8000/api/login", data)
      .then((response) => {
        if (response.status === 200) {
          var token = localStorage.setItem('platformDashToken', response.data.data.token)
          console.log(response.data.data.token)
          navigate('/dashboard')
        } 
        else {
          setPopup(true);
          // alert(response.data.success)
        }
      })
      .catch((error) => {
        setPopup(true);
        // alert(error.response.data.message)
       
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => setUsername(e.target.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleSubmit}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                      <Link to="/forgotpassword">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      {
        popup === false?
        <></>
        :
        <>
        <Modal show={popup}>
       
              <Modal.Header>
                <Modal.Title>Alert</Modal.Title>
                <button
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setPopup(false)}
                ></button>
              </Modal.Header>
              <Modal.Body>username or password incorrect</Modal.Body>
              {/* <Modal.Footer>
                <Button variant="secondary" onClick={() => setModelShow(false)}>
                  Close
                </Button>
              </Modal.Footer> */}
         
        </Modal>
        </>
      }
    </div>
  )
}

export default Login
