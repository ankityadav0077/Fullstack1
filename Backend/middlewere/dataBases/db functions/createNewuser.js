import { User } from '../models/userSchema.js';
export default function createNewUser(req, res,next) {
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    newUser.save()
        .then(user =>{ req.user=user
            next()
        })
        .catch(err => res.status(400).json({ error: err.message }));
    // next();//this is not need here as we are sending response in then and catch block 
    // if we use next() here it will give error cannot express will look for other middleware to send response
}

// const {username, password, email,role} = {username:"ankit Yadav",password:"ankit123",email:'ankityadav.@gmail.com',role:'admin'};
// const newUser = new User({ username, password, email,role });
//     newUser.save()
//     .then(user => {
//          console.log('User created:', user);
//     })