var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Goapache/777!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start()
});

function start() {
    var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products"
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "\nItem ID: " +
                res[i].item_id +
                " || " +
                res[i].product_name +
                " || Department: " +
                res[i].department_name +
                " || Price: $" +
                res[i].price +
                " || Stock: " +
                res[i].stock_quantity
            )
        }
inquirer.prompt({
    name: "ChooseItem",
    type: "input",
    message: "\nWelcome to Bamazon. What is the Item ID of the product you wish to purchase?"
}).then(function (answer) {
    var query2 = "UPDATE products SET stock_quantity = GREATEST(0, stock_quantity - 1) WHERE item_id =" + parseInt(answer.ChooseItem)
    var query3 = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products" 
    // console.log(res[parseInt(answer.ChooseItem)-1].stock_quantity)})})}

    connection.query(query2, function (err, res) {
        if (err) throw err;
    connection.query(query3, function (err, res) {
            if (err) throw err;
    var outOfStock = res[parseInt(answer.ChooseItem)-1].stock_quantity
    if (outOfStock == 0){
    console.log("Sorry! That item is out of stock.")
    start()}
    
    else{start()}
   
    })})

    })})}
