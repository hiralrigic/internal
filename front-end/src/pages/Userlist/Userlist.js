import React from 'react'
import { Link } from 'react-router-dom'

function Userlist()  {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  User List
                  <Link to={'/pages/user/adduser'} className="btn btn-primary btn-sm float-end">
                    Add User
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                      
              <div className="table-responsive pt-1">
                <table className="table table-bordered">
                     <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>                 
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td>1</td>
                            <td>Herman Beck</td>
                            <td>herman@gmail.com</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Messsy Adam</td>
                            <td>messy@gmail.com</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John Richards</td>
                            <td>john@gmail.com</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Peter Meggik</td>
                            <td>peter@gmail.com</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Edward</td>
                            <td>edwards@gmail.com</td>
                            <td>123456</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>John Doe</td>
                            <td>john@gmail.com</td>
                            <td>123456</td>
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

export default Userlist
