import React, { useState } from 'react';
import authImg from "../assets/images/auth/smiling-businesswoman.jpg"
import InputField from '../component/common/input';
import _route from '../constants/routes';
import { useNavigate } from 'react-router-dom';
import useLoginUser from '../hooks/auth/uselogin';

const LoginComponent = () => {
	const {loginUser, loading} = useLoginUser()
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	const handleSubmit = async (e)=>{
		e.preventDefault()

		await loginUser(formData) && navigate(_route._dashboard)
	}
  return (
    <div className="authincation"
		style={{height: '100vh'}}
	>
      <div
        className="container h-100"
        style={{
          flexDirection: 'row',
          display: 'flex',
          margin: 0,
          padding: 0,
          maxWidth: 'inherit',
        }}
      >
        <div className="auth-background h-100" style={{ width: 'inherit' }}>
          <div
            className="h-100"
            style={{
              backgroundImage: `url(${authImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
        <div
          className="auth-box row justify-content-center h-100 align-items-center"
          style={{ padding: '0 80px', width: 'inherit', margin: '0 !important' }}
        >
          <div className="auth-form-container col-lg">
            <h2 style={{textAlign: "center", color: "red"}}>
              LOGO
            </h2>
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <h4 className="text-center mb-4">Sign in your account</h4>
                    <form onSubmit={handleSubmit} >
                      <div className="form-group">
																		
						<InputField 
							label="Email"
							name="email"
							type="email"
							placeholder="Enter email"
							value={formData.email}
							setValue={setFormData}
						/>
                      </div>
                      <div className="form-group relative">											
						<InputField 
							label="Password"
							name="password"
							type="password"
							placeholder="Enter password"
							value={formData.password}
							setValue={setFormData}
						/>
                      </div>
                      <div className="form-row d-flex justify-content-between mt-4 mb-2"></div>
                      <div className="text-center">
                        <button type="submit" disabled={loading} className="btn btn-primary btn-block">
							{loading ?  <i className="animated spinner-border"></i> : "Sign Me In"}
                        </button>
                      </div>
                      {/* <div className="text-center mt-1">
                        <p>
                          Don't have an account?{' '}
                          <Link className="btn-link" to={_route._signup}>
                            Signup
                          </Link>
                        </p>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
