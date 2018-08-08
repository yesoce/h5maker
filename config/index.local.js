const all = {
    port: 9000,
    ip: process.env.ip || '0.0.0.0',
    secrets: {
        session: 'h5maker'
    },
    mongo: {
        uri: 'mongodb://172.18.20.15:27017/h5maker',
        user: 'h5maker',
        pass: '3560-79f57e422d'
    },
    userRoles: ['guest', 'user', 'admin']
}
module.exports = all