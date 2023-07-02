import React,{useState} from "react";
import "./Form.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Update() {
  


const[inputs,setInputs]=useState({
  processingYear:"",
  // gsno:"",
  pono:"",
  enqref:"",
  dept:"",
  supcd:"",
  deptname:"",
  supplier:"",
  address1:"",
  address2:"",
  address3:"",
  address4:"",
  address5:"",
  address6:"",
  bankdetails1:"",
  bankdetails2:"",
  bankdetails3:"",
  bankdetails4:"",
  bgtype:"",
  receiptdt:"",
  clmdon:"",
  bankcode:"",
  extn:"",
  pin:"",
  tel:"",
  faxno:"",
  email:"",
  confbank:"",
  confirming1:"",
  confirming2:"",
  confirming3:"",
  confirming4:"",
  pincode:"",
  bgrevno:"",
  bgdate:"",
  bgconfirmation:"",
  bgno:"",
  confdate:"",
  date:"",
  remark:"",
  value:"",
  validitydt:"",
  claimdt:"",
  statusOf:"",
})

const navigate=useNavigate()
const location=useLocation()
const GS_NO=location.pathname.split("/")[2]


const handleChange=(e)=>{
  const {name,value}=e.target;
  setInputs((prev)=>{
    return{
      ...prev,
      [name]:value
    }
  })
}

