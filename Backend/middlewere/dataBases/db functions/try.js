import { User } from "../models/userSchema.js";

export default function tryDb() {
    // Example: Fetch all users from the database
    User.findOne({username:"ankit Yadav"})
        .then(users => {
            console.log('All users:', users);
        })
        .catch(err => {
            console.error('Error fetching users:', err);
        });
    return null
}               