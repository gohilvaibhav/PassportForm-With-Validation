function ValidateDOB() {
    var lblError = document.getElementById("lblError");

    //Get the date from the TextBox.
    var dateString = document.getElementById("dob").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        // lblError.innerHTML = "Eligibility 1 years ONLY."
        lblError.innerHTML = "<a href='#dob'>2.4 Minimum Eligibility 1 Month ONLY.</a><br>";
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 0.1) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 0.1) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError.innerHTML = "";
        return true;
    } else {
        // lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        lblError.innerHTML = "<a href='#dob'>2.4 Enter date in DD/MM/YYYY format ONLY.</a><br>";
        return false;
    }
}

// fore address
function allowAlphaNumericSpace(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code == 45) && // dase
        !(code == 32) && // space
        !(code == 44) && // coma
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
    }
}
// for allow alpha and numeric validation
function allowAlphaNumeric(e) {
    var code = ('charCode' in e) ? e.charCode : e.keyCode;
    if (!(code > 47 && code < 58) && // 0-9
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        e.preventDefault();
    }
}
// Use only number
function validateNumber(e) {
    const pattern = /^[0-9]$/;

    return pattern.test(e.key)
}
var today = new Date();
var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
function validation(){
    var x=0;
    // File Number (For Office Use Only)
    //File Number
    var fnum=document.getElementById("fnum").value;
    if(fnum==""){
        document.getElementById('fnum-err').innerHTML="<a href='#fnum' style='color:red'>Please Enter File Number:</a><br>";
        x=1;    
    }
    else if(fnum.length<12 || fnum.length>12 ){
        document.getElementById('fnum-err').innerHTML="<a href='#fnum' style='color:red'> File Number 12 digit:</a> <br>";
        x=1;
    }
    else if(!fnum.match(/^[A-Z]{4}[0-9]{6}[22]{2}$/)){
        document.getElementById('fnum-err').innerHTML="<a href='#fnum' style='color:red'>  Please Enter Your File Number In First 4 Upercase and 8 Digits  :</a> <br>";
        x=1;
    }
    else{
        document.getElementById('fnum-err').innerHTML="";
    } 

    
   //app-for
    if (document.querySelector('input[name="applay"]:checked') == null) {
    
         document.getElementById("applay-err").innerHTML="<a href='#fresh' style='color:red'>1.1 Please Select applyfor:</a><br>";
       
        x= 1;
    }
    else{
        document.getElementById("applay-err").innerHTML="";
    }

    //1.2 If re-issue, specify reason(s)
    if(document.getElementById("re").checked){
        if (document.querySelector('input[name="re-issue"]:checked') == null) {
            document.getElementById("re-issue-err").innerHTML="<a href='#re' style='color:red'>1.2 Please Select If re-issue, specify reason :</a><br>";
           
            x= 1;
        }    
        else{
            document.getElementById("re-issue-err").innerHTML="";
        }
    }
    else{
        document.getElementById("re-issue-err").innerHTML="";
    }
     

//Others, Please specify


    if(document.getElementById('ch9').checked){
    var other=document.getElementById("other").value;
    if(other==""){
        document.getElementById('other-err').innerHTML="<a href='#other' style='color:red'>1.3 Others,Please specify:</a><br>";
        x=1;    
    
    }
    else{
        document.getElementById('other-err').innerHTML="";
    }
}
else{
    document.getElementById('other-err').innerHTML="";
    }
    //img

    var img=document.getElementById("img").value;
    if(img==""){
        document.getElementById('img-err').innerHTML="<a href='#img' style='color:red'>1.3Please Enter Photocopy  :</a> <br>";
        x=1;    
    
    }
    else if(!allowedExtensions.exec(img)){
        document.getElementById("img-err").innerHTML =" <a href='#img' style='color:red'>1.3 Please Choose .jpg|.jpeg|.png|.gif only</a><br>";
    }
    else{
        document.getElementById('img-err').innerHTML="";
    } 
//signature

    var signature=document.getElementById("signature").value;
    if(signature==""){
        document.getElementById('signature-err').innerHTML="<a href='#signature' style='color:red'>1.3 Please Enter Signature:</a> <br>";
        x=1;    
    
    }
    else{
        document.getElementById('signature-err').innerHTML="";
    }

    //1.4 Type of Application 
    if (document.querySelector('input[name="application"]:checked') == null) {
        document.getElementById("application-err").innerHTML="<a href='#application' style='color:red'>1.4 Please Select Type of Application :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("application-err").innerHTML="";
    }
    //1.5 Type of Passport Booklet  
    if (document.querySelector('input[name="pbooklet"]:checked') == null) {
        document.getElementById("pbooklet-err").innerHTML="<a href='#pbooklet' style='color:red'>1.5 Please Select Type of Passport Booklet:</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("pbooklet-err").innerHTML="";
    }
    //1.6 Validity Required  
    if (document.querySelector('input[name="Validity"]:checked') == null) {
        document.getElementById("Validity-err").innerHTML="<a href='#Validity' style='color:red'>1.6 Please Select Validity Required :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("Validity-err").innerHTML="";
    }
    
     //2.1 Applicant's Given Name
    var fname=document.getElementById("fname").value;
    if(fname==""){
        document.getElementById('fname-err').innerHTML="<a href='#fname' style='color:red'>2.1 Please Enter Your Name:</a> <br>";
        x=1;    
    
    }
    else if(!fname.match(/^[A-Z]*$/)){
        document.getElementById('fname-err').innerHTML="<a href='#fname' style='color:red'>2.1 Please Enter Your Name In Upercase:</a> <br>";
        x=1;
    }
    else{
         document.getElementById('fname-err').innerHTML="";
     }
     //surname 
    var sname=document.getElementById("sname").value;
    if(sname==""){
        document.getElementById('sname-err').innerHTML="<a href='#sname' style='color:red'>2.1Please Enter Your Surname:</a> <br>";
        x=1;    
    
    }
    else if(!sname.match(/^[A-Z]*$/)){
        document.getElementById('sname-err').innerHTML="<a href='#sname' style='color:red'>2.1 Please Enter Your Surname In Upercase:</a> <br>";
        x=1;
    }
    else{
         document.getElementById('sname-err').innerHTML="";
     } 
    //2.2 Are you known by any other names (aliases)?   
    if (document.querySelector('input[name="othername"]:checked') == null) {
        document.getElementById("othername-err").innerHTML="<a href='#othername' style='color:red'>2.2 Are you known by any other names (aliases)? :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("othername-err").innerHTML="";
    }
    //2.3 Have you ever changed your name?    
    if (document.querySelector('input[name="changedyourname"]:checked') == null) {
        document.getElementById("changedyourname-err").innerHTML="<a href='#changedyourname' style='color:red'>2.3 Are you known by any other names (aliases)? :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("changedyourname-err").innerHTML="";
    }

    //2.5    
     //dob
    var dob=document.getElementById("dob").value;
     document.getElementById('dob').style.display="block";

    if(dob==""){
        document.getElementById('dob-err').innerHTML="<a href='#dob' style='color:red'>2.4 Please Enter Your  Date of Birth (DD-MM-YYYY):</a> <br>";
        x=1;    
    
    }
    else{
         document.getElementById('dob-err').innerHTML="";
     } 
     // Place of Birth 
    var bcity=document.getElementById("bcity").value;
    if(bcity==""){
        document.getElementById('bcity-err').innerHTML="<a href='#bcity' style='color:red'>2.5 Please Enter Place of Birth :</a> <br>";
        x=1;    
    
    }
    else if(!bcity.match(/^[A-Z]*$/)){
        document.getElementById('bcity-err').innerHTML="<a href='#bcity' style='color:red'>2.1 Please Enter Your  Place  In Upercase:</a> <br>";
        x=1;
    }
    else{
         document.getElementById('bcity-err').innerHTML="";
     } 

    // Place of District 
    var bdistrict = document.getElementById("bdistrict").value;
 
    if(bdistrict==""){
        document.getElementById('bdistrict-err').innerHTML="<a href='#bdistrict'style='color:red'>2.5 Please Enter District :</a> <br>";
        x=1;    
    
    }
    else if(!bdistrict.match(/^[A-Z]*$/)){
        document.getElementById('bdistrict-err').innerHTML="<a href='#bdistrict' style='color:red'>2.5 Please Enter Your District  In Upercase:</a> <br>";
        x=1;
    }
    else if (bstate == bcountry || bcountry == bdistrict || bdistrict == bstate) {
        document.getElementById("bdistrict-err").innerHTML = "<a  href='#bdistrict' style='color:red'> 2.5.3 District State and Country  do not have same value !!</a><br>";
        x = 1;
    }
    else{
         document.getElementById('bdistrict-err').innerHTML="";
     } 

    //  State/ UT (If born in India) 

    var bstate = document.getElementById("bstate").value;
 
    if(bstate==""){
        document.getElementById('bstate-err').innerHTML="<a href='#bdistrict'style='color:red'>2.5 Please Enter State :</a><br>";
        x=1;    
    
    }
    else if(!bstate.match(/^[A-Z]*$/)){
        document.getElementById('bstate-err').innerHTML="<a href='#bstate' style='color:red'>2.5 Please Enter Your State In Upercase:</a> <br>";
        x=1;
    }
    else if (bstate == bcountry || bcountry == bdistrict || bdistrict == bstate) {
        document.getElementById("bstate-err").innerHTML = "<a  href='#bstate' style='color:red'> 2.5.3 District State and Country  do not have same value !!</a><br>";
        x = 1;
    }
    else{
         document.getElementById('bstate-err').innerHTML="";
     } 
 
     //Region/Country (If born abroad) 
     var bcountry = document.getElementById("bcountry").value;
 
    if(bcountry==""){
        document.getElementById('bcountry-err').innerHTML="<a href='#bcountry'style='color:red'>2.5 Please Enter Region/Country :</a> <br>";
        x=1;    
    
    }
    else if(!bcountry.match(/^[A-Z]*$/)){
        document.getElementById('bcountry-err').innerHTML="<a href='#bcountry' style='color:red'>2.5 Please Enter Your country In Upercase:</a> <br>";
        x=1;
    }
    else if (bstate == bcountry || bcountry == bdistrict || bdistrict == bstate) {
        document.getElementById("bcountry-err").innerHTML = "<a  href='#bcountry' style='color:red'> 2.5.3 District State and Country  do not have same value !!</a> <br>";
        x = 1;
    }
    else{
         document.getElementById('bcountry-err').innerHTML="";
     } 
     //2.6 Gender
     if (document.querySelector('input[name="gender"]:checked') == null) {
        document.getElementById("gender-err").innerHTML="<a href='#gender' style='color:red'>2.6 Please Select gender :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("gender-err").innerHTML="";
    }
     //2.7 Marital Status
     if (document.querySelector('input[name="maritals"]:checked') == null) {
        document.getElementById("maritals-err").innerHTML="<a href='#maritals' style='color:red'>2.7 Please select Marital Status:</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("maritals-err").innerHTML="";
    }
     //2.8 Citizenship of India by
     if (document.querySelector('input[name="citizenship"]:checked') == null) {
        document.getElementById("citizenship-err").innerHTML="<a href='#citizenship' style='color:red'>2.8 Citizenship of India by:</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("citizenship-err").innerHTML="";
    }
     //2.9 PAN (If available) 
     var pan = document.getElementById("pan").value;
 
    if(pan==""){
        document.getElementById('pan-err').innerHTML="<a href='#pan'style='color:red'>2.9 Please Enter PAN NO :</a> <br>";
        x=1;    
    
    }
    else if(pan.length<10 || pan.length>10 ){
        document.getElementById('pan-err').innerHTML="<a href='#pan' style='color:red'>2.9 PAN-NO Must be 10 digit:</a> <br>";
        x=1;
    }
    else if(!pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/)){
        document.getElementById('pan-err').innerHTML="<a href='#pan' style='color:red'> 2.9 Please Enter Your Pancard In First 5 Upercase and 4Digits then 1 Upercase :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('pan-err').innerHTML="";
     } 
     //Voter ID (If available) 
     var voterid = document.getElementById("voterid").value;
 
    if(voterid==""){
        document.getElementById('voterid-err').innerHTML="<a href='#voterid'style='color:red'>2.10 Please Enter Voter ID :</a> <br>";
        x=1;    
    
    }
    else if(voterid.length<10 || voterid.length>10 ){
        document.getElementById('voterid-err').innerHTML="<a href='#voterid' style='color:red'>2.10 Voter ID-No Must be 10 digit:</a> <br>";
        x=1;
    }
    else if(!voterid.match(/^[A-Z]{3}[0-9]{7}$/)){
        document.getElementById('voterid-err').innerHTML="<a href='#voterid' style='color:red'> 2.10 Please Enter Your Voter ID In 3 Upercase and 7 Digits :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('voterid-err').innerHTML="";
     } 

     // 2.11 Employment Type 
     if (document.querySelector('input[name="employment"]:checked') == null) {
        document.getElementById("employment-err").innerHTML="<a href='#employment' style='color:red'>2.11 Employment Type:</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("employment-err").innerHTML="";
    }
        
        //2.12 If employed in Government/ Statutory Body/ PSU, specify organization name
        var organization = document.getElementById("organization").value;
 
        if(organization==""){
            document.getElementById('organization-err').innerHTML="<a href='#organization'style='color:red'>2.12 Please Enter organization:</a><br>";
            x=1;    
        } 
        else if(organization.length<10 || organization.length>60 ){
            document.getElementById('organization-err').innerHTML="<a href='#organization' style='color:red'>2.12 OrganizationName Between 10-60 digit:</a> <br>";
            x=1;
        }
        else if(!organization.match(/^[A-Z\s]*$/)){
            document.getElementById('organization-err').innerHTML="<a href='#organization' style='color:red'>2.12 Please Enter Your OrganizationName In Upercase:</a> <br>";
            x=1;
        }
    
        else{
             document.getElementById('organization-err').innerHTML="";
         } 
        // 2.13 s either of your parent (in case of minor)/ spouse, a government servant? 
         if (document.querySelector('input[name="gservant"]:checked') == null) {
            document.getElementById("gservant-err").innerHTML="<a href='#gservant' style='color:red'>2.13 select your parent government servant:</a> <br>";
           
            x= 1;
        }
        else{
            document.getElementById("gservant-err").innerHTML="";
        }
         
        // 2.14 Educational Qualification 
         if (document.querySelector('input[name="qualification"]:checked') == null) {
            document.getElementById("qualification-err").innerHTML="<a href='#qualification' style='color:red'>2.14 Educational Qualification:</a> <br>";
           
            x= 1;
        }
        else{
            document.getElementById("qualification-err").innerHTML="";
        }
         
        // 2.15 Are you eligible for Non-ECR category? 
         if (document.querySelector('input[name="ecr"]:checked') == null) {
            document.getElementById("ecr-err").innerHTML="<a href='#ecr' style='color:red'>2.15 Are you eligible for Non-ECR category?:</a> <br>";
           
            x= 1;
        }
        else{
            document.getElementById("ecr-err").innerHTML="";
        }
        //2.16 visibledmark
        var svisibledmark= document.getElementById("visibledmark").value;

        if(svisibledmark==""){
        document.getElementById('visibledmark-err').innerHTML="<a href='#visibledmark' style='color:red'> 2.16 Please Enter Visible Distinguishing Mark:</a> <br>";

            x=1;    
        }
        else{
         document.getElementById('visibledmark-err').innerHTML="";
        }
 
      
        //2.17 Aadhaar Number
        var aadhaarno= document.getElementById("aadhaarno").value;

        if(aadhaarno==""){
        document.getElementById('aadhaarno-err').innerHTML="<a href='#aadhaarno' style='color:red'> 2.17 Please Enter  aadhaarno:</a> <br>";

            x=1;    

        }
        else if(!aadhaarno.match(/^[0-9]*$/)){
            document.getElementById('aadhaarno-err').innerHTML="<a href='#aadhaarno' style='color:red'>2.17 Please Enter Your aadhaarno In Numeric:</a> <br>";
            x=1;
        }
        else if(aadhaarno.length!=12){
            document.getElementById('aadhaarno-err').innerHTML="<a href='#aadhaarno' style='color:red'>2.17 Please Enter Your aadhaarno In Must be 12:</a> <br>";
            x=1;
        }
        else{
         document.getElementById('aadhaarno-err').innerHTML="";
        }
         
        // Father's Given Name
        var fathername = document.getElementById("fathername").value;
 
        if(fathername==""){
            document.getElementById('fathername-err').innerHTML="<a href='#fathername'style='color:red'>3.1 Please Enter Father's Given Name:</a> <br>";

            x=1;    
        
        }
        else if(!fathername.match(/^[A-Z]*$/)){
            document.getElementById('fathername-err').innerHTML="<a href='#fathername' style='color:red'>3.1 Please Enter Your fathername In Upercase:</a> <br>";
            x=1;
        }
    
        else{
             document.getElementById('fathername-err').innerHTML="";
         } 
        // Father's Surname
        var fsurname = document.getElementById("fsurname").value;
 
        if(fsurname==""){
            document.getElementById('fsurname-err').innerHTML="<a href='#fsurname'style='color:red'>3.1 Please Enter Father's Surname:</a> <br>";

            x=1;    
        
        }
        else if(!fsurname.match(/^[A-Z]*$/)){
            document.getElementById('fsurname-err').innerHTML="<a href='#fsurname' style='color:red'>3.1 Please Enter Your Father Surname In Upercase:</a> <br>";
            x=1;
        }
    
        else{
             document.getElementById('fsurname-err').innerHTML="";
         } 
        // Mother's Given Name
        var mothername = document.getElementById("mothername").value;
 
        if(mothername==""){
            document.getElementById('mothername-err').innerHTML="<a href='#mothername'style='color:red'> 3.2 Please Enter Mother's Given Name:</a> <br>";

            x=1;    
        
        }
        else if(!mothername.match(/^[A-Z]*$/)){
            document.getElementById('mothername-err').innerHTML="<a href='#mothername' style='color:red'>3.2 Please Enter Your Mother Surname In Upercase:</a> <br>";
            x=1;
        }
    
        else{
             document.getElementById('mothername-err').innerHTML="";
         } 
        // Mother's Surname
        var msurname = document.getElementById("msurname").value;
 
        if(msurname==""){
            document.getElementById('msurname-err').innerHTML="<a href='#msurname'style='color:red'>3.2 Please Enter Mother's Surname:</a> <br>";

            x=1;    
        
        }
        else if(!msurname.match(/^[A-Z]*$/)){
            document.getElementById('msurname-err').innerHTML="<a href='#msurname' style='color:red'>3.2 Please Enter Your Mother Surname In Upercase:</a> <br>";
            x=1;
        }
        
        else{
             document.getElementById('msurname-err').innerHTML="";
         } 
     
    // Guardian's Given Name 
        var guardianname = document.getElementById("guardianname").value;
 
    if(guardianname==""){
        document.getElementById('guardianname-err').innerHTML="<a href='#guardianname'style='color:red'> 3.3 Please Enter Guardian's Given Name :</a> <br>";

        x=1;    
    
    }
    else if(!guardianname.match(/^[A-Z]*$/)){
        document.getElementById('guardianname-err').innerHTML="<a href='#guardianname' style='color:red'>3. Please Enter Your Guardianname  In Upercase:</a> <br>";
        x=1;
    }

    else{
         document.getElementById('guardianname-err').innerHTML="";
     }
    // Guardian's Surname 
        var gsurname = document.getElementById("gsurname").value;
 
    if(gsurname==""){
        document.getElementById('gsurname-err').innerHTML="<a href='#gsurname'style='color:red'> 3.3 Please Enter Guardian's Surname :</a> <br>";

        x=1;    
    
    }
    else if(!gsurname.match(/^[A-Z]*$/)){
        document.getElementById('gsurname-err').innerHTML="<a href='#gsurname' style='color:red'>3.3 Please Enter Your Guardian's Surname In Upercase:</a> <br>";
        x=1;
    }

    else{
         document.getElementById('gsurname-err').innerHTML="";
     }
    // Spouse's Given Name  
        var spousename = document.getElementById("spousename").value;
 
    if(spousename==""){
        document.getElementById('spousename-err').innerHTML="<a href='#spousename'style='color:red'> 3.4 Please Enter spouse's Given Name :</a> <br>";

        x=1;    
    
    }
    else if(!spousename.match(/^[A-Z]*$/)){
        document.getElementById('spousename-err').innerHTML="<a href='#spousename' style='color:red'>3.4 Please Enter Your Given Name In Upercase:</a> <br>";
        x=1;
    }

    else{
         document.getElementById('spousename-err').innerHTML="";
     }
          
    // Spouse's Surname 
        var ssurname = document.getElementById("ssurname").value;
 
    if(ssurname==""){
        document.getElementById('ssurname-err').innerHTML="<a href='#ssurname'style='color:red'> 3.4 Please Enter spouse's Surname :</a> <br>";

        x=1;    
    
    }
    else if(!ssurname.match(/^[A-Z]*$/)){
        document.getElementById('ssurname-err').innerHTML="<a href='#ssurname' style='color:red'>3.4 Please Enter Your Spouse's Surname In Upercase:</a> <br>";
        x=1;
    }
    else{
         document.getElementById('ssurname-err').innerHTML="";
     }
     
     
     //Father/ Legal Guardian's File/ Passport Number
        var fatherpassportnumber = document.getElementById("fatherpassportnumber").value;
        if(fatherpassportnumber ==""){
            document.getElementById('fatherpassportnumber-err').innerHTML ="<a href='#fatherpassportnumber'style='color:red'> 3.5 Please Enter Father Passportnno :</a><br>";
            x=1;
        }
        else if(fatherpassportnumber.length!=12){
            document.getElementById('fatherpassportnumber-err').innerHTML="<a href='#fatherpassportnumber' style='color:red'>3.5 Please Enter Your Father  Passportnno Must be 12:</a> <br>";
            x=1;
        }
        else if(!fatherpassportnumber.match(/^[A-Z0-9]*$/)){
            document.getElementById('fatherpassportnumber-err').innerHTML="<a href='#fatherpassportnumber' style='color:red'> 3.5 Please Enter Your Father  Passportnno In Upercase and Digit :</a> <br>";
            x=1;
        }        else{
            document.getElementById('fatherpassportnumber-err')
        }
     
 
     // F-Nationality, if not Indian 
 
        var fathernationality = document.getElementById("fathernationality").value;
 
    if(fathernationality==""){
        document.getElementById('fathernationality-err').innerHTML="<a href='#fathernationality'style='color:red'> 3.5 Please Enter Father Nationality :</a> <br>";

        x=1;    
    
    }
    else if(fathernationality.length>50){
        document.getElementById('fathernationality-err').innerHTML="<a href='#fathernationality' style='color:red'>3.5 Please Enter Father Nationality>50 :</a> <br>";
        x=1;
    }
    else if(!fathernationality.match(/^[A-Z]*$/)){
        document.getElementById('fathernationality-err').innerHTML="<a href='#fathernationality' style='color:red'> 3.5Please Enter Your Father Nationality Upercase  :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('fathernationality-err').innerHTML="";
     }

       
     //Mother/ Legal Guardian's File/ Passport Number 
        var motherpassportnumber = document.getElementById("motherpassportnumber").value;
 
    if(motherpassportnumber==""){
        document.getElementById('motherpassportnumber-err').innerHTML="<a href='#motherpassportnumber'style='color:red'>3.5 Please Enter Mother PassportvNumber :</a> <br>";

        x=1;    
    
    }
    else if(motherpassportnumber.length!=12){
        document.getElementById('motherpassportnumber-err').innerHTML="<a href='#motherpassportnumber' style='color:red'> 3.5 Please Enter Mother PassportvNumber Length must be 12 :</a> <br>";
        x=1;
    }
    else if(!motherpassportnumber.match(/^[A-Z0-9]*$/)){
        document.getElementById('motherpassportnumber-err').innerHTML="<a href='#motherpassportnumber' style='color:red'>3.5  Please Enter Your Mother  Passportnno Upercase and Digit  :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('motherpassportnumber-err').innerHTML="";
     }
      // //M-Nationality, if not Indian       
      var mothernationality = document.getElementById("mothernationality").value;
 
      if(mothernationality==""){
          document.getElementById('mothernationality-err').innerHTML="<a href='#mothernationality'style='color:red'> 3.5 Please Enter Mother Nationality :</a> <br>";
  
          x=1;    
      
      }
      else if(mothernationality.length>50){
        document.getElementById('mothernationality-err').innerHTML="<a href='#mothernationality' style='color:red'> 3.5 Please Enter  Nationality>50 ::</a> <br>";
        x=1;
    }
    else if(!mothernationality.match(/^[A-Z]*$/)){
        document.getElementById('mothernationality-err').innerHTML="<a href='#mothernationality' style='color:red'> 3.5Please Enter Your Mother Nationality Upercase :</a> <br>";
        x=1;
    }
      else{
           document.getElementById('mothernationality-err').innerHTML="";
       }
       //House No. and Street Name      
      var houseno = document.getElementById("houseno").value;
 
      if(houseno==""){
          document.getElementById('houseno-err').innerHTML="<a href='#houseno'style='color:red'> 4.1 Please Enter House No. and Street Name:</a> <br>";
  
          x=1;    
      
      }
      else if(houseno.length<10){
        document.getElementById('houseno-err').innerHTML="<a href='#houseno' style='color:red'> 4.1 Please Enter House No. and Street Name Min 10 and Max500:</a> <br>";
        x=1;
    }
    

      else if(!houseno.match(/^[ A-Za-z0-9'\.\-\s\,]*$/)){
        document.getElementById('houseno-err').innerHTML="<a href='#houseno' style='color:red'>4.1 Please Enter House No. and Street only -,   use :</a> <br>";
        x=1;
    }
    

      else{
           document.getElementById('houseno-err').innerHTML="";
       }
   
       //Village or Town or City
      var village = document.getElementById("village").value;
 
      if(village==""){
          document.getElementById('village-err').innerHTML="<a href='#village'style='color:red'> 4.1 Please Enter Village or Town or City:</a> <br>";
  
          x=1;    
      
      }
      else if(!village.match(/^[A-Z]*$/)){
        document.getElementById('village-err').innerHTML="<a href='#village' style='color:red'>4.1 Please Enter Your village In Upercase:</a> <br>";
        x=1;
    }

      else{
           document.getElementById('village-err').innerHTML="";
       }
       //District
      var districtofvillage = document.getElementById("districtofvillage").value;
 
      if(districtofvillage==""){
          document.getElementById('districtofvillage-err').innerHTML="<a href='#districtofvillage'style='color:red'> 4.1 Please Enter District:</a> <br>";
  
          x=1;    
      
      }
      else if(!districtofvillage.match(/^[A-Z]*$/)){
        document.getElementById('districtofvillage-err').innerHTML="<a href='#districtofvillage' style='color:red'>4.1 Please Enter Your district In Upercase:</a> <br>";
        x=1;
    }
      else{
           document.getElementById('districtofvillage-err').innerHTML="";
       }
       //Police Station
      var policestation = document.getElementById("policestation").value;
 
      if(policestation==""){
          document.getElementById('policestation-err').innerHTML="<a href='#policestation'style='color:red'> 4.1 Please Enter Police Station:</a> <br>";
  
          x=1;    
      
      }
      else if(!policestation.match(/^[A-Z]*$/)){
        document.getElementById('policestation-err').innerHTML="<a href='#policestation' style='color:red'>4.1 Please Enter Your policestation In Upercase:</a> <br>";
        x=1;
    }
      else{
           document.getElementById('policestation-err').innerHTML="";
       }
       //State/ UT
       var ut = document.getElementById("ut").value;
 
    if(ut==""){
        document.getElementById('ut-err').innerHTML="<a href='#ut'style='color:red'> 4.1 Please Enter State/ UT:</a><br>";

        x=1;    
    
    }
    else if(!ut.match(/^[A-Z]*$/)){
        document.getElementById('ut-err').innerHTML="<a href='#ut' style='color:red'>4.1 Please Enter Your State/ UT In Upercase:</a> <br>";
        x=1;
    }
    else{
         document.getElementById('ut-err').innerHTML="";
     }        
    //PIN
    var pan1 = document.getElementById("pan1").value;
 
    if(pan1==""){
        document.getElementById('pan1-err').innerHTML="<a href='#pan1'style='color:red'> 4.1 Please Enter pan:</a><br>";

        x=1;    
    
    }
    else if(pan1.length<10 || pan1.length>10 ){
        document.getElementById('pan1-err').innerHTML="<a href='#pan1' style='color:red'>2.9 PAN-NO Must be 10 digit:</a> <br>";
        x=1;
    }
    else if(!pan1.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/)){
        document.getElementById('pan1-err').innerHTML="<a href='#pan1' style='color:red'> 2.9 Please Enter Your Pancard In First 5 Upercase and 4Digits then 1 Upercase :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('pan1-err').innerHTML="";
     }    
    //Mobile Number
    var monumber = document.getElementById("monumber").value;
 
    if(monumber==""){
        document.getElementById('monumber-err').innerHTML="<a href='#monumber'style='color:red'> 4.1 Please Enter Mobile Number:</a><br>";

        x=1;    
    
    }
    else if(monumber.length<10 || monumber.length>10 ){
        document.getElementById('monumber-err').innerHTML="<a href='#monumber' style='color:red'>4.1 mobilenumber Must be 10 digit:</a> <br>";
        x=1;
    }
    else if(!monumber.match(/^[0-9]*$/)){
        document.getElementById('monumber-err').innerHTML="<a href='#monumber' style='color:red'> 4.1 Please Enter Your mobilenumber In Must Be Digit :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('monumber-err').innerHTML="";
     }    
    //Telephone Number
    var telnumber = document.getElementById("telnumber").value;
 
    if(telnumber==""){
        document.getElementById('telnumber-err').innerHTML="<a href='#telnumber'style='color:red'> 4.1 Please Enter Telephone Number:</a><br>";

        x=1;    
    
    }
    else if(telnumber.length<10 || telnumber.length>10 ){
        document.getElementById('telnumber-err').innerHTML="<a href='#telnumber' style='color:red'>4.1 Telephone Must be 10 digit:</a> <br>";
        x=1;
    }
    else if(!telnumber.match(/^[0-9]*$/)){
        document.getElementById('telnumber-err').innerHTML="<a href='#telnumber' style='color:red'> 4.1 Please Enter Your Telephone In Must Be Digit :</a> <br>";
        x=1;
    }
    else{
         document.getElementById('telnumber-err').innerHTML="";
     }    
    //E-mail ID
    var email = document.getElementById("email").value;
 
    if(email==""){
        document.getElementById('email-err').innerHTML="<a href='#email'style='color:red'> 4.1 Please Enter E-mail ID:</a><br>";

        x=1;    
    
    }
    else if(!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        document.getElementById('email-err').innerHTML="<a href='#email' style='color:red'> 4.1 Please Enter Your Email In Must be combination Of @ :</a> <br>";
        x=1;
    }
    
    else{
         document.getElementById('email-err').innerHTML="";
     }    
     //Is permanent address same as present address?
     if (document.querySelector('input[name="presentaddress"]:checked') == null) {
        document.getElementById("presentaddress-err").innerHTML="<a href='#presentaddress' style='color:red'>4.2 Arpermanent address same as present address? :</a> <br>";
       
        x= 1;
    }
    else{
        document.getElementById("presentaddress-err").innerHTML="";
    }
    




// current addres and permanent both are diffrent
     //House No. and Street Name 
     if (document.getElementById("presentaddress").checked) {
        var houseno1 = document.getElementById("houseno1").value;
 
        if(houseno1==""){
            document.getElementById('houseno1-err').innerHTML="<a href='#houseno1'style='color:red'> 4.2 Please Enter House No. and Street Name:</a> <br>";
    
            x=1;    
        
        }
        else if(!houseno1.match(/^[ A-Za-z0-9'\.\-\s\,]*$/)){
           document.getElementById('houseno1-err').innerHTML="<a href='#houseno1' style='color:red'>4.2 Please Enter House No. and Street only -, use :</a> <br>";
           x=1;
       }
   
        else{
             document.getElementById('houseno1-err').innerHTML="";
         }
    }
    else {
        document.getElementById("houseno1-err").style.display = "block";
    }     
     
  
      //Village or Town or City
      if (document.getElementById("presentaddress").checked) {
        var village1 = document.getElementById("village1").value;

        if(village1==""){
            document.getElementById('village1-err').innerHTML="<a href='#village1'style='color:red'> 4.2 Please Enter Village or Town or City:</a><br>";
    
            x=1;    
        
        }
        else if(!village1.match(/^[A-Z]*$/)){
           document.getElementById('village1-err').innerHTML="<a href='#village1' style='color:red'>4.2 Please Enter Your village In Upercase:</a> <br>";
           x=1;
       }
   
        else{
             document.getElementById('village1-err').innerHTML="";
         }
   
    }
    else {
        document.getElementById("village1-err").style.display = "block";
    }
    //District
    if (document.getElementById("presentaddress").checked) {
        var districtofvillage1 = document.getElementById("districtofvillage").value;
        if(districtofvillage1==""){
            document.getElementById('districtofvillage1-err').innerHTML="<a href='#districtofvillage1'style='color:red'> 4.2 Please Enter District:</a> <br>";
            x=1;
        }
        else{
            document.getElementById('districtofvillage1-err').innerHTML="";
            }
        }
    else {
        document.getElementById("districtofvillage1-err").style.display = "none";
        }
      //Police Station
      if (document.getElementById("presentaddress").checked) {
        var policestation1 = document.getElementById("policestation1").value;

        if(policestation1==""){
            document.getElementById('policestation1-err').innerHTML="<a href='#policestation1'style='color:red'> 4.2 Please Enter Police Station:</a> <br>";
    
            x=1;    
        
        }
        else if(!policestation1.match(/^[A-Z]*$/)){
           document.getElementById('policestation1-err').innerHTML="<a href='#policestation1' style='color:red'>4.2 Please Enter Your policestation In Upercase:</a> <br>";
           x=1;
       }
        else{
             document.getElementById('policestation1-err').innerHTML="";
         }
    }
    else {
        document.getElementById("policestation1-err").style.display = "block";
    }
     
      //State/ UT
      if (document.getElementById("presentaddress").checked) {
        var ut1 = document.getElementById("ut1").value;

        if(ut1==""){
            document.getElementById('ut1-err').innerHTML="<a href='#ut1'style='color:red'> 4.2 Please Enter State/ UT:</a> <br>";
     
            x=1;    
        
        }
          else if(!ut1.match(/^[A-Z]*$/)){
         document.getElementById('ut1-err').innerHTML="<a href='#ut1' style='color:red'>4.1 Please Enter Your State/ UT In Upercase:</a> <br>";
         x=1;
     }
        else{
             document.getElementById('ut1-err').innerHTML="";
         } 
    }
    else {
        document.getElementById("ut1-err").style.display = "block";
    }
             
   //PIN
   if (document.getElementById("presentaddress").checked) {
    var pan2 = document.getElementById("pan2").value;

    if(pan2==""){
        document.getElementById('pan2-err').innerHTML="<a href='#pan2'style='color:red'> 4.2 Please Enter pan:</a><br>";
 
        x=1;    
    
    }
//     else if(!pan2.match(/^[A-Z]{5}[0-9]{4}[A-Z]$/)){
//      document.getElementById('pan2-err').innerHTML="<a href='#pan2' style='color:red'> 4.2 Please Enter Your Pancard In First 5 Upercase and 4Digits then 1 Upercase :</a> <br>";
//      x=1;
//  }
    else{
         document.getElementById('pan2-err').innerHTML="";
     } 
}
else {
    document.getElementById("pan2-err").style.display = "block";
}
      
//    //Mobile Number
//    var monumber1 = document.getElementById("monumber1").value;

//    if(monumber1==""){
//        document.getElementById('monumber1-err').innerHTML="<a href='#monumber1'style='color:red'> 4.2 Please Enter Mobile Number:</a><br>";

//        x=1;    
   
//    }
//    else if(monumber1.length<10 || monumber1.length>10 ){
//     document.getElementById('monumber1-err').innerHTML="<a href='#monumber1' style='color:red'>4.1 mobilenumber Must be 10 digit:</a> <br>";
//     x=1;
// }
//    else{
//         document.getElementById('monumber1-err').innerHTML="";
//     }    
//    //Telephone Number
//    var telnumber1 = document.getElementById("telnumber1").value;

//    if(telnumber1==""){
//        document.getElementById('telnumber1-err').innerHTML="<a href='#telnumber1'style='color:red'> 4.2 Please Enter Telephone Number:</a><br>";

//        x=1;    
   
//    }
//    else{
//         document.getElementById('telnumber1-err').innerHTML="";
//     }    
//    //E-mail ID
//    var email1 = document.getElementById("email1").value;

//    if(email1==""){
//        document.getElementById('email1-err').innerHTML="<a href='#email1'style='color:red'> 4.2 Please Enter E-mail ID:</a><br>";

//        x=1;    
   
//    }
//    else if(!email1.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
//     document.getElementById('email1-err').innerHTML="<a href='#email1' style='color:red'> 4.1 Please Enter Your Email In Must be combination Of @ :</a> <br>";
//     x=1;
// }
//    else{
//         document.getElementById('email1-err').innerHTML="";
//     }    
//     //   Emergency Contact Details 
       //Name and Address
       if (document.getElementById("presentaddress").checked) {
        var address = document.getElementById("address").value;

   if(address==""){
       document.getElementById('address-err').innerHTML="<a href='#address' style='color:red'> 5. Please Enter Name and Address:</a><br>";

       x=1;    
   
   }
   else{
        document.getElementById('address-err').innerHTML="";
    }
    }
    else {
        document.getElementById("address-err").style.display = "block";
    }
       
   //Mobile Number
   if (document.getElementById("presentaddress").checked) {
    var emonumber = document.getElementById("emonumber").value;

   if(emonumber==""){
       document.getElementById('emonumber-err').innerHTML="<a href='#emonumber' style='color:red'> 5. Please Enter Mobile Number:</a><br>";

       x=1;    
   
   }
   else{
        document.getElementById('emonumber-err').innerHTML="";
    }
}
else {
    document.getElementById("emonumber-err").style.display = "block";
}
        
   //Telephone Number
   if (document.getElementById("presentaddress").checked) {
    var etelnumber = document.getElementById("etelnumber").value;

    if(etelnumber==""){
        document.getElementById('etelnumber-err').innerHTML="<a href='#etelnumber' style='color:red'> 5. Please Enter Telephone Number:</a><br>";
 
        x=1;    
    
    }
    else{
         document.getElementById('etelnumber-err').innerHTML="";
     }    
 
}
else {
    document.getElementById("etelnumber-err").style.display = "block";
}
    
    //E-mail ID
    if (document.getElementById("presentaddress").checked) {
        var emailid = document.getElementById("emailid").value;

        if(emailid==""){
            document.getElementById('emailid-err').innerHTML="<a href='#emailid' style='color:red'> 5. Please Enter E-mail ID</a><br>";
     
            x=1;    
        
        }
        else if(!emailid.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
         document.getElementById('emailid-err').innerHTML="<a href='#emailid' style='color:red'> 5. Please Enter Your Email In Must be combination Of @ :</a> <br>";
         x=1;
     }
        else{
             document.getElementById('emailid-err').innerHTML="";
         }
     
    }
    else {
        document.getElementById("emailid-err").style.display = "block";
    }
        //Passport Certificate Number
    if (document.getElementById("re").checked) {
        var pcertificateno = document.getElementById("pcertificateno").value;

   if(pcertificateno==""){
       document.getElementById('pcertificateno-err').innerHTML="<a href='#pcertificateno' style='color:red'> 6.1. Please Enter Passport Certificate No:</a><br>";

       x=1;    
   
   }
   else{
        document.getElementById('pcertificateno-err').innerHTML="";
    }
    }
    else {
        document.getElementById("pcertificateno-err").style.display = "block";
    }
    
//Date of Issue 
if (document.getElementById("re").checked) {
    var doi = document.getElementById("doi").value;

if(doi==""){
    document.getElementById('doi-err').innerHTML="<a href='#doi' style='color:red'> 6.1. Please Enter Date of Issueg :</a><br>";

    x=1;    
}
else if (new Date(doi) >= today) {
    document.getElementById('doi-err').innerHTML = "<a href='#doi' style='color:red'>6.1 Issue Date Can't be in future Date</a><br/>";
    x = 1;
}
else{
     document.getElementById('doi-err').innerHTML="";
 }
}
else {
    document.getElementById("doi-err").style.display = "block";
}

//Date of Expiry  
if (document.getElementById("re").checked) {
    var doe = document.getElementById("doe").value;
if (doi > doe) {
    document.getElementById("doe-err").innerHTML = "<a href='#doi' style='color:red'>6.1 Issue Date Can't be grater then expairy Date </a><br>";
    x = false;
}
else if (doi < doe) {
    document.getElementById("doe-err").innerHTML = "";

}
else {
    document.getElementById("doe-err").innerHTML = "<a href='#doi'  style='color:red'>6.1 Enter Date Issue and Expire Date </a><br>";
    x = false;
}
}
else {
    document.getElementById("doe-err").style.display = "block";
}

// if(doe==""){
//     document.getElementById('doe-err').innerHTML="<a href='#doe' style='color:red'> 6.1. Please Enter Date of Expiry :</a><br>";

//     x=1;    

// }
// else{
//      document.getElementById('doe-err').innerHTML="";
//  }
//Place of Issue   
if (document.getElementById("re").checked) {
    var poi = document.getElementById("poi").value;

if(poi==""){
    document.getElementById('poi-err').innerHTML="<a href='#poi' style='color:red'> 6.1. Please Enter Place of Issue :</a><br>";

    x=1;    

}
else{
     document.getElementById('poi-err').innerHTML="";
 }
}
else {
    document.getElementById("poi-err").style.display = "block";
}

//6.2 Have you ever applied for passport, but not issued?
if (document.querySelector('input[name="issued"]:checked') == null) {
    document.getElementById("issued-err").innerHTML="<a href='#issued' style='color:red'>6.2 Have you ever applied for passport :</a><br>";
   
    x= 1;
}
else{
    document.getElementById("issued-err").innerHTML="";
}

 //File Number 
 if (document.getElementById("issued").checked) {
    var filenum = document.getElementById("filenum").value;

if(filenum==""){
    document.getElementById('filenum-err').innerHTML="<a href='#filenum' style='color:red'> 6.2. Please Enter File Number :</a><br>";

    x=1;    

}
else if(filenum.length<12 || filenum.length>12 ){
    document.getElementById('filenum-err').innerHTML="<a href='#filenum' style='color:red'> 6.2File Number 12 digit:</a> <br>";
    x=1;
}
else if(!filenum.match(/^([A-Z]{4})([0-9]+)$/)){
    document.getElementById('filenum-err').innerHTML="<a href='#filenum' style='color:red'>6.2  Please Enter Your File Number In First 4 Upercase and Digits  :</a> <br>";
    x=1;
}
else{
     document.getElementById('filenum-err').innerHTML="";
 }
    
}
else {
    document.getElementById("filenum-err").style.display = "block";
}
 
 //Month/Year of applying
 if (document.getElementById("issued").checked) {
    var moa = document.getElementById("moa").value;

if(moa==""){
    document.getElementById('moa-err').innerHTML="<a href='#moa' style='color:red'> 6.2. Please Enter Month/Year of applying :</a><br>";

    x=1;    

}
else{
     document.getElementById('moa-err').innerHTML="";
 }
    
}
else {
    document.getElementById("moa-err").style.display = "block";
}
 
 //Name of passport office
 if (document.getElementById("issued").checked) {
    var nop = document.getElementById("nop").value;

if(nop==""){
    document.getElementById('nop-err').innerHTML="<a href='#nop' style='color:red'> 6.2. Please Enter Name of passport office :</a><br>";

    x=1;    

}
else{
     document.getElementById('nop-err').innerHTML="";
 }
    
}
else {
    document.getElementById("nop-err").style.display = "block";
}
 
 


//7.Other details

//7.1.1
if (document.querySelector('input[name="odetails1"]:checked') == null) {
    document.getElementById("odetails1-err").innerHTML="<a href='#odetails1' style='color:red'>7.1.1 Please Select 7.1.1:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails1-err").innerHTML="";
}
//7.1.2
if (document.querySelector('input[name="odetails12"]:checked') == null) {
    document.getElementById("odetails2-err").innerHTML="<a href='#odetails2' style='color:red'>7.1.2 Please Select 7.1.2:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails2-err").innerHTML="";
}
//7.1.3
if (document.querySelector('input[name="odetails1"]:checked') == null) {
    document.getElementById("odetails3-err").innerHTML="<a href='#odetails3' style='color:red'>7.1.3 Please Select7.1.3 :</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails3-err").innerHTML="";
}
//7.1.4
if (document.querySelector('input[name="odetails4"]:checked') == null) {
    document.getElementById("odetails4-err").innerHTML="<a href='#odetails4' style='color:red'>7.1.4 Please Select 7.1.4 :</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails4-err").innerHTML="";
}
//7.2.1
if (document.querySelector('input[name="odetails5"]:checked') == null) {
    document.getElementById("odetails5-err").innerHTML="<a href='#odetails5' style='color:red'>7.2.1 Please Select 7.2.1:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails5-err").innerHTML="";
}
//7.3.1
if (document.querySelector('input[name="odetails6"]:checked') == null) {
    document.getElementById("odetails6-err").innerHTML="<a href='#odetails6' style='color:red'>7.3.1 Please Select 7.3.1:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails6-err").innerHTML="";
}
//7.3.2
if (document.querySelector('input[name="odetails7"]:checked') == null) {
    document.getElementById("odetails7-err").innerHTML="<a href='#odetails7' style='color:red'>7.3.2 Please Select 7.3.2:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails7-err").innerHTML="";
}
//7.3.3
if (document.querySelector('input[name="odetails8"]:checked') == null) {
    document.getElementById("odetails8-err").innerHTML="<a href='#odetails8' style='color:red'>7.3.3 Please Select 7.3.3:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails8-err").innerHTML="";
}

