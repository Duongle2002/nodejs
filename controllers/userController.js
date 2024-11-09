const User = require('../models/User');

// Display search page
exports.getSearchPage = (req, res) => {
    res.render('index', { users: [] });
};

// Handle search functionality
exports.searchUsers = async (req, res) => {
    const { name, email, duty, ageMin, ageMax } = req.query;
    let filter = {};

    // Search by name or email
    if (name) filter.name = new RegExp(name, 'i');
    if (email) filter.email = new RegExp(email, 'i');

    // Filter by duty
    if (duty) filter.duty = duty;

    // Age range filter
    if (ageMin && ageMax) {
        filter.age = { $gte: parseInt(ageMin), $lte: parseInt(ageMax) };
    } else if (ageMin) {
        filter.age = { $gte: parseInt(ageMin) };
    } else if (ageMax) {
        filter.age = { $lte: parseInt(ageMax) };
    }

    const users = await User.find(filter);
    res.render('index', { users });
};

// Display user detail page
exports.getUserDetail = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('detail', { user });
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
};
exports.getAllUsersDetail = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}
