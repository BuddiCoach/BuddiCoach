var mongoose = require('mongoose');


budgetSchema = new mongoose.Schema({
    name: {
            type: String,
            required: [true, 'enter budget name.' ]
          },
    expenses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Expense'
              }],
    start_date : { 
                   type: Date, 
                   default: Date.now 
                 },
    end_date : { 
                 type: Date, 
                 default: Date.now 
               },
});

module.exports = mongoose.model('Budget', budgetSchema);
