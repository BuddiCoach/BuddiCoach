var express = require('express');
var cors = require('cors');
var Expense = require('../models/expense.js');
var Budget = require('../models/budget.js');
var router = express.Router();


router.use(cors())


router.get('/message', function(req, res, next) {
  res.json('puss');
});

// get all budgets
router.get('/budgets/', function(req, res){
    Budget.find().populate('expenses').exec(function(err, budgets){
    if(err) res.json(err);
    res.json(budgets);
  });
});

// create new budget
router.post('/budgets/:name/:start_date/:end_date/', function(req, res){
    let newBudget = new Budget({
                                 name: req.params.name,
                                 start_date: req.params.start_date,
                                end_date: req.params.end_date,
                               });

     newBudget.save(function(err) {
                          if(err)
                            res.json(err);
                          res.json({ message: "Budget created"})
                    });
});

// add  new expense to budget
router.post('/budgets/:budgetName/:expenseName/:budgetedCost/:actualCost/', function(req, res){

  Budget.findOne({'name': req.params.budgetName},
  function(err, budget){

    // create new expense
     let newExpense = new Expense({
    'name': req.params.expenseName,
    'budgeted': req.params.budgetedCost,
    'actual': req.params.actualCost,
    'budget': budget._id, 
  });

    // save expense
    newExpense.save(function(err){
      if(err) res.json(err);
    });

    // add expense id to budget
    budget.expenses.push(newExpense._id);
    // save new budget
    budget.save(function(err){
      if(err) res.json(err);
      res.json({'status': 'success'});

      
    });
  });

});

// delete a budget
router.post('/budgets/delete/:name/', function(req, res){
  Budget.remove({'name': req.params.name}, function(err){
    if(err) res.json(err);
    res.json({'status': 'success'});
  });
});

module.exports = router;
