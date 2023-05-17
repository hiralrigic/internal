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

function Addproduct() {

  const [name, setProductname] = useState()
  const [detail, setDetail] = useState()
  const navigate = useNavigate()

  function handleSubmit(e) {
    // e.preventDefault()
    const data = {
      name: name,
      detail: detail,

    }
    axios
      .post('http://127.0.0.1:8000/api/products', data)

      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.success)
          navigate('/product')
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
                    Add Product
                    <Link to={'/product'} className="btn btn-primary btn-sm float-end">
                      Back
                    </Link>
                  </h4>
                </div>
                <CCol md={12}>
                  <CFormInput
                    label="Name"
                    placeholder="Product Name"
                    autoComplete="name"
                    onChange={(e) => setProductname(e.target.value)}
                  />
                </CCol>
                <CCol md={12}>
                  <CFormInput
                    label="Detail"
                    placeholder="Detail"
                    autoComplete="detail"
                    onChange={(e) => setDetail(e.target.value)}
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

export default Addproduct
