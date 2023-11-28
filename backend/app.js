import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import login from './login';
import reservation from './reservation';

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://sindhujabadana1623:QnFmZjIyXkpb8vNU@cluster0.vnabpuv.mongodb.net/logindata?retryWrites=true&w=majority', {
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(4000, () => {
      console.log("Connected");
    });
  })
  .catch((err) => console.log(err));

app.post('/addlogin', (req, res, next) => {
  const { username, email, password } = req.body;
  const login1 = new login({
    username,
    email,
    password
  });
  
  login1.save()
    .then((result) => {
      return res.send({ msg: "inserted", result });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).send({ error: 'Internal Server Error' });
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await login.findOne({ username, password });
      if (user) {
        
        res.status(200).send(user.username)
        
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
});


app.post('/addreservation',(req,res,next) =>{
    const {username,name,phone,date,time,selectedTableType}=req.body;
    const reservation1=new reservation({
        username,
        name,
        phone,
        date,
        time,
        selectedTableType
    });
    reservation1.save()
    .then((result) => {
        return res.send({ msg: "inserted", result });
      })
});

app.get('/getdata',async(req,res,next)=>{
    let reservedata
    try{
        reservedata =await reservation.find()
    }
    catch(err){
        console.log(err)
    }
    if(!reservedata){
        console.log("no reservation details found");
    }
    return res.status(200).json({reservedata})
});















// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import nodemailer from 'nodemailer';

// // Import your login and reservation models
// import login from './login';
// import reservation from './reservation';

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// // Replace this with your actual MongoDB connection URL
// mongoose.connect('mongodb+srv://sindhujabadana1623:QnFmZjIyXkpb8vNU@cluster0.vnabpuv.mongodb.net/logindata?retryWrites=true&w=majority', {
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     app.listen(4000, () => {
//       console.log("Connected");
//     });
//   })
//   .catch((err) => console.log(err));

// // Create nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'sindhujabadana1623@gmail.com', // replace with your email
//     pass: 'uicx mbei dqwc vaum', // replace with your email password
//   },
// });

// app.post('/addlogin', (req, res, next) => {
//   const { username, email, password } = req.body;
//   const login1 = new login({
//     username,
//     email,
//     password,
//   });

//   login1.save()
//     .then((result) => {
//       return res.send({ msg: "inserted", result });
//     })
//     .catch((error) => {
//       console.error(error);
//       return res.status(500).send({ error: 'Internal Server Error' });
//     });
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await login.findOne({ username, password });
//     if (user) {
//       res.status(200).send(user.username);
//     } else {
//       res.status(401).send('Invalid credentials');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });


// app.post('/addreservation', (req, res, next) => {
//   const { username, name, phone, date, time, selectedTableType } = req.body;
//   const reservation1 = new reservation({
//     username,
//     name,
//     phone,
//     date,
//     time,
//     selectedTableType,
//   });

//   reservation1.save()
//     .then((result) => {
//       return res.send({ msg: "inserted", result });
//     })
//     .catch((error) => {
//       console.error(error);
//       return res.status(500).send({ error: 'Internal Server Error' });
//     });
// });

// app.post('/getemail', async (req, res) => {
//   const { username } = req.body;

//   try {
//     const user = await login.findOne({ username });
//     if (user && user.email) {
//       const userEmail = user.email;
//       res.status(200).json({ email: userEmail });
//     } else {
//       res.status(404).json({ error: 'User not found or email not provided' });
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });


// app.get('/getdata', async (req, res, next) => {
//   let reservedata;
//   try {
//     reservedata = await reservation.find();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!reservedata) {
//     console.log("no reservation details found");
//   }
//   return res.status(200).json({ reservedata });
// });

// app.post('/sendemail', async (req, res) => {
//   const { username, subject, text } = req.body;

//   try {
//     const user = await login.findOne({ username });
//     if (user && user.email) {
//       const to = user.email;

//       const mailOptions = {
//         from: 'sindhujabadana1623@gmail.com', // replace with your email
//         to,
//         subject,
//         text,
//       };

//       const info = await transporter.sendMail(mailOptions);
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     } else {
//       res.status(404).json({ error: 'User not found or email not provided' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
