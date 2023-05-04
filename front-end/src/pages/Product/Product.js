import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Product() {
 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Product List
                <Link to={'/pages/Product/Addproduct'} className="btn btn-primary btn-sm float-end">
                  Add Product
                </Link>
              </h4>
            </div>
            <div className="card-body">
              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
