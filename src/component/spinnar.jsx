import React from 'react'

export default function Spinnar() {
  return (
	<>
		<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
		<span className="visually-hidden">Loading...</span>
	</>
  )
}
