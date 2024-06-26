
import axios from 'axios';
// import Header from '../Header';

const url ="http://122.169.207.194:9092/api/v1";
const BASE_URL = "http://localhost:9090/api/v1/";

class PropertyInsuranceService {

    static createDetails(values) {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/putStructure";
        return axios.post(INSURANCE_API_BASE_URL, values);
    }

     static getAllDetails(){
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getStructure";
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static getStructureDetailsByCustomerId(customerid)
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getStructureByCustomerId/"+customerid;
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static createCustomer(feilds){
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/putCustomer";
        return axios.post(INSURANCE_API_BASE_URL, feilds);
    }

    static getCustomer(){
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getCustomer";
        return axios.get(INSURANCE_API_BASE_URL);
    }
    static getCustomerIdByMobileNo(mobileno){
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getCustomerByMobileNumber/"+mobileno;
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static createfillDetails(data)
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/putData";
        return axios.post(INSURANCE_API_BASE_URL, data);
    }

    static getfillDetails()
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getData";
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static getFillDetailsByCustomerId(customerid){
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getfillDetailsByCustomerId/"+customerid;
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static createPaymentData(details)
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/putPaymentData";
        return axios.post(INSURANCE_API_BASE_URL, details);
    }

    static getPaymentData()
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getPaymentData";
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static getPaymentDetailsByCustomerId(customerid)
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/getPaymentDetailsByCustomerId/"+customerid;
        return axios.get(INSURANCE_API_BASE_URL);
    }

    static login(values)
    {
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/login";
        return axios.post(INSURANCE_API_BASE_URL,values);
    }
    static checkMobileNumber(s)
    {
        // const a={s,d}
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/checkMobileNumber/"+s;
        return axios.get(INSURANCE_API_BASE_URL);
                
    }

    static checkEmail(d)
    {
        // const a={s,d}
        const INSURANCE_API_BASE_URL = "http://122.169.207.194:9092/api/v1/checkEmail/"+d;
        return axios.get(INSURANCE_API_BASE_URL);
                
    }

    static getOtp1()
    {
        const INSURANCE_API_BASE_URL =url+"/currentDateTime";
        return axios.get(INSURANCE_API_BASE_URL);
    }
    static getOtp(mobileno,j)
    {
        const urll="https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF%20&t_id=1707170494921610008&to_mobileno=";
        const url1=urll+mobileno+"&sms_text=Dear%20customer,%20use%20this%20OTP%20";
        const url2=url1+j+"%20to%20signup%20in%20to%20your%20Quality%20Thought%20Next%20account.%20This%20OTP%20will%20be%20valid%20for%20the%20next%2015%20mins";
        return axios.get(url2);
    }

    static updateCustomerByMobileNo (id, mobileno) {
    const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/updateCustomerByMobileNo/${id}/${mobileno}`;
    return axios.put(INSURANCE_API_BASE_URL);
    }

    static updateCustomerByEmailId (id,emailId) 
    {
        const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/updateCustomerByEmailId/${id}/${emailId}`;
        return axios.put(INSURANCE_API_BASE_URL);
     }
     static sendEmailotp(emailId)
     {
        const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/sendEmailOTPforUpdation/${emailId}`;
        return axios.post(INSURANCE_API_BASE_URL);
     }

     static updateFillDetailById(id,address)
     {
        const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/updateFillDetails/${id}`;
        return axios.put(INSURANCE_API_BASE_URL,address);
     }

     static premium_caliculation(inputs)
     {
        const INSURANCE_API_BASE_URL=`http://122.169.207.194:9092/api/premium/caliculatePremium`;
        return axios.post(INSURANCE_API_BASE_URL,inputs);
     }
     static getPremiumAllDetails()
     {
        const INSURANCE_API_BASE_URL=`http://122.169.207.194:9092/api/premium/getAll/premiumCaliculation/values`;
        return axios.get(INSURANCE_API_BASE_URL,);
     }
     static addPremiumDetails(formData)
     {
        const INSURANCE_API_BASE_URL=`http://122.169.207.194:9092/api/premium/addPremiumDetails`;
        return axios.post(INSURANCE_API_BASE_URL,formData);
     }
     static  setPremiumDetails(id)
     {
        const INSURANCE_API_BASE_URL="http://122.169.207.194:9092/api/premium/premiumAmount/fetch/"+id;
        return axios.get(INSURANCE_API_BASE_URL);
     }
     
