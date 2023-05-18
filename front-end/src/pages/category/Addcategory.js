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

    const handleSubmit = () => {
        var token = localStorage.getItem('platformDashToken')
        // console.log(token)
        let data = JSON.stringify({
            "name": name
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/category',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                navigate('/category')
            })
            .catch((error) => {
                console.log(error);
            });
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
