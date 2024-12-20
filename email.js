const nodemailer=require('nodemailer')
const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "santup205@gmail.com",
      pass: "ijsh ybkm wikw dddi",
    },
  });
 const detail={
     recipent:"santu.patra.iotcs27@heritageit.edu.in",
     table:5,
     id:"dSm4mdUTkg",
     name:"Santu Patra",
     Webmail:"http://localhost:5173/"

   }
 const sendEmail=async (detail)=> {
   
    const info = await transporter.sendMail({
      from: {
        name:"DS@productions.dev",
        address:"santup205@gmail.com"
      },
      to: detail.recipent,
      subject:"Confirmation for seat booking", 
      html:`
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Booking Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f8f8;
            margin: 0;
            padding: 0;
        }
        .email-container {
            background-color: #ffffff;
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .header img {
            width: 90px;
            border-radius:50%;
        }
        .content {
            color: #333;
        }
        .content p {
            font-size: 16px;
            line-height: 1.5;
        }
        .content .highlight {
            font-weight: bold;
            color: #f76c6c;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
            color: #888;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f76c6c;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin-top: 20px;
        }
        
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://dynamic.design.com/asset/logo/88d08656-256f-4be4-9829-8e527f7940c1/logo-search-grid-1x?logoTemplateVersion=1&v=638680178308930000&text=IGNIS+Dine+House" alt="Restaurant Logo">
            <h2>Booking Confirmation</h2>
        </div>
        <div class="content">
            <p>Dear ${detail.name},</p>
            <p>Thank you for choosing IGNIS Dine House. Your reservation has been successfully confirmed. Below are the details of your booking:</p>
            
            <p><span class="highlight">Booking ID:</span>${detail.id}</p>
            <p><span class="highlight">Seat Number:</span>${detail.table}</p>

            <p>We look forward to serving you at IGNIS Dine House. Should you have any questions or need to modify your reservation, feel free to contact us.</p>

            <a href=${detail.Webmail} class="button">Visit Our Website</a>
        </div>
        <div class="footer">
            <p>IGNIS Dine House | Kolkata-700109</p>
            <p>Contact-Us: DS@productions.dev </p>
        </div>
    </div>
</body>
</html>
      `
      
    });}
module.exports=sendEmail
