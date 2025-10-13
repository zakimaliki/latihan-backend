import Pool from '../config/db.js'

const selectAll = () => {
    return Pool.query('select id, name, stock, price from product')
}

const select = async (id) => {
    return await Pool.query(`select id, name, stock, price from product where id = $1`, [id]);
}

const insert = async (data) => {
    const { name, stock, price } = data
    return await Pool.query(`INSERT INTO product (name, stock, price) VALUES ($1, $2, $3)`, [name, stock, price]);
}

const update = async (data) => {
    const { name, stock, price, id } = data
    return await Pool.query(`UPDATE product set name = $1, stock = $2, price = $3 where id = $4`, [name, stock, price, id]);

}

const deleteData = async (id) => {
    return await Pool.query(`delete from product where id = $1`, [id]);
}

const countData = () => {
    return Pool.query(`select count(*) from product`)
}

const findId = (id) => {
    return Pool.query(`select id from product where id ${id}`)
}

export {
    selectAll,
    select,
    insert,
    update,
    deleteData,
    countData
}

