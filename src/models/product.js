const Pool = require('../config/db')

const selectAll = () => {
    return Pool.query('select id, name, stock, price from product')
}

const select = (id) => {
    return Pool.query(`select id, name, stock, price from product where id = ${id}`)
}

const insert = (data) => {
    const { name, stock, price } = data
    return Pool.query(`INSERT INTO product ("name", "stock", "price") VALUES ('${name}', ${stock} , ${price})`)
}

const update = (data) => {
    const { name, stock, price, id } = data
    return Pool.query(`update product set "name" = '${name}', "stock" = ${stock}, price = ${price} where id = ${id}`)
}

const deleteData = (id) => {
    return Pool.query(`delete from product where id = ${id}`)
}

const countData = () => {
    return Pool.query(`select count(*) from product`)
}

const findId = (id) => {
    return Pool.query(`select id from product where id ${id}`)
}

module.exports = {
    selectAll,
    select,
    insert,
    update,
    deleteData,
    countData
}

