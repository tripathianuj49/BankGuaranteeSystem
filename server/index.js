import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app=express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"bgsystem",
    timezone : "utc"
})


app.use(express.json());
app.use(cors())




app.get("/details/:GS_NO",(req,res)=>{
    const q="SELECT * FROM bankinfo3 WHERE GS_NO=?"
    const values=req.params.GS_NO
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/create",(req,res)=>{
    const q="INSERT INTO bankinfo3 (`PROCESSING_YEAR`,`PO_REF`,`ENQ_REF`,`DEPTCD`,`SUPCD`,`DEPTNAME`,`SUPPLIER`,`SUPP_ADDR1`,`SUPP_ADDR2`,`SUPP_ADDR3`,`SUPP_ADDR4`,`SUPP_PIN_CD`,`SUPP_TEL_NO`,`BANK_PLACE`,`BANK_ADDR1`,`BANK_ADDR2`,`BANK_ADDR3`,`BANK_PIN_CD`,`BANK_TEL_NO`,`FAX_NO`,`EMAIL_ID`,`BG_TYPE`,`RECEIPT_DT`,`CLMDON`,`BG_EXTN`,`BANK_CODE`,`CONF`,`BANK_NAME`,`CBANK_ADDR1`,`CBANK_ADDR2`,`CBANK_ADDR3`,`CBANK_PIN_CD`,`BG_NO`,`BG_REVNO`,`BG_REVDT`,`BG_CONF`,`BG_DATE`,`BG_CONF_DATE`,`STATUS`,`REMARK`,`BG_VALUE`,`VALIDITY_DATE`,`BG_CLAIM_DATE`) VALUES (?)";
    const values=[req.body.processingYear,req.body.pono,req.body.enqref,req.body.dept,req.body.supcd,req.body.deptname,req.body.supplier,req.body.address1,req.body.address2,req.body.address3,req.body.address4,req.body.address5,req.body.address6,req.body.bankdetails1,req.body.bankdetails2,req.body.bankdetails3,req.body.bankdetails4,req.body.pin,req.body.tel,req.body.faxno,req.body.email,req.body.bgtype,req.body.receiptdt,req.body.clmdon,req.body.extn,req.body.bankcode,req.body.confbank,req.body.confirming1,req.body.confirming2,req.body.confirming3,req.body.confirming4,req.body.pincode,req.body.bgno,req.body.bgrevno,req.body.bgdate,req.body.bgconfirmation,req.body.confdate,req.body.date,req.body.statusOf,req.body.remark,req.body.value,req.body.validitydt,req.body.claimdt];
    
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User Submitted");
    })
})



app.put("/update/:GS_NO",(req,res)=>{
    const userId=req.params.GS_NO;
    const q= "UPDATE bankinfo3 SET `PROCESSING_YEAR`=?,`PO_REF`=?,`ENQ_REF`=?,`DEPTCD`=?,`SUPCD`=?,`DEPTNAME`=?,`SUPPLIER`=?,`SUPP_ADDR1`=?,`SUPP_ADDR2`=?,`SUPP_ADDR3`=?,`SUPP_ADDR4`=?,`SUPP_PIN_CD`=?,`SUPP_TEL_NO`=?,`BANK_PLACE`=?,`BANK_ADDR1`=?,`BANK_ADDR2`=?,`BANK_ADDR3`=?,`BANK_PIN_CD`=?,`BANK_TEL_NO`=?,`FAX_NO`=?,`EMAIL_ID`=?,`BG_TYPE`=?,`RECEIPT_DT`=?,`CLMDON`=?,`BG_EXTN`=?,`BANK_CODE`=?,`CONF`=?,`BANK_NAME`=?,`CBANK_ADDR1`=?,`CBANK_ADDR2`=?,`CBANK_ADDR3`=?,`CBANK_PIN_CD`=?,`BG_NO`=?,`BG_REVNO`=?,`BG_REVDT`=?,`BG_CONF`=?,`BG_DATE`=?,`BG_CONF_DATE`=?,`STATUS`=?,`REMARK`=?,`BG_VALUE`=?,`VALIDITY_DATE`=?,`BG_CLAIM_DATE`=? WHERE GS_NO=? ";

    const values=[req.body.processingYear,req.body.pono,req.body.enqref,req.body.dept,req.body.supcd,req.body.deptname,req.body.supplier,req.body.address1,req.body.address2,req.body.address3,req.body.address4,req.body.address5,req.body.address6,req.body.bankdetails1,req.body.bankdetails2,req.body.bankdetails3,req.body.bankdetails4,req.body.pin,req.body.tel,req.body.faxno,req.body.email,req.body.bgtype,req.body.receiptdt,req.body.clmdon,req.body.extn,req.body.bankcode,req.body.confbank,req.body.confirming1,req.body.confirming2,req.body.confirming3,req.body.confirming4,req.body.pincode,req.body.bgno,req.body.bgrevno,req.body.bgdate,req.body.bgconfirmation,req.body.confdate,req.body.date,req.body.statusOf,req.body.remark,req.body.value,req.body.validitydt,req.body.claimdt];
    
    db.query(q,[...values,userId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("User has been Updated Successfully")
    })
})


app.get("/",(req,res)=>{
    const q="SELECT * FROM bankinfo3"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8000,()=>{
    console.log("Connected to Backend")
})

