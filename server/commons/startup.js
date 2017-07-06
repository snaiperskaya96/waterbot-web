const userDAO = require('../api/user/dao/user-dao');

module.exports = [
    () => {
        userDAO.getAll({})
            .then((users) => {
                if (users.length != 0) return;
                console.log('Creating default user...');
                userDAO.createNew({
                    username: 'admin',
                    password: 'admin',
                    email: 'admin@admin.com'
                });
            })
            .catch((error) => console.log(error));
    },
];