//7.4.1
if (document.querySelector('input[name="odetails9"]:checked') == null) {
    document.getElementById("odetails9-err").innerHTML="<a href='#odetails9' style='color:red'>7.4.1 Please Select 7.4.1:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails9-err").innerHTML="";
}
//7.4.2
if (document.querySelector('input[name="odetails10"]:checked') == null) {
    document.getElementById("odetails10-err").innerHTML="<a href='#odetails10' style='color:red'>7.4.2 Please Select 7.4.2:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails10-err").innerHTML="";
}
//7.4.3
if (document.querySelector('input[name="odetails11"]:checked') == null) {
    document.getElementById("odetails11-err").innerHTML="<a href='#odetails11' style='color:red'>7.4.3 Please Select 7.4.3:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails11-err").innerHTML="";
}
//7.4.4
if (document.querySelector('input[name="odetails12"]:checked') == null) {
    document.getElementById("odetails12-err").innerHTML="<a href='#odetails12' style='color:red'>7.4.4 Please Select 7.4.4:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails12-err").innerHTML="";
}
//7.5.1
if (document.querySelector('input[name="odetails13"]:checked') == null) {
    document.getElementById("odetails13-err").innerHTML="<a href='#odetails13' style='color:red'>7.5.1 Please Select 7.5.1:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails13-err").innerHTML="";
}
//7.5.2
if (document.querySelector('input[name="odetails14"]:checked') == null) {
    document.getElementById("odetails14-err").innerHTML="<a href='#odetails14' style='color:red'>7.5.2 Please Select 7.5.2:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails14-err").innerHTML="";
}
//7.5.3
if (document.querySelector('input[name="odetails15"]:checked') == null) {
    document.getElementById("odetails15-err").innerHTML="<a href='#odetails15' style='color:red'>7.5.3 Please Select 7.5.3:</a><br>";
   
    x= 1;
}
else{
    document.getElementById("odetails15-err").innerHTML="";
}






 //Fee amount in (Rs)
