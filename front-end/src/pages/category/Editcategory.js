import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
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


function Editcategory() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState("")
    const [getData, setgetData] = useState({
        category: '',
    })

    useEffect(() => {

        fetchValue()
    }, [])
    const fetchValue = async () => {

        var token = localStorage.getItem('platformDashToken')
        // console.log(token)
        await axios.get(`http://127.0.0.1:8000/api/category/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then((response) => {
                const { category } = response.data.data;

                setCategory(category);
                console.log(data)
            });

    }

    const handlecategory = (event) => {
        setCategory(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var token = localStorage.getItem('platformDashToken');
        let data = JSON.stringify({
            "category": category,
        });
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:8000/api/category/' + id,
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
    };

    return (
        <CContainer>
            <CRow className="justify-content-center">
                <CCol md={9}>
                    <CCard className="mx-4">
                        <CCardBody className="p-4">
                            <CForm onSubmit={handleSubmit} id="data" clamd={12}>
                                <div className="card-header">
                                    <h4>
                                        Edit Category
                                        <Link to={'/category'} className="btn btn-primary btn-sm float-end">
                                            Back
                                        </Link>
                                    </h4>
                                </div>
                                <CCol md={12}>
                                    <CFormInput
                                        label="No"
                                        value={id}
                                        readOnly='readOnly'

                                    />
                                </CCol>
                                <CCol md={12}>
                                    <CFormInput
                                        label='Category'
                                        value={category}
                                        onChange={handlecategory}

                                    />
                                </CCol>

                                <CCol md={12}>
                                    <CButton type="submit" color="success" >
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
}

export default Editcategory
