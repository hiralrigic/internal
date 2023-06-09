import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom'
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
import { cilLockLocked, cilUser } from '@coreui/icons'


function Edituser() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [name, setUserName] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
 

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`).then((response) => {
      const {name,email} = response.data.users;
    
      setUserName(name);
      setUserEmail(email);
      setUserPassword(password);
    

    }).catch(error => {
      alert("Error Ocurred getting user detail:" + error);
    });
  }, [])

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };
 
  const submitActionHandler = (event) => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/update/${id}`,
      {
        id: id,
        name: name,
        email: email,
        password: password,
        // repassword: repassword
      })
      .then((response) => {
        console.log(response.data)
        // alert("User " + id + " updated!");
        navigate('/user')

      }).catch(error => {
        alert("Error Ocurred updating user:" + error);
      });

  };

  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm onSubmit={submitActionHandler} id="data" clamd={12}>
                <div className="card-header">
                  <h4>
                     Edit User
                    {/* <Link to={''} className="btn btn-primary btn-sm float-end">
                      Back
                    </Link> */}
                  </h4>
                  </div>
                  <CCol md={12}>
                    <CFormInput
                      label="No"
                      value={id} readonly='readonly'

                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      label="Name"
                      placeholder="Username"
                      autoComplete="username"
                      value={name}
                      onChange={nameChangeHandler}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      label="Email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={emailChangeHandler}
                    />
                  </CCol>
                  <CCol md={12}>
                    <CFormInput
                      label="Password"
                      placeholder="Password"
                      autoComplete="Password"
                      onChange={passwordChangeHandler}
                    />
                  </CCol>
               
                  <CCol md={12}>
                    <CButton type="submit" color="success">
                      Update
                    </CButton>
                  </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
  {
    /* </div> */
  }
}

export default Edituser
