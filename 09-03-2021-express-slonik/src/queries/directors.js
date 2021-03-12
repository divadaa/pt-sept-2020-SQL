const { sql } = require('slonik')

const getNameNotNull = async db => {
    try {
        return await db.query (sql `SELECT name
            FROM directors
            WHERE name is NOT NULL`)
    } catch(error){
        console.info('>something went wrong: ' ,error.message)
        return null
    }
}



const getNickQuery = async db => {
    try {
        return await db.query (sql`SELECT nickname, query_name
        FROM directors`)
    }

     catch(error){
    console.info('>something went wrong: ' ,error.message)
    return null

}
}






// Directors-related queries



module.exports = { getNameNotNull, getNickQuery }