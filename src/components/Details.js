import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Details() {
  const [users,setUsers]=useState([])
  const location=useLocation();
  const GS_NO=location.pathname.split("/")[2]
  useEffect(()=>{
    const fetchAllData=async()=>{
      try{
        const res=await axios.get("http://localhost:8000/details/"+GS_NO)
        setUsers(res.data)
      }
      catch(err){
        console.log(err);
      }
    }
    fetchAllData()
  },[GS_NO])

  const navigate=useNavigate();
  const homepage=(e)=>{
    navigate("/")
  }

  return (
    <>
        <table>
            <thead>

            </thead>
            <tbody>
            {
                users.map((curUser) => {
                    const {GS_NO,PROCESSING_YEAR,PO_REF,ENQ_REF,DEPTCD,SUPCD,DEPTNAME,SUPPLIER,SUPP_ADDR1,SUPP_ADDR2,SUPP_ADDR3,SUPP_ADDR4,SUPP_PIN_CD,SUPP_TEL_NO,BANK_PLACE,BANK_ADDR1,BANK_ADDR2,BANK_ADDR3,BANK_PIN_CD,BANK_TEL_NO,FAX_NO,EMAIL_ID,BG_TYPE,RECEIPT_DT,CLMDON,BG_EXTN,BANK_CODE,CONF,BANK_NAME,CBANK_ADDR1,CBANK_ADDR2,CBANK_ADDR3,CBANK_PIN_CD,BG_NO,BG_REVNO,BG_REVDT,BG_CONF,BG_DATE,BG_CONF_DATE,STATUS,REMARK,BG_VALUE,VALIDITY_DATE,BG_CLAIM_DATE } = curUser;
                    return (
                      <>
                        <tr key={GS_NO}>GS_NO:<td>{GS_NO}</td></tr>
                        <tr key={GS_NO}>PROCESSING_YEAR:<td>{PROCESSING_YEAR}</td></tr>
                        <tr key={GS_NO}>PO_REF:<td>{PO_REF}</td></tr>
                        <tr key={GS_NO}>ENQ_REF:<td>{ENQ_REF}</td></tr>
                        <tr key={GS_NO}>DEPT CODE:<td>{DEPTCD}</td></tr>
                        <tr key={GS_NO}>SUPLLIER CODE:<td>{SUPCD}</td></tr>
                        <tr key={GS_NO}>DEPT NAME:<td>{DEPTNAME}</td></tr>
                        <tr key={GS_NO}>SUPPLIER:<td>{SUPPLIER}</td></tr>
                        <tr key={GS_NO}>SUPPLIER ADDRESS LINE 1:<td>{SUPP_ADDR1}</td></tr>
                        <tr key={GS_NO}>SUPPLIER ADDRESS LINE 2:<td>{SUPP_ADDR2}</td></tr>
                        <tr key={GS_NO}>SUPPLIER ADDRESS LINE 3:<td>{SUPP_ADDR3}</td></tr>
                        <tr key={GS_NO}>SUPPLIER ADDRESS LINE 4:<td>{SUPP_ADDR4}</td></tr>
                        <tr key={GS_NO}>SUPPLIER PIN CODE:<td>{SUPP_PIN_CD}</td></tr>
                        <tr key={GS_NO}>SUPPLIER TEL NO:<td>{SUPP_TEL_NO}</td></tr>
                        <tr key={GS_NO}>BANK NAME<td>{BANK_PLACE}</td></tr>
                        <tr key={GS_NO}>BANK ADDRESS LINE 1:<td>{BANK_ADDR1}</td></tr>
                        <tr key={GS_NO}>BANK ADDRESS LINE 2:<td>{BANK_ADDR2}</td></tr>
                        <tr key={GS_NO}>BANK ADDRESS LINE 3:<td>{BANK_ADDR3}</td></tr>
                        <tr key={GS_NO}>BANK PIN CODE:<td>{BANK_PIN_CD}</td></tr>
                        <tr key={GS_NO}>BANK TEL NO:<td>{BANK_TEL_NO}</td></tr>
                        <tr key={GS_NO}>BANK FAX NO:<td>{FAX_NO}</td></tr>
                        <tr key={GS_NO}>BANK EMAIL:<td>{EMAIL_ID}</td></tr>
                        <tr key={GS_NO}>BG_TYPE:<td>{BG_TYPE}</td></tr>
                        <tr key={GS_NO}>RECEIPT DATE:
                        <td>{RECEIPT_DT.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>CLMD ON:<td>{CLMDON.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>EXTN:<td>{BG_EXTN}</td></tr>
                        <tr key={GS_NO}>BANK CODE:<td>{BANK_CODE}</td></tr>
                        <tr key={GS_NO}>CONFIRMATION OF BANK:<td>{CONF}</td></tr>
                        <tr key={GS_NO}>CONFIRMING BANK NAME:<td>{BANK_NAME}</td></tr>
                        <tr key={GS_NO}>CONFIRMING BANK ADDRESS LINE 1:<td>{CBANK_ADDR1}</td></tr>
                        <tr key={GS_NO}>CONFIRMING BANK ADDRESS LINE 2:<td>{CBANK_ADDR2}</td></tr>
                        <tr key={GS_NO}>CONFIRMING BANK ADDRESS LINE 3:<td>{CBANK_ADDR3}</td></tr>
                        <tr key={GS_NO}>CONFIRMING BANK PIN CODE:<td>{CBANK_PIN_CD}</td></tr>
                        <tr key={GS_NO}>BG_NO:<td>{BG_NO}</td></tr>
                        <tr key={GS_NO}>BG_REVNO:<td>{BG_REVNO}</td></tr>
                        <tr key={GS_NO}>BG_REV DATE:<td>{BG_REVDT.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>BG CONFIRMATION:<td>{BG_CONF}</td></tr>
                        <tr key={GS_NO}>BG CONFIRMATION DATE:<td>{BG_CONF_DATE.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>BG STATUS:<td>{STATUS}</td></tr>
                        <tr key={GS_NO}>BG VALUE:<td>{BG_VALUE}</td></tr>
                        <tr key={GS_NO}>BG DATE:<td>{BG_DATE.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>REMARK:<td>{REMARK}</td></tr>
                        <tr key={GS_NO}>VALIDITY DATE:<td>{VALIDITY_DATE.substring(0,10)}</td></tr>
                        <tr key={GS_NO}>CLAIM DATE:<td>{BG_CLAIM_DATE.substring(0,10)}</td></tr>
                        <div key={GS_NO}><button onClick={homepage}>BACK TO HOME PAGE</button></div>
                      </>
                    )
                })

            }
            </tbody>
        </table>
    </>
  )





}