var fee = document.getElementById("fee").value;

if(fee==""){
    document.getElementById('fee-err').innerHTML="<a href='#fee' style='color:red'> 8.1. Please Enter Fee amount in (Rs):</a><br>";

    x=1;    

}
else{
     document.getElementById('fee-err').innerHTML="";
 }
 //DD Number
var dd = document.getElementById("dd").value;

if(dd==""){
    document.getElementById('dd-err').innerHTML="<a href='#dd' style='color:red'> 8.1. Please Enter DD Number:</a><br>";

    x=1;    

}


else if(!dd.match(/^[0-9]+$/)){
    document.getElementById('dd-err').innerHTML="<a href='#dd' style='color:red'>8.1 Please Enter Your DD Number In Digit:</a> <br>";
    x=1;
}

else{
     document.getElementById('dd-err').innerHTML="";
 }
 //DD Issue Date
var dddate = document.getElementById("dddate").value;

if(dddate==""){
    document.getElementById('dddate-err').innerHTML="<a href='#dddate' style='color:red'> 8.1. Please Enter DD Issue Date:</a><br>";

    x=1;    

}
else if (new Date(dddate) >= today) {
    document.getElementById('dddate-err').innerHTML = "<a href='#dddate' style='color:red'>8.1 Issue Date Can't be in future Date</a><br/>";
    x = 1;
}
else{
     document.getElementById('dddate-err').innerHTML="";
 }
 //DD Expiry Date
