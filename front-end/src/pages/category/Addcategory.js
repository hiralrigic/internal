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

function Addcategory() {

    const [name, setCategorytname] = useState()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    function handleSubmit(e) {
        // e.preventDefault()
        var token = localStorage.getItem('platformDashToken')
        // console.log(token)
        const data = {
            name: name,
        }
        const header = { 'Authorization': `Bearer ${token}` }
        axios
            .post('http://127.0.0.1:8000/api/category', data, header)
            .then(function (response) {

                var response = response.data.data
                setData(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    // .then((response) => {
    //     if (response.status === 200) {
    //         console.log(response.data.success)
    //         navigate('/category')
    //     } else {
    //         alert(response.data.success)
    //     }
    // })
    // .catch((error) => {
    //     alert(error.response.data.message)
    // })

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
                                        Add Category
                                        <Link to={'/category'} className="btn btn-primary btn-sm float-end">
                                            Back
                                        </Link>
                                    </h4>
                                </div>
                                <CCol md={12}>
                                    <CFormInput
                                        label="Name"
                                        placeholder="Category Name"
                                        autoComplete="name"
                                        onChange={(e) => setCategorytname(e.target.value)}
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

export default Addcategory
