import {Schema, model } from 'mongoose';

const carsSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    owners: [String],
    isbn: String,
    data: Date,
    color: String,
    price:{ type: Number}

});

const Book = model("cars", bookSchema);

export default Book;