var ddedate = document.getElementById("ddedate").value;

if(ddedate==""){
    document.getElementById('ddedate-err').innerHTML="<a href='#ddedate' style='color:red'> 8.1. Please Enter DD Expiry Date:</a><br>";

    x=1;    

}
else{
     document.getElementById('ddedate-err').innerHTML="";
 }
 //Bank Name
var bankname = document.getElementById("bankname").value;

if(bankname==""){
    document.getElementById('bankname-err').innerHTML="<a href='#bankname' style='color:red'> 8.1. Please Enter Bank Name:</a><br>";

    x=1;    

}
else if(!bankname.match(/^[A-Z]*$/)){
    document.getElementById('bankname-err').innerHTML="<a href='#bankname' style='color:red'>8.1 Please Enter Your Surname In Upercase:</a> <br>";
    x=1;
}

else{
     document.getElementById('bankname-err').innerHTML="";
 }
 //Branch
var branch= document.getElementById("branch").value;

if(branch==""){
    document.getElementById('branch-err').innerHTML="<a href='#branch' style='color:red'> 8.1. Please Enter Branch:</a><br>";

    x=1;    

}
else if(!branch.match(/^[A-Z]*$/)){
    document.getElementById('branch-err').innerHTML="<a href='#branch' style='color:red'>8.1 Please Enter Your branch In Upercase:</a> <br>";
    x=1;
}


