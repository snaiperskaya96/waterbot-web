const userDAO = require('../api/user/dao/user-dao');
const adminDAO = require('../api/user/dao/admin-settings-dao');
const adminSettings = require('./adminSettings');

module.exports = [
    () => {
        userDAO.getAll({})
            .then((users) => {
                if (users.length != 0) return;
                console.log('Creating default user...');
                userDAO.createNew({
                    username: 'admin',
                    password: 'admin',
                    email: 'admin@admin.com',
                    isAdmin: true
                }, true);
            })
            .catch((error) => console.log(error));
    },
    () => {
        adminSettings.forEach(element => {
            adminDAO.findOne({name: element.name}, (error, found) => {
                if (error) return console.error(error);
                if (found) return;
                adminDAO.createNew(element);
            });
        });
    }
];