const submitForm=async e =>{
  e.preventDefault();
  try{
    await axios.put("http://localhost:8000/update/"+GS_NO,inputs)
    alert('Form Updated Successfully');
    navigate("/")
  }catch(err){
    console.log(err);
  }    
}
  return (
    
    <>
    <form onSubmit={submitForm}>
      <div className="CONTAINER">
        <div className="container-1">
          <div>
            <label htmlFor="processingYear">Processing Year(e.g. 2006):</label>
          </div>
          <div>
            <input
              type="text"
              name="processingYear"
              id="processingYear"
              size="8" 
            onChange={handleChange} value={inputs.processingYear}/>
          </div>
          <div>
            {/* <label htmlFor="gsno">GS NO:</label> */}
          </div>
          <div>
            {/* <input type="text" name="gsno" id="gsno" size="8"  onChange={handleChange} value={inputs.gsno} /> */}
          </div>
        </div>
        <div className="container-2">
          <div id="item-1">
            <label htmlFor="pono">PO NO:</label>
          </div>
          <div id="item-2">
            <input type="text" name="pono" id="pono"  onChange={handleChange} value={inputs.pono}/>
          </div>
          <div id="item-3">
            <label htmlFor="enqref">ENQ REF</label>
          </div>
          <div id="item-4">
            <input type="text" name="enqref" id="enqref"  onChange={handleChange} value={inputs.enqref}/>
          </div>
          <div id="item-5">
            <label htmlFor="dept">DEPT:</label>
          </div>
          <div id="item-6">
            <input type="text" name="dept" id="dept"  onChange={handleChange} value={inputs.dept}/>
          </div>
          <div id="item-7">
            <label htmlFor="supcd">SUPCD</label>
          </div>
          <div id="item-8">
            <input type="text" name="supcd" id="supcd"  onChange={handleChange} value={inputs.supcd}/>
          </div>
          <div id="item-9">
            <label htmlFor="deptname">DEPTNAME</label>
          </div>
          <div id="item-10">
            <input type="text" name="deptname" id="deptname"  onChange={handleChange} value={inputs.deptname}/>
          </div>
          <div id="item-11">
            <label htmlFor="supplier">SUPPLIER</label>
          </div>
          <div id="item-12">
            <input type="text" name="supplier" id="supplier"  onChange={handleChange} value={inputs.supplier} />
          </div>
        <div id="item-13">
            <label htmlFor="address1">Address</label>
          </div>
          <div id="item-14">
            <input type="text" name="address1" id="address1"  onChange={handleChange} value={inputs.address1}/>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div id="item-15">
            <input type="text" name="address2" id="address2"  onChange={handleChange} value={inputs.address2}/>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div id="item-16">
            <input type="text" name="address3" id="address3"  onChange={handleChange} value={inputs.address3} />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div id="item-17">
            <input type="text" name="address4" id="address4"  onChange={handleChange} value={inputs.address4}/>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div id="item-18">
            <input type="text" name="address5" id="address5"  onChange={handleChange} value={inputs.address5}/>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div id="item-19">
            <input type="text" name="address6" id="address6"  onChange={handleChange} value={inputs.address6}/>
          </div>
          <div></div>
          <div></div>
        </div>

      <div className="container-3">
        <div></div>
              <div className="item1"><label htmlFor="bankdetails1">Bank Details(Name and Address)</label></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item2"><input type="text" name="bankdetails1" id="bankdetails1"  onChange={handleChange} value={inputs.bankdetails1}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item3"><label htmlFor="bgtype">BG Type:</label></div>
              <div className="item4"><select name="bgtype" id="bgtype"  onChange={handleChange} value={inputs.bgtype}>
              <option value="nationalised">Nationalised</option>
              <option value="stategovt">State Government</option>
                </select></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item5"><input type="text" name="bankdetails2" id="bankdetails2"  onChange={handleChange} value={inputs.bankdetails2}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item6"><label htmlFor="receiptdt">RECEIPT DT</label></div>
              <div className="item7"><input type="date" name="receiptdt" id="receiptdt"  onChange={handleChange} value={inputs.receiptdt}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item8"><input type="text" name="bankdetails3" id="bankdetails3"  onChange={handleChange} value={inputs.bankdetails3}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item9"><label htmlFor="clmdon">CLMD ON</label></div>
              <div className="item10"><input type="text" name="clmdon" id="clmdon"  onChange={handleChange} value={inputs.clmdon}/></div>
              <div className="item11"><label htmlFor="bankcode">Bank Code</label></div>
              <div className="item12"><input type="text" name="bankcode" id="bankcode"  onChange={handleChange} value={inputs.bankcode}/></div>
              <div></div>
              <div className="item13"><input type="text" name="bankdetails4" id="bankdetails4"  onChange={handleChange} value={inputs.bankdetails4}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item14"><label htmlFor="extn">Extn.</label></div>
              <div className="item15"><input type="text" name="extn" id="extn"  onChange={handleChange} value={inputs.extn}/></div>
              <div></div>
              <div className="item16"><label htmlFor="confbank">Conf Bank(Y/N)</label></div>
              <div className="item17"><label htmlFor="pin">Pin</label></div>
              <div className="item18"><input type="text" name="pin" id="pin"  onChange={handleChange} value={inputs.pin}/></div>
              <div className="item19"><label htmlFor="tel">Tel</label></div>
              <div className="item20"><input type="text" name="tel" id="tel"  onChange={handleChange} value={inputs.tel}/></div>
              <div className="item21"><label htmlFor="faxno">Fax No:</label></div>
              <div className="item22"><input type="text" name="faxno" id="faxno"  onChange={handleChange} value={inputs.faxno}/></div>
              <div className="item23"><label htmlFor="email">Email:</label></div>
              <div className="item24"><input type="email" name="email" id="email"  onChange={handleChange} value={inputs.email}/></div>
              <div className="item25">
              <select name="confbank" id="confbank"  onChange={handleChange} value={inputs.confbank}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
              </div>
              <div className="item26"><label htmlFor="confirming1">Confirming</label></div>
              <div className="item27"><input type="text" name="confirming1" id="confirming1"  onChange={handleChange} value={inputs.confirming1}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item28"><label htmlFor="confirming1">Bank Name</label></div>
              <div className="item29"><input type="text" name="confirming2" id="confirming2"  onChange={handleChange} value={inputs.confirming2}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item30"><label htmlFor="pincode">Pin Code</label></div>
              <div></div>
              <div></div>
              <div className="item31"><label htmlFor="confirming1">and Details</label></div>
              <div className="item32"><input type="text" name="confirming3" id="confirming3" onChange={handleChange} value={inputs.confirming3}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item33"><input type="text" name="pincode" id="pincode"  onChange={handleChange} value={inputs.pincode}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item34"><input type="text" name="confirming4" id="confirming4"  onChange={handleChange} value={inputs.confirming4}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item35"><label htmlFor="bgrevno">BG Rev No</label></div>
              <div className="item36"><label htmlFor="bgdate">BG Rev Date</label></div>
              <div className="item37"><label htmlFor="bgconfirmation">BG Confirmation</label></div>
              <div className="item38">          
              <select name="bgconfirmation" id="bgconfirmation"  onChange={handleChange} value={inputs.bgconfirmation}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select></div>
                <div></div>
                <div></div>
              <div className="item39"><label htmlFor="bgno">BG NO</label></div>
              <div className="item40"><input type="text" name="bgno" id="bgno" onChange={handleChange} value={inputs.bgno}/></div>
              <div></div>
              <div className="item41"><input type="text" name="bgrevno" id="bgrevno"  onChange={handleChange} value={inputs.bgrevno}/></div>
              <div className="item42"><input type="date" name="bgdate" id="bgdate"  onChange={handleChange} value={inputs.bgdate}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item43"><label htmlFor="confdate">Conf. Date</label></div>
              <div className="item44"><input type="date" name="confdate" id="confdate"  onChange={handleChange} value={inputs.confdate}/></div>
              <div className="item45"><label htmlFor="statusOf">Status : </label></div>
              <div className="item46"><input type="text" name="statusOf" id="statusOf"  onChange={handleChange} value={inputs.statusOf}/></div>
              <div className="item47"><label htmlFor="date">DATE </label></div>
              <div className="item48"><input type="date" name="date" id="date"  onChange={handleChange} value={inputs.date}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item49"><label htmlFor="remark">REMARK</label></div>
              <div className="item50"><input type="text" name="remark" id="remark"  onChange={handleChange} value={inputs.remark}/></div>
              <div></div>
              <div></div>
              <div className="item51"><label htmlFor="value">VALUE </label></div>
              <div className="item52"><input type="text" name="value" id="value"  onChange={handleChange} value={inputs.value}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item53"><label htmlFor="validitydt">Validity Date: </label></div>
              <div className="item54"><input type="date" name="validitydt" id="validitydt"  onChange={handleChange} value={inputs.validitydt}/></div>
              <div></div>
              <div className="item55"><label htmlFor="claimdt">Claim Date:</label></div>
              <div className="item56"><input type="date" name="claimdt" id="claimdt"  onChange={handleChange} value={inputs.claimdt}/></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="item57"><input type="submit" value="Save"/></div>
              <div className="item58"><button>Print Confirmation Letter</button></div>
                
          
        </div>
      </div>
      </form>
        
    </>
  );
}
          
    
   
          
          
          
          
   
  
          
          
          
          
          
          
    
   
           


          
      
   
          
          
          
     

          
          
          
          
          
        
        
          
          
          
          
        
     
          
          
          
          
          
          
          
          

    

          
          


          
          
     
    
          
          
          
     
    
          
          
   
  
          
          
          

    

          
          
          
          
    
  
          
          
          
          
     
  
