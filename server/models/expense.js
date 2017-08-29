let mongoose = require('mongoose');
let Schema = mongoose.Schema;

expenseSchema = Schema({
    name : {
             type: String,
             required: [true, 'enter expense name'],
            },    
    budgeted: { 
                type: Number,
               },
    actual:  {
                type: Number,
             },
    budget: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'budget',
    }
});

module.exports = mongoose.model('Expense', expenseSchema);