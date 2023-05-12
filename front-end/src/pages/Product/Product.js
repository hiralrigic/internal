import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



function Product() {
  const [value, setValue] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchValue()
  }, [])

  const fetchValue = () => {
    axios({
      method: 'get',

      url: 'http://127.0.0.1:8000/api/products',
    })
      .then(function (response) {
        setValue(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Product List
                <Link to={'/addproduct'} className="btn btn-primary btn-sm float-end">
                  Add Product
                </Link>
              </h4>
            </div>
            <div className="card-body">

              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Product Name</th>
                      <th>Detail</th>
                      <th>Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {value.length > 0 &&
                      value.map((row, key) => (
                        <tr key={key}>
                          <td>{row.id }</td>
                          <td>{row.name}</td>
                          <td>{row.detail}</td>

                          <td>
                            {/* <CButton variant="danger" onClick={() => deleteData(row.id)} >Delete</CButton> */}
                          </td>
                        </tr>
                      ))}


                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Product
