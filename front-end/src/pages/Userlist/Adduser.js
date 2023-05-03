import React from 'react'
import { Link } from 'react-router-dom'

function Adduser()  {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>
                 Add User 
                  <Link to={'/pages/user/user'} className="btn btn-primary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                      <form>
                        <div className='form-group mb-3'>
                            <label>User Name</label>
                            <input type="text" name="" value="" className='form-control'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Email</label>
                            <input type="email" name="" value="" className='form-control'/>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Password</label>
                            <input type="text" name="" value="" className='form-control'/>
                        </div>
                        <div className='form-group mb-3'>
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                      </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default Adduser