else{
     document.getElementById('branch-err').innerHTML="";
 }
 // Enclosures
var d1= document.getElementById("d1").value;

if(d1==""){
    document.getElementById('d1-err').innerHTML="<a href='#d1' style='color:red'> 9. Please Enter  Enclosures:</a><br>";

    x=1;    

}
else if(!d1.match(/^[A-Z]*$/)){
    document.getElementById('d1-err').innerHTML="<a href='#d1' style='color:red'>9. Please Enter Your Enclosures In Upercase:</a> <br>";
    x=1;
}

else{
     document.getElementById('d1-err').innerHTML="";
 }
 // Self Declaration
 //Place
var place= document.getElementById("place").value;

if(place==""){
    document.getElementById('place-err').innerHTML="<a href='#place' style='color:red'> 10. Please Enter  Place:</a><br>";

    x=1;    

}
else if(!place.match(/^[A-Z\s]*$/)){
    document.getElementById('place-err').innerHTML="<a href='#place' style='color:red'>10. Please Enter Your place In Upercase:</a> <br>";
    x=1;
}

else{
     document.getElementById('place-err').innerHTML="";
 }
 
 //Date
// var date= document.getElementById("date").value;

// if(date==""){
//     document.getElementById('date-err').innerHTML="<a href='#date' style='color:red'> 10. Please Enter  Date:</a><br>";

