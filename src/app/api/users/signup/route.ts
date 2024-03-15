import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
// import { sendEmail } from "@/helpers/mailer";
// Initialize database connection
connect();

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user with hashed password
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification mail
    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    // Return a success response indicating the user was created
    return NextResponse.json({ message: "User created successfully" }, { status: 200 });
    
  } catch (error: any) {
    // Handle any errors that occur during the process and return an error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}