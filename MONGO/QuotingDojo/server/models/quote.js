const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true, minlength: 2 
    },
    quote: {
        type: String, 
        required: true, minlength: 2
    }
    }, 
        {timestamps: true}
    );

const Quote = mongoose.model('Quote',QuoteSchema); 