//     x=1;    

// }

// else{
//      document.getElementById('date-err').innerHTML="";
//  }
 //Signature1
var signature1= document.getElementById("signature1").value;

if(signature1==""){
    document.getElementById('signature1-err').innerHTML="<a href='#signature1' style='color:red'> 10. Please Enter  signature:</a><br>";

    x=1;    

}
else{
     document.getElementById('signature1-err').innerHTML="";
 }
 









    if(x==1){
         return false;
     }    
     else{
        document.getElementById('fnum-err').innerHTML="";
         
     }
       

}


//1.2 1.3 6.1
 function enable1()
     {
         //1.2
         
         document.getElementById("re-issue1").disabled=false;
         document.getElementById("re-issue2").disabled=false;
         document.getElementById("re-issue3").disabled=false;
         document.getElementById("re-issue4").disabled=false;
         document.getElementById("re-issue5").disabled=false;
         document.getElementById("re-issue6").disabled=false;
         //1.3
         if(document.getElementById("re-issue5").checked){
         document.getElementById("ch1").disabled=false;
         document.getElementById("ch2").disabled=false;
         document.getElementById("ch3").disabled=false;
         document.getElementById("ch4").disabled=false;
         document.getElementById("ch5").disabled=false;
         document.getElementById("ch6").disabled=false;
         document.getElementById("ch7").disabled=false;
         document.getElementById("ch8").disabled=false;
         document.getElementById("ch9").disabled=false;
         if(document.getElementById("ch9").checked){
            document.getElementById("other").disabled=false;
        }
        else{
            document.getElementById("other").disabled=true;
        }
        
        }
        else{
            document.getElementById("ch1").disabled=true;
            document.getElementById("ch2").disabled=true;
            document.getElementById("ch3").disabled=true;
            document.getElementById("ch4").disabled=true;
            document.getElementById("ch5").disabled=true;
            document.getElementById("ch6").disabled=true;
            document.getElementById("ch7").disabled=true;
            document.getElementById("ch8").disabled=true;
            document.getElementById("ch9").disabled=true;
               
        }
         //6.1
         document.getElementById("pcertificateno").disabled=false;
         document.getElementById("doi").disabled=false;
         document.getElementById("doe").disabled=false;
         document.getElementById("poi").disabled=false;
     }
    
    function disable1(){
        document.getElementById("re-issue1").disabled=true;
        document.getElementById("re-issue2").disabled=true;
        document.getElementById("re-issue3").disabled=true;
        document.getElementById("re-issue4").disabled=true;
        document.getElementById("re-issue5").disabled=true;
        document.getElementById("re-issue6").disabled=true;
        document.getElementById("ch1").disabled=true;
        document.getElementById("ch2").disabled=true;
        document.getElementById("ch3").disabled=true;
        document.getElementById("ch4").disabled=true;
        document.getElementById("ch5").disabled=true;
        document.getElementById("ch6").disabled=true;
        document.getElementById("ch7").disabled=true;
        document.getElementById("ch8").disabled=true;
        document.getElementById("ch9").disabled=true;
        document.getElementById("pcertificateno").disabled=true;
        document.getElementById("doi").disabled=true;
        document.getElementById("doe").disabled=true;
        document.getElementById("poi").disabled=true;
        document.getElementById("other").disabled=true;
    }

