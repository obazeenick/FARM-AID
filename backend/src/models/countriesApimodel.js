/*
import db from '../../db/db.js'

export const getItem = id => {
    try {
        const country = db?.country?.filter(country => country?.id === id)[0]
        return country
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.country
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.countries.findIndex(country => country.id === id)

        if (index === -1) throw new Error('country not found')
        else {
            db.countries[index] = data
            return db.countries[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {  
        const newPet = { id: db.countries.length + 1, ...data }
        db.countries.push(newCountry)
        return newCountry

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.countries.findIndex(country => country.id === id)

        if (index === -1) throw new Error('country not found')
        else {
            db.countries.splice(index, 1)
            return db.countries
        }
    } catch (error) {

    }
}
*/
