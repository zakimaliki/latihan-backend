import Pool from '../config/db.js'
const findEmail = (email) => {
    return new Promise((resolve, reject) =>
        Pool.query(`SELECT * FROM users WHERE email='${email}'`, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    )
}
const create = (data) => {
    const { id, email, passwordHash, fullname, role } = data
    return new Promise((resolve, reject) =>
        Pool.query(`INSERT INTO users(id, email,password,fullname,role) VALUES('${id}','${email}','${passwordHash}','${fullname}','${role}')`, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    )
}

export { findEmail, create }