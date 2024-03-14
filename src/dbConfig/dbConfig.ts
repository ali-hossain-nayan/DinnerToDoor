
import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;//connection

        connection.on('connected', () => {//this are events we can listen like connected,error
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}

// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "7e54f7e4adbbb2",
//       pass: "12cd390137afeb"
//     }
//   });