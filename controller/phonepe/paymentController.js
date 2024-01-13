const nodemailer = require("nodemailer");
const TravelContactOoty = require("../../Scheema/TravelContact");
const TravelEnquireOoty = require("../../Scheema/TravelEnquiry");

const TravelEnquire =  async (req, res) => {

      try {
        const {Name , Number , Email , Message ,Adult , Child } =
          req.body;
        const newOrderCon = TravelEnquireOoty({
          Name : Name,
          Number:Number,
          Email : Email,
          Message:Message,
          Child:Child,
          Adult:Adult
          
        });
    
       const condata =  await newOrderCon.save();
        res.send({
          msg: condata
          
        });
    
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
          }
      });
      const mailOptions = {
          from: process.env.EMAIL,
          to: Email ,  
          subject: "Confirmation",
          html: `
    
          <div style="height: auto; width:100% ;backgroud-color:white;">
          <div>
          <!-- <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 56px; height:56px"></div> -->
          <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 100%; height : 30vh;"></div>
          
          <br />
          <br />
          <div style="text-align: center;"><h2>Thanks For Choosing  Kane Smith Travels</h2></div>
          <br>
          <div style="text-align: center;">Welcome to  Kane Smith Travels Ooty</div>
          <div style="text-align: center;">Our team will contact you soon.</div>
            <br>
            <div style="width: 100%; text-align: center;"><h2>Customer Information</h2></div>
            <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Name</span> : ${Name}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Number No</span> : ${Number}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Email</span> : ${Email}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Message </span> : ${Message}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Child </span> : ${Child}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Adult </span> : ${Adult}</div>
          <br>
          
          <br>
              <div style= "width: 100%; display: flex; justify-content : space-between;">
                <div style="margin-left: 40px;">Phone Number : +91  6382 684 233</div>
                <div  style="margin-left: 20px;">Email Address : enquiry.kanesmithtravels@gmail.com</div>
              </div>
          
          </div>
          
            
      
        `
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log("Error" + error)
          } else {
              console.log("Email sent:" + info.response);
              res.status(201).json({status:201,info})
          }
    
      })
    
    
      const mailOptionsB = {
        from: process.env.EMAIL,
        to: "enquiry.kanesmithtravels@gmail.com" ,  
        subject: "Customer details",
        html: `
    
        <div style="height: auto; width:100% ;backgroud-color:white;">
        <div>
        <!-- <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 56px; height:56px"></div> -->
        <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 100%; height : 30vh;"></div>
        
        <br />
        <br />
        <div style="text-align: center;"><h2>Thanks For Choosing  Kane Smith Travels</h2></div>
        <br>
        <div style="text-align: center;">Welcome to  Kane Smith Travels Ooty</div>
        <div style="text-align: center;">Our team will contact you soon.</div>
          <br>
          <div style="width: 100%; text-align: center;"><h2>Customer Information</h2></div>
          <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Name</span> : ${Name}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Number No</span> : ${Number}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Email</span> : ${Email}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Message </span> : ${Message}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Child </span> : ${Child}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Adult </span> : ${Adult}</div>
        <br>
        
        <br>
            <div style= "width: 100%; display: flex; justify-content : space-between;">
              <div style="margin-left: 40px;">Phone Number : +91  6382 684 233</div>
              <div  style="margin-left: 20px;">Email Address : enquiry.kanesmithtravels@gmail.com</div>
            </div>
        
        </div>
          
    
      `
    };
    
    transporter.sendMail(mailOptionsB, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
    
    })
      
    
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
      }

  };

  const TravelContact =  async (req, res) => {

      try {
        const {Name , Number , Email , Message  } =
          req.body;
        const newOrderCon = TravelContactOoty({
          Name : Name,
          Number:Number,
          Email : Email,
          Message:Message
          
        });
    
       const condata =  await newOrderCon.save();
        res.send({
          msg: condata
          
        });
    
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
          }
      });
      const mailOptions = {
          from: process.env.EMAIL,
          to: Email ,  
          subject: "Confirmation",
          html: `
    
          <div style="height: auto; width:100% ;backgroud-color:white;">
          <div>
         
          <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 100%; height : 30vh;"></div>
          <br />
          <br />
          <div style="text-align: center;"><h2>Thanks For Choosing  Kane Smith Travels</h2></div>
          <br>
          <div style="text-align: center;">Welcome to  Kane Smith Travels Ooty</div>
          <div style="text-align: center;">Our team will contact you soon.</div>
            <br>
            <div style="width: 100%; text-align: center;"><h2>Customer Information</h2></div>
            <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Name</span> : ${Name}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Number No</span> : ${Number}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Email</span> : ${Email}</div>
          <br>
            <div style="margin-left: 40px;"><span style="font-weight: bold;">Message </span> : ${Message}</div>
          <br>
          
          <br>
              <div style= "width: 100%; display: flex; justify-content : space-between;">
                <div style="margin-left: 40px;">Phone Number : +91  6382 684 233</div>
                <div  style="margin-left: 20px;">Email Address : enquiry.kanesmithtravels@gmail.com</div>
              </div>
          
          </div>
          
            
      
        `
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log("Error" + error)
          } else {
              console.log("Email sent:" + info.response);
              res.status(201).json({status:201,info})
          }
    
      })
    
    
      const mailOptionsB = {
        from: process.env.EMAIL,
        to: "enquiry.kanesmithtravels@gmail.com" ,  
        subject: "Customer details",
        html: `
    
        <div style="height: auto; width:100% ;backgroud-color:white;">
        <div>
       
        <div style="text-align: center;"><img src="https://i.postimg.cc/j2Spwxb0/Rectangle-3.png" style="width: 100%; height : 30vh;"></div>
        <br />
        <br />
        <div style="text-align: center;"><h2>Thanks For Choosing  Kane Smith Travels</h2></div>
        <br>
        <div style="text-align: center;">Welcome to  Kane Smith Travels Ooty</div>
        <div style="text-align: center;">Our team will contact you soon.</div>
          <br>
          <div style="width: 100%; text-align: center;"><h2>Customer Information</h2></div>
          <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Name</span> : ${Name}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Number No</span> : ${Number}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Email</span> : ${Email}</div>
        <br>
          <div style="margin-left: 40px;"><span style="font-weight: bold;">Message </span> : ${Message}</div>
        <br>
        
        <br>
            <div style= "width: 100%; display: flex; justify-content : space-between;">
              <div style="margin-left: 40px;">Phone Number : +91  6382 684 233</div>
              <div  style="margin-left: 20px;">Email Address : enquiry.kanesmithtravels@gmail.com</div>
            </div>
        
        </div>
        
          
    
      `
    };
    
    transporter.sendMail(mailOptionsB, (error, info) => {
        if (error) {
            console.log("Error" + error)
        } else {
            console.log("Email sent:" + info.response);
            res.status(201).json({status:201,info})
        }
    
    })
      
    
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
      }

  };

module.exports = {
    TravelEnquire,
    TravelContact
}