     static sendEmailatQuotepage(email,data)
     {
         // const data={marketValue,squareFeet,pincode,year,Premium}
         const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/emailQuotePageTabularFormate/${email}`;
         // return axios.post(INSURANCE_API_BASE_URL,data,{
             //     headers:{
                 //         "Content-Type":"application/json"
                 //     }
                 // });
                 console.log(data)
                 return axios.post( INSURANCE_API_BASE_URL,data);
                }
                static invoiceDownload(paymentId)
                {
                   const INSURANCE_API_BASE_URL = `http://122.169.207.194:9092/api/v1/create/${paymentId}`;
                   return axios.post( INSURANCE_API_BASE_URL);
                }
}

export default PropertyInsuranceService;


// import axios from 'axios';

// // Define the base URL globally
// const BASE_URL = "http://localhost:9090/api/v1/";

// class PropertyInsuranceService {

//     static createDetails(values) {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}putStructure`;
//         return axios.post(INSURANCE_API_BASE_URL, values);
//     }

//     static getAllDetails(){
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getStructure`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static getStructureDetailsByCustomerId(customerid)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getStructureByCustomerId/${customerid}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static createCustomer(feilds){
//         const INSURANCE_API_BASE_URL = `${BASE_URL}putCustomer`;
//         return axios.post(INSURANCE_API_BASE_URL, feilds);
//     }

//     static getCustomer(){
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getCustomer`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static getCustomerIdByMobileNo(mobileno){
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getCustomerByMobileNumber/${mobileno}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static createfillDetails(data)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}putData`;
//         return axios.post(INSURANCE_API_BASE_URL, data);
//     }

//     static getfillDetails()
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getData`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static getFillDetailsByCustomerId(customerid){
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getfillDetailsByCustomerId/${customerid}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static createPaymentData(details)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}putPaymentData`;
//         return axios.post(INSURANCE_API_BASE_URL, details);
//     }

//     static getPaymentData()
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getPaymentData`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static getPaymentDetailsByCustomerId(customerid)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}getPaymentDetailsByCustomerId/${customerid}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static login(values)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}login`;
//         return axios.post(INSURANCE_API_BASE_URL,values);
//     }

//     static checkMobileNumber(mobileno)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}checkMobileNumber/${mobileno}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }

//     static deleteStructureDetails(id)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}deleteStructureDetails/${id}`;
//         return axios.delete(INSURANCE_API_BASE_URL);
//     }

//     static deleteCustomer(id)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}deleteCustomer/${id}`;
//         return axios.delete(INSURANCE_API_BASE_URL);
//     }

//     static deleteFillDetails(id)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}deleteFillDetails/${id}`;
//         return axios.delete(INSURANCE_API_BASE_URL);
//     }

//     static deletePaymentDetails(id)
//     {
//         const INSURANCE_API_BASE_URL = `${BASE_URL}deletePaymentDetails/${id}`;
//         return axios.delete(INSURANCE_API_BASE_URL);
//     }

//     static updateFillDetailsById(id, data) {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateFillDetails/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }

//     static getFillDetailsById(id)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}getFillDetailsDataById/${id}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }
//     static updateCustomerPasswordByid(id,values)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateCustomerPasswordByid/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,values);
//     }

//     static updateStructureDetailsById(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateStructureDetails/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }
//     static updateCustomerById(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateCustomer/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }

//     static updateCustomerByMobileNo(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateCustomerByMobileNo/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }

//     static updateCustomerByEmailId(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateCustomerByEmailId/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }

//     static updateFillDetailsPageById(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updateFillDetailsPageById/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }
//     static getStructureDetailsById(id)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}getStructureDetailsById/${id}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }
//     static updatePaymentDetailsById(id,data)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}updatePaymentDetails/${id}`;
//         return axios.put(INSURANCE_API_BASE_URL,data);
//     }
//     static getOtp(mobileno,j)
//     {
//         const url="https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF%20&t_id=1707170494921610008&to_mobileno=";
//         const url1=`${url}${mobileno}&sms_text=Dear%20customer,%20use%20this%20OTP%20`;
//         const url2=`${url1}${j}%20to%20signup%20in%20to%20your%20Quality%20Thought%20Next%20account.%20This%20OTP%20will%20be%20valid%20for%20the%20next%2015%20mins`
//         return axios.get(url2);
//     }

//     static sendSms(mobileno)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}sendSms/${mobileno}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }
//     static getOtp1()
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}currentDateTime`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }
//     static getEmailOtp(email)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}send/${email}`;
//         return axios.post(INSURANCE_API_BASE_URL);
//     }
//     static checkEmail(email)
//     {
//         const INSURANCE_API_BASE_URL =`${BASE_URL}checkEmail/${email}`;
//         return axios.get(INSURANCE_API_BASE_URL);
//     }
// }

// export default PropertyInsuranceService;