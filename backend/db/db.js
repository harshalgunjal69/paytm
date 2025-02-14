// backend/db.js

const { mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
    },

    lastName: {
        type: String,
        required: true,
        maxLength: 50,
    },

    password: {
        type: String,
        minLength: 6,
    },
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //Reference to the User Model.
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
});

async function connectToDb(req, res) {
    try {
        // to initialise the db and also connect to it
        await mongoose.connect('mongodb://localhost:27017/paytm');
        console.log('Db Connected');
    } catch (error) {
        res.status(500).json({
            msg: 'getting error while connecting to the db.',
        });
    }
}

//middleware to check uniqueness of the user
async function uniqueUserValidation(req, res, next) {
    try {
        const userToFind = await User.findOne({ username: req.body.username });
        if (userToFind) {
            return res
                .status(400)
                .json({ msg: 'Email already taken / user already exists' });
        }
        console.log('user is unique' + req.body.username);
        next();
    } catch (error) {
        res.send(500).json({
            msg: 'getting error while unique user validation.',
        });
    }
}

// Method to generate a hash from plain text
userSchema.methods.createHash = async function (plainTextPassword) {
    // Hashing user's salt and password with 10 iterations,
    const saltRounds = 10;

    // First method to generate a salt and then create hash
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword, salt);
};

// Validating the candidate password with stored hash and hash function
userSchema.methods.validatePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

//Models
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account,
    connectToDb,
    uniqueUserValidation,
};
