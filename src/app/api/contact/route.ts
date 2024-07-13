import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
import 'dotenv'


export async function POST(req: NextRequest){
    try {
        const {name,email,data} = await req.json();

        if(!name && !email && !data){
            return NextResponse.json({
                message: "All fields are required",
                success: false
            })

        }
        console.log(name, email, data);
    
        const transporter = nodemailer.createTransport({
                  
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASS,
            },
          });
    
          const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `FeedBack from ${name} ${email}` ,
            text: `${data}`,
            html:`<h1>Feedback from ${name} ${email}<h1> <hr> <p style= "font-size: 20px">${data}<p>`
          };
      
        await transporter.sendMail(mailOptions);
    
    
      return NextResponse.json({
            message: "Feedback Sent!",
            success: true
        })
        
    } catch (error:any) {
        console.log(error.message)
        return NextResponse.json({
            error: error.message,
            success: false

        })
        
    }

   
    
}