// 4.1 
function enable2()
{
    document.getElementById("houseno1").disabled=false;
    document.getElementById("village1").disabled=false;
    document.getElementById("districtofvillage1").disabled=false;
    document.getElementById("policestation1").disabled=false;
    document.getElementById("ut1").disabled=false;
    document.getElementById("pan2").disabled=false;
    // document.getElementById("monumber1").disabled=false;
    // document.getElementById("telnumber1").disabled=false;
    // document.getElementById("email1").disabled=false;
    document.getElementById("address").disabled=false;
    document.getElementById("emonumber").disabled=false;
    document.getElementById("etelnumber").disabled=false;
    document.getElementById("emailid").disabled=false;
}

function disable2(){
    document.getElementById("houseno1").disabled=true;
    document.getElementById("village1").disabled=true;
    document.getElementById("districtofvillage1").disabled=true;
    document.getElementById("policestation1").disabled=true;
    document.getElementById("ut1").disabled=true;
    document.getElementById("pan2").disabled=true;
    // document.getElementById("monumber1").disabled=true;
    // document.getElementById("telnumber1").disabled=true;
    // document.getElementById("email1").disabled=true;
    document.getElementById("address").disabled=true;
    document.getElementById("emonumber").disabled=true;
    document.getElementById("etelnumber").disabled=true;
    document.getElementById("emailid").disabled=true;}


