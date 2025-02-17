import React, { useContext, useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import {  integerRege6, regexHouseNo, regexPanCard, regexStreet, regexUsername } from './RegularExpressions';
import PropertyInsuranceService from './Service/PropertyInsuranceService';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Modal } from 'react-bootstrap';
import { TextField } from '@mui/material';
import '../App.css';
import HomeDetailPic from './images/p7.jpg';
import Header from './Header';
import { RsContextCreater } from './UseContext/ContextMain';


function FilldetailsPage() 
{

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const {detailsCon} = useContext(RsContextCreater);

  const location = useLocation();
  const { state } = location;

  const i = location.state?.i;
  // Access form data  from state
  const formData = state?.formData;
  const premiumData = state?.premiumData;
  const marketValue = state?.marketValue;
  const buildingAge = state?.buildingAge;
  const security = state?.security;
  const squareFeet = state?.squareFeet;
  const pincode = state?.pincode;
  const person = state?.person;
  const effected = state?.effected;
  const loginMobileNumber = state?.inputMoboleNo;
  const loginMobileNumberCon = detailsCon.inputMoboleNo;

  console.log(loginMobileNumber);
  console.log("from con"+loginMobileNumberCon);

  var mobileno = location.state?.mobileno; // from profile page
  var emailId=location.state?.emailId;
  const [showState , setshowState] = useState(false);

  // customer Id:
  const startingCustomerId = location.state?.startingCustomerId;

  const [data, setData] = useState(
    {
      mobno : formData?.mobileno || loginMobileNumber || location.state?.mobileno || '',
      gender:"", 
      fullname:"",
      pancard:"",
      dob:"",
      propertypincode:"",
      propertyhouseNo:"",
      propertystreetNo:"",
      propertycity:"",
      propertystate:"",
      currentaddress:"",
      houseno:"",
      streetno:"",
      city:"",
      state:"",
      pincode:"",
      paymentId: '',
    }
  );

  const [signUpDetails1, setSignUpDetails1] = useState(null);
 


// console.log(signUpDetails1,"login:"+loginMobileNumber,"ploi:"+mobileno,"form"+formData.mobileno,'mob'+MobileNumber);


  const [validationErrors,setValidationErrors]=useState(
    {
      currentaddress:'',
      fullname:'',
      pancard:'',
      dob:'',
      propertypincode:'',
      propertyhouseNo:'',
      propertystreetNo:'',
      pincode:'',
      houseno:'',
      streetno:'',
  }
  );



  // Date Checking :
  const today = new Date();
  const minDate = new Date(today.getFullYear() - 21, today.getMonth(), today.getDate());
  // const maxDate = new Date(today.getFullYear()-100,today.getMonth(), today.getDate());

  const minDateFormatted = minDate.toISOString().split('T')[0];


  const handleChange = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = ['fullname', 'pancard'].includes(name) ? value.toUpperCase() : value;
    
  setData({ ...data, [name]: uppercaseValue });

     // validation name:
     if(name === "fullname"){
      if(!regexUsername.test(value))
      {
        setValidationErrors({ ...validationErrors, [name]: "Name must be 3 or more characters" });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    }

    // validation for pancard id :
     if(name === "pancard"){
      if(!regexPanCard.test(value))
      {
        setValidationErrors({ ...validationErrors, [name]: "Enter Valid Pancard No " });
      } else {
        setValidationErrors({ ...validationErrors, [name]: "" });
      }
    }

      // validation for pincode :
      if(name === "propertypincode"){
        if(!(/^[1-9]{1}[0-9]{5}$/).test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter 6 digit pincode" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

      // validation for house no:
      if(name === "propertyhouseNo"){
        if(!regexHouseNo.test(value)){
          setValidationErrors({ ...validationErrors, [name]: " Please enter valid House No" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

        // validation for street no:
      if(name === "propertystreetNo"){
        if(!regexStreet.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid street no " });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }


      // permanent Address :
      // validation for pincode :
      if(name === "pincode"){
        if(!(/^[1-9]{1}[0-9]{5}$/).test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter 6 digit pincode" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

      // validation for house no:
      if(name === "houseno"){
        if(!regexHouseNo.test(value)){
          setValidationErrors({ ...validationErrors, [name]: " Please enter valid House No" });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }

        // validation for street no:
      if(name === "streetno"){
        if(!regexStreet.test(value)){
          setValidationErrors({ ...validationErrors, [name]: "Please enter valid street no " });
        } else {
          setValidationErrors({ ...validationErrors, [name]: "" });
        }
      }
  };


  const renderContent = () => {
    if (data.currentaddress === 'no') {
    return <div className='row my-3'>
              <h4 className='mt-1 text-secondary'>Current Address Details </h4>
              <div className='col-12 col-lg-4 mt-3 mt-3'>
                <TextField
                 className='w-100'
                 id="outlined-textarea"
                 label="House No"
                 placeholder="Enter Your House No."
                 name='houseno'
                 required
                 value={data.houseno}
                 onChange={handleChange}
                /><br/>
                {validationErrors.houseno && <span className="text-danger">{validationErrors.houseno}</span>}
              </div>
               <div className='col-12 col-lg-4 mt-3 mt-3'>
                <TextField
                  className='w-100'
                  id="outlined-textarea"
                  label="Street"
                  placeholder="Enter Your Street"
                  name='streetno'
                  required
                  value={data.streetno}
                  onChange={handleChange}
                  /><br/>
                  {validationErrors.streetno && <span className="text-danger">{validationErrors.streetno}</span>}
                </div>
               <div className='col-12 col-lg-4 mt-3 mt-3'>
                <TextField
                  className='w-100'
                  id="outlined-textarea"
                  label="City"
                  placeholder="Enter Your City"
                  name='city'
                  required
                  value={data.city}
                  onChange={handleChange}
                  /><br/>
                  {/* {validationErrors.streetno && <span className="text-danger">{validationErrors.streetno}</span>} */}
                </div>
               <div className='col-12 col-lg-4 mt-3 mt-3'>
                <TextField
                  className='w-100'
                  id="outlined-textarea"
                  label="State"
                  placeholder="Enter Your State"
                  name='state'
                  required
                  value={data.state}
                  onChange={handleChange}
                  /><br/>
                  {/* {validationErrors.streetno && <span className="text-danger">{validationErrors.streetno}</span>} */}
                </div>
                <div className='col-12 col-lg-4 mt-3'>
                <TextField
                  className='w-100'
                  id="outlined-textarea"
                  label="Pincode"
                  placeholder="Enter Your Pincode No."
                  name='pincode'
                  required
                  value={data.pincode}
                  onChange={handleChange}
                  inputProps={{ maxLength: 6 }}
                />
                <br/>
                {validationErrors.pincode && <span className="text-danger">{validationErrors.pincode}</span>}
              </div>
            </div>
  }
  
};

const [signUpDetails, setSignUpDetails] = useState(JSON.parse(sessionStorage.getItem('signUpDetails')) || []);

function f1()
{
  if (formData?.mobileno != ("" || undefined) || mobileno) {
    const phoneNumber= (formData?.mobileno != ("" || undefined)) ? mobileno : formData?.mobileno;
    PropertyInsuranceService.getCustomerIdByMobileNo(phoneNumber)
      .then((res) => {
        const data = res.data;
        setSignUpDetails(data);
        sessionStorage.setItem('signUpDetails', JSON.stringify(data));
      }).catch(error => {
        // console.error(error);
      });
  }
}
 
const signUpRows = signUpDetails.map((details) => (
  <tr key={details.id}>
    {details.email}
  </tr>
));
const signUpRows1 = signUpDetails.map((details) => (
  <tr key={details.id}>
    {details.mobileno}
  </tr>
));
const signUpRowsAsString = signUpRows.map(row => row.props.children);
 const emailData = signUpRowsAsString.join(', ');
 const signUpRowsAsString1 = signUpRows1.map(row => row.props.children);
 const MobileNumber = signUpRowsAsString1.join(', ');
// console.log(emailData);

useEffect(() => {
  const savedFormData = sessionStorage.getItem('formData');
  if (savedFormData) {
    setData(JSON.parse(savedFormData));
  }
}, []);



  let navigate=useNavigate();

  const clickClose =()=> 
  {
    navigate("/");
  }

  const handleSubmit =(e)=>
  {
    e.preventDefault(); 

   if(data.mobno=== ("" || undefined))
   {
    setshowState(true);
   }
      // console.log(data.mobno);
      console.log(data);
      // return; // Stop further execution
    
data.gender = signUpDetails1.gender;
data.fullname = signUpDetails1.fullname;
data.pancard = signUpDetails1.pancard;
data.dob = setSignUpDetails1.dob;
console.log(data);
  if(data.currentaddress === "yes" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && regexHouseNo.test(data.propertyhouseNo) && regexStreet.test(data.propertystreetNo) && data.mobno!== ("" || undefined))
  {
     navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,pincode,person,effected,startingCustomerId,formData,premiumData,userDetails : data}});
      console.log("ji");
    
  }
  else if(data.currentaddress === "no" && regexUsername.test(data.fullname) && regexPanCard.test(data.pancard) && integerRege6.test(data.propertypincode) && regexHouseNo.test(data.propertyhouseNo)  && regexStreet.test(data.propertystreetNo) && integerRege6.test(data.pincode) && regexHouseNo.test(data.houseno) && regexStreet.test(data.streetno) && data.mobno!== ("" || undefined)){
   
    navigate("/payment",{state:{marketValue,security,squareFeet,buildingAge,pincode,person,effected,startingCustomerId,formData,premiumData , userDetails : data}});

    
  }
  // Save form data to session storage
  sessionStorage.setItem('formData', JSON.stringify(data));

  // console.log("data =>"+JSON.stringify(data));
  //  PropertyInsuranceService.createfillDetails(data);
   
  }

  const handleClick =()=>{
    if(data.mobno=== (""||undefined))
   {
    navigate("/");
   }
   if(data.mobno!== (""||undefined)){
    f1();
    navigate("/property",{state:{i}});
   }
  }

  console.log(signUpDetails1,"login:"+loginMobileNumber,"ploi:"+mobileno,"form"+formData.mobileno,'mob'+MobileNumber);

  const isExistingUser = !!signUpDetails1;
  const isNewUser = !isExistingUser;

  // useEffect(() => {
  //   const LogMobNo = loginMobileNumber || mobileno || MobileNumber || loginMobileNumberCon;

  //   if (LogMobNo) {
  //     const fetchDetails = async () => {
  //       try {
  //         const res = await PropertyInsuranceService.findlogincustomeDetails(LogMobNo);
  //         setSignUpDetails1(res.data);
  //       } catch (error) {
  //         console.error('Error fetching details:', error);
  //       }
  //     };

  //     fetchDetails();
  //   } else {
  //     // Reset form for new user sign up
  //     setSignUpDetails1(null);
  //     setData({
  //       gender: '',
  //       fullname: formData?.name,
  //       pancard: '',
  //       dob: '',
  //       mobno: mobileno || MobileNumber || loginMobileNumber || loginMobileNumberCon || '',
  //     });
  //   }
  // }, [loginMobileNumber, mobileno, MobileNumber, loginMobileNumberCon, formData]);

  useEffect(() => {
    const LogMobNo = loginMobileNumber || mobileno || MobileNumber || loginMobileNumberCon;

    if (LogMobNo) {
      const fetchDetails = async () => {
        try {
          const res = await PropertyInsuranceService.findlogincustomeDetails(LogMobNo);
          setSignUpDetails1(res.data);
        } catch (error) {
          console.error('Error fetching details:', error);
        }
      };

      fetchDetails();
    } else {
      // Reset form for new user sign up
      setSignUpDetails1(null);
      setData({
        gender: '',
        fullname: formData?.name,
        pancard: '',
        dob: '',
        mobno: mobileno || MobileNumber || loginMobileNumber || loginMobileNumberCon || '',
      });
    }
  }, [loginMobileNumber, mobileno, MobileNumber, loginMobileNumberCon, formData]);



  return (
    <div className="container-fluid fillOutPage">
      <Header/>
			 <h1 className='mt-lg-5  pt-lg-3 mt-5 pt-4 text-center text-primary '> 
        Customer Details<i className="fa-solid fa-circle-info fa-sm mx-2"></i>
      </h1>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className='mt-2 FillPropertyLeft' style={{borderRight:'2px solid grey'}}>
        <h3 className='ms-2 me-2 mb-1 rounded text-light px-2' style={{background:'#318ce7'}}>Property Details<i className="fa-solid fa-house fa-sm ms-2"></i></h3>
        <div className='ms-3 mt-3 text-secondary ps-2'>
          <p className='my-3'><span className='fw-semibold'>Current Market Value : </span><span className='fw-bold text-dark'>{marketValue}</span></p>

          <p className='my-3'><span className='fw-semibold'>Carpet Area(sqft) : </span><span className='fw-bold text-dark'>{squareFeet}</span></p>

          <p className='my-3'><span className='fw-semibold'>Age Of The Building : </span><span className='fw-bold text-dark'>{buildingAge}</span></p>

          <p className='my-3'><span className='fw-semibold'>Security : </span><span className='fw-bold text-dark'>{security}</span></p>
         
        </div>
        <h3 className='mx-2 my-1 mt-3 rounded text-light px-2' style={{background:'#318ce7'}}>Premium Details<i className="fa-solid fa-indian-rupee fa-sm ms-2"></i> </h3>
        <div className='ms-3 mt-3 text-secondary ps-2'>

          <p className='my-3'><span className='fw-semibold'>No. Of Years : </span><span className='fw-bold text-dark'>{premiumData?.year} Years</span></p>

          <p className='my-3 mb-3'><span className='fw-semibold'>Premium Amount : </span><span className='fw-bold text-dark'> ₹ {premiumData?.Premium} /-</span></p>

        </div>
        <div className='mt-2 mb-3 text-center'>
          <button className='btn btn-primary px-4 fw-bold shadow' onClick={handleClick}>Edit <ModeEditOutlineIcon className='fs-5'/></button>
        </div>
        </div>
      </div> 

      <div className="col-lg-9 col-md-8 col-sm-6 col-12">
            <div className='mt-2'>
              <form  onSubmit={handleSubmit} className='form-horizatol' >
                <img src={HomeDetailPic} alt='Pic' className='rounded DetailPic'/>
                <>
      {isExistingUser ? (
        <div className=''>
          <h3 className='text-center text-light rounded mx-1' style={{ background: '#318ce7' }}>
            PAN Card Details<i className="fa-solid fa-address-card fa-sm ms-2"></i>
          </h3>

          <div className='mt-4 mb-3 row'>
            <select
              id='salutation'
              name='gender'
              value={signUpDetails1?.gender}
              required
              className='form-select ms-3 p-2 fw-semibold bg-light text-secondary'
              disabled
            >
              <option value={signUpDetails1?.gender}>{signUpDetails1?.gender}</option>
            </select>
            <TextField
              className='col-7 col-lg-5 ms-2'
              id="outlined-textarea"
              label="Full Name(As per Pan Card)"
              placeholder="Enter Your Name"
              name='fullname'
              required
              value={signUpDetails1?.fullname}
              disabled
              inputProps={{ maxLength: 40 }}
            />
            {validationErrors.fullname && <span className="text-danger">{validationErrors.fullname}</span>}
          </div>

          <div className='row'>
            <div className='col-lg-3'>
              <TextField
                className='col-12'
                id="outlined-textarea"
                label="PAN Card No"
                placeholder="Enter Your PAN No."
                name='pancard'
                required
                value={signUpDetails1?.pancard}
                disabled
                inputProps={{
                  maxLength: 10,
                  className: 'fw-bold'
                }}
              />
              {validationErrors.pancard && <span className="text-danger">{validationErrors.pancard}</span>}
            </div>
            <div className='col-12 col-lg-7 mb-2'>
              <label className="control-label w-50 mt-2">
                <span className='fw-semibold text-secondary'>Date of Birth</span>
                <input
                  type='date'
                  name='dob'
                  min="1924-01-01"
                  max={minDateFormatted}
                  value={signUpDetails1?.dob}
                  required
                  className='p-1 rounded ms-1 fw-semibold'
                  disabled
                />
              </label>
              {validationErrors.dob && <span className="text-danger">{validationErrors.dob}</span>}
            </div>
          </div>

          <div className='mt-1'>
            <TextField
              className='mt-2 col-12 col-lg-4 pe-lg-3 cursor-no-drop'
              id="outlined-disabled-input"
              label="Email-Id"
              value={formData?.email || signUpDetails1?.email || emailId || emailData}
              disabled
              InputProps={{
                className: 'fw-bold'
              }}
            />
            <TextField
              className='col-12 col-lg-3 mt-2 cursor-no-drop'
              id="outlined-disabled-input"
              label="Mobile No"
              value={formData?.mobileno || signUpDetails1?.mobileno || mobileno || MobileNumber || loginMobileNumber || loginMobileNumberCon}
              disabled
              InputProps={{
                className: 'fw-bold'
              }}
            />
          </div>
        </div>
      ) : (
        <div className=''>
          <h3 className='text-center text-light rounded mx-1' style={{ background: '#318ce7' }}>
            PAN Card Details<i className="fa-solid fa-address-card fa-sm ms-2"></i>
          </h3>

          <div className='mt-4 mb-3 row'>
            <select
              id='salutation'
              name='gender'
              value={data.gender}
              required
              className='form-select ms-3 p-2 fw-semibold bg-light text-secondary'
              onChange={handleChange}
              style={{ width: '7rem' }}
            >
              <option value=''>Salutation</option>
              <option value='Mr'>Mr.</option>
              <option value='Mrs'>Mrs.</option>
              <option value='Ms'>Ms.</option>
            </select>
            <TextField
              className='col-7 col-lg-5 ms-2'
              id="outlined-textarea"
              label="Full Name(As per Pan Card)"
              placeholder="Enter Your Name"
              name='fullname'
              required
              value={formData.name}
              onChange={handleChange}
              onKeyPress={(e) => {
                const onlyLetters = /^[A-Za-z\s]*$/;
                if (!onlyLetters.test(e.key)) {
                  e.preventDefault();
                }
              }}
              inputProps={{ maxLength: 40 }}
            />
            {validationErrors.fullname && <span className="text-danger">{validationErrors.fullname}</span>}
          </div>

          <div className='row'>
            <div className='col-lg-3'>
              <TextField
                className='col-12'
                id="outlined-textarea"
                label="PAN Card No"
                placeholder="Enter Your PAN No."
                name='pancard'
                required
                value={data.pancard}
                onChange={handleChange}
                inputProps={{
                  maxLength: 10,
                  className: 'fw-bold'
                }}
              />
              {validationErrors.pancard && <span className="text-danger">{validationErrors.pancard}</span>}
            </div>
            <div className='col-12 col-lg-7 mb-2'>
              <label className="control-label w-50 mt-2">
                <span className='fw-semibold text-secondary'>Date of Birth</span>
                <input
                  type='date'
                  name='dob'
                  min="1924-01-01"
                  max={minDateFormatted}
                  value={data.dob}
                  required
                  className='p-1 rounded ms-1 fw-semibold'
                  onChange={handleChange}
                />
              </label>
              {validationErrors.dob && <span className="text-danger">{validationErrors.dob}</span>}
            </div>
          </div>

          <div className='mt-1'>
            <TextField
              className='mt-2 col-12 col-lg-4 pe-lg-3 cursor-no-drop'
              id="outlined-disabled-input"
              label="Email-Id"
              value={formData?.email || emailId || emailData}
              disabled
              InputProps={{
                className: 'fw-bold'
              }}
            />
            <TextField
              className='col-12 col-lg-3 mt-2 cursor-no-drop'
              id="outlined-disabled-input"
              label="Mobile No"
              value={formData?.mobileno || mobileno || MobileNumber || loginMobileNumber || loginMobileNumberCon}
              disabled
              InputProps={{
                className: 'fw-bold'
              }}
            />
          </div>
        </div>
      )}
    </>
                    
                <div>
                  <h3 className='text-center my-3 rounded text-light px-2' style={{background:'#318ce7'}}>Property Details <i className="fa-solid fa-location-dot fa-sm"></i> </h3>
                  <div>
                    <h4 className='my-1 text-secondary'>Property Address Details </h4>
                    <div className='row'>
                      <div className='col-12 col-lg-4 mt-3'>
                        <TextField
                          className='w-100'
                          id="outlined-textarea"
                          label="House No"
                          placeholder="Enter Your House No."
                          name='propertyhouseNo'
                          required
                          value={data.propertyhouseNo}
                          onChange={handleChange}
                        /><br/>
                        {validationErrors.propertyhouseNo && <span className="text-danger">{validationErrors.propertyhouseNo}</span>}
                      </div>
                      <div className='col-12 col-lg-4 mt-3'>
                        <TextField
                          className='w-100'
                          id="outlined-textarea"
                          label="Street"
                          placeholder="Enter Your Street"
                          name='propertystreetNo'
                          required
                          value={data.propertystreetNo}
                          onChange={handleChange}
                        /><br/>
                        {validationErrors.propertystreetNo && <span className="text-danger">{validationErrors.propertystreetNo}</span>}
                      </div>
                      <div className='col-12 col-lg-4 mt-3'>
                        <TextField
                          className='w-100'
                          id="outlined-textarea"
                          label="City"
                          placeholder="Enter Your City"
                          name='propertycity'
                          required
                          value={data.propertycity}
                          onChange={handleChange}
                        /><br/>
                        {/* {validationErrors.propertystreetNo && <span className="text-danger">{validationErrors.propertystreetNo}</span>} */}
                      </div>
                      <div className='col-12 col-lg-4 mt-3'>
                        <TextField
                          className='w-100'
                          id="outlined-textarea"
                          label="State"
                          placeholder="Enter Your State"
                          name='propertystate'
                          required
                          value={data.propertystate}
                          onChange={handleChange}
                        /><br/>
                        {/* {validationErrors.propertystreetNo && <span className="text-danger">{validationErrors.propertystreetNo}</span>} */}
                      </div>
                      <div className='col-12 col-lg-4 mt-3'>
                        <TextField
                          className='w-100'
                          id="outlined-disabled-input"
                          label="Pincode"
                          placeholder="Enter Your Pincode No."
                          name='propertypincode'
                          required
                          value={pincode}
                          onChange={handleChange}
                          InputProps={{
                            disabled: true,
                            className:'fw-bold',
                          }}
                        />
                        <br/>
                        {validationErrors.propertypincode && <span className="text-danger">{validationErrors.propertypincode}</span>}
                      </div>
                      <div className='row mt-3'>
                        <label class="control-label" ><span className='fw-semibold text-secondary'> Above is Current Address </span>
                        <select id='address' required name='currentaddress' className='ms-3 rounded p-1 fw-semibold' onChange={handleChange} > 
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select></label>
                      </div>
                    </div>
                </div>
                </div>
              <div>

              {renderContent()}

            </div>
            <div className='text-center'>
              <button className='btn btn-primary mt-3 fw-bold buy mb-3 shadow'>Make Payment</button>
            </div>
          </form>
        </div>
      </div> 
    </div>

  <div>
    
</div>
    <div className='mx-auto my-auto'>
    <Modal show={showState} onHide={clickClose} className='text-center'>
                <Modal.Body>
                  <h4 className='mt-5'>Please enter the Property Details </h4>
                  <button className='btn btn-outline-primary my-5' onClick={clickClose}>Close</button>
                  </Modal.Body>
                
            </Modal>
    </div>

  </div>	
  )
}

export default FilldetailsPage;
