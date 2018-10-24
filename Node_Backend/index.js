var express=require('express');
var sql=require('mysql');
var app=express();
var bodyParser=require('body-parser');
var connection=sql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'student_db'
});
//connection
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
connection.connect(function(err){
  if (err) throw err
  console.log('wow Connection done with mysql DB')

//create a new student record into mysql db
  app.post('/register',function(req,res){ 
//console.log("Request data",req.body)
  var box=req.body;
  var parameter=[box.enrollId,box.firstName,box.lastName,box.email,box.password];
  console.log("present parameters show",parameter)
// if connection is successful
  connection.query('insert into student_table (s_id,s_firstname,s_lastname,s_email,s_password) values (?,?,?,?,?)',parameter,function(err,result){
// if any error while executing above query, throw error
    if(err)throw err
// if there is no error, you have the result
    console.log(result)
    var text='{"responseCode":"000","responseMessage":"hey, Input data is storing"}';
    res.send(text);
//console.log("text::",text)
//res.send('Hello,'+result[0].s_lastname);
  })
});

//FETCH data from mysql db
app.get('/registerFetch',function(req,res){
  console.log("data by get method")
  connection.query('SELECT * FROM student_table', function (err, result){
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
});
// crud Delete record
app.delete('/deleteRecord/:id',(req,res)=>{
console.log('successfull delete id number',req.body)
 connection.query('DELETE FROM student_table WHERE s_id = ?',[req.params.id],(err,rows,fields)=>{
  if(err)throw error;
  console.log("After deleting");
  let newVar = '{"response":"Response crud in index.js"}';
  newVar = JSON.parse(newVar);
  console.log("console newVar data",newVar);
  //res.send('Deleted Succesfully');
  res.send(JSON.stringify(newVar)); 
 });
});

});
app.listen(3000);