//6.1
    function enable3()
    {
        document.getElementById("filenum").disabled=false;
        document.getElementById("moa").disabled=false;
        document.getElementById("nop").disabled=false;
    }
    
    function disable3(){
        document.getElementById("filenum").disabled=true;
        document.getElementById("moa").disabled=true;
        document.getElementById("nop").disabled=true;
    }
    //1.3
    function enable4()
    {   if(document.getElementById("re-issue5").checked){
        document.getElementById("ch1").disabled=false;
        document.getElementById("ch2").disabled=false;
        document.getElementById("ch3").disabled=false;
        document.getElementById("ch4").disabled=false;
        document.getElementById("ch5").disabled=false;
        document.getElementById("ch6").disabled=false;
        document.getElementById("ch7").disabled=false;
        document.getElementById("ch8").disabled=false;
        document.getElementById("ch9").disabled=false;
        // document.getElementById("other").disabled=false;
        if(document.getElementById("ch9").checked){
            document.getElementById("other").disabled=false;
        }
        else{
            document.getElementById("other").disabled=true;
        }
        
     }
    else{
        document.getElementById("ch1").disabled=true;
        document.getElementById("ch2").disabled=true;
        document.getElementById("ch3").disabled=true;
        document.getElementById("ch4").disabled=true;
        document.getElementById("ch5").disabled=true;
        document.getElementById("ch6").disabled=true;
        document.getElementById("ch7").disabled=true;
        document.getElementById("ch8").disabled=true;
        document.getElementById("ch9").disabled=true;
        document.getElementById("other").disabled=true;
        
    }
    }   
    //  1.3 other 
    //   function other(){
    //     document.getElementById("other").disabled=false;}
function other1(){
    if(document.getElementById("ch9").checked){
        document.getElementById("other").disabled=false;
    }
    else{
        document.getElementById("other").disabled=true;
    }
}

       
    


