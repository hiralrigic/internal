import React, { useState } from 'react'
import axios from 'axios'

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


function Resetpassword() {


    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8}>
                        <CCardGroup>
                            <CCard className="p-4">
                                <CCardBody>
                                    <CForm>
                                        <h1>Reset Password</h1>


                                        <CInputGroup className="mb-2">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput

                                                type="password"
                                                name="password"
                                                placeholder="New-Password"
                                                autoComplete="new-password"
                                            />
                                        </CInputGroup>
                                        <CInputGroup className="mb-2">
                                            <CInputGroupText>
                                                <CIcon icon={cilLockLocked} />
                                            </CInputGroupText>
                                            <CFormInput

                                                name="passwordConfirm"
                                                type="password"
                                                placeholder="Confirm-Password"
                                                autoComplete="confirm-password"
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={6}>
                                                <Link to="/">
                                                    <CButton color="primary" className="px-4">
                                                        Reset Password
                                                    </CButton>
                                                </Link>
                                            </CCol>

                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>

                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Resetpassword
