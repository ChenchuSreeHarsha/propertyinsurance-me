import React from 'react'

const AdminClaimsPage = () => {
  return (
    <div className='container-fluid'>
      <div className='mt-5 mx-3'>
        <form>
          
        </form>
      </div>
      <p>Policy Number:</p>
      <h5>Policy holder details(from backend)</h5>
      <ol>
        <li>Name</li>
        <li>Address</li>
        <li>phone</li>
        <li>Email</li>
      </ol>
      <hr/>
      <h5>Claim information</h5>
      <ul>
        <li>Date of inciedent</li>
        <li>Description of inciedent</li>
        <li>Cause of loss/damage</li>
      </ul>

      <hr/>
      <h5>photographs of damage</h5>
      <p>repair estimation</p>

      <hr></hr>
      <h5>additional attachments</h5>
      witness statement
    </div>
  )
}

export default AdminClaimsPage