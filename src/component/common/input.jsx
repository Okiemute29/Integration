import { useState } from "react"
import search from "../../assets/images/search-normal.svg"


export default function InputField({label, type, name, placeholder, value, inputClass, setValue, readOnly, hidden }) {
	const [showPassword, setShowPassword] = useState(false)

	

	const handleInputChange = (e) =>{
		const {name, value} = e.target 
		setValue(prv => ({...prv, [name]: value}))
	}


  return (
	<>
	  
		{ type === "password" ?
			<>
				<div
					className="form-icon form-icon-right passcode-switch lg"
					onClick={()=> setShowPassword(prv => !prv)}
				>
					<em className={`con-show icon ni ${showPassword ? 'ni ni-eye-off-fill' : 'ni-eye-fill'} `} />
				</div>
				{label && <label  className="mb-1"><strong>{label}</strong></label>}
				<input
					type={`${showPassword ? 'text' : type}`}
					name={name}
					className={`form-control ${inputClass && inputClass}`}                              
					placeholder={placeholder}
					hidden={hidden}
					value={value}
					onChange={handleInputChange}
					readOnly={readOnly}
					required
				/>
			</>
			:
			<>
				{label && <label className="mb-1"><strong>{label}</strong></label>}
				<input
					type={type}
					name={name}
					className={`form-control ${inputClass && inputClass}`}                              
					placeholder={placeholder}
					hidden={hidden}
					value={value}
					onChange={handleInputChange}
					readOnly={readOnly}
					required
				/>
				{name?.toLowerCase() === "search" && <div className="search-icon" ><img src={search} alt="search" /></div> }
			</>
		}
	</>
  )
}
