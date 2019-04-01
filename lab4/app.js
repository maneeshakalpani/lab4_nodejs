const os=require('os');
//import fs system to read the test.txt file
const fs=require('fs');
//import http module
const http=require('http');

//use system variable __dirname to set the file location

const fileName=__dirname+'/test.txt';

//2).
console.log('Architecture'+os.arch());
console.log('cpu'+os.cpus().length);
console.log('os'+os.platform());
//1).
console.log("hello world");

//
//read file
//3).
fs.readFile(fileName,(err,data)=>{

    if(err){

        console.error(err);
    }

    console.log(data.toString());
    //console.log(data);


});

//synchronously reading
const data=fs.readFileSync(fileName);
console.log(data.toString());
//4).
// create two variables for source and destination




const outFileName=__dirname+'/test-copy.txt';
//create read and write stream to copy test.txt file to test-copy
const readStream = fs.createReadStream(fileName);

const writeStream = fs.createWriteStream(outFileName);
readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

http.createServer((req,res)=>
{

    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello world</h1>');
    res.end();

}).listen(3000);
//add a POST request
/*
http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello world</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',data=>{

                res.write('<h1>Hello'+data+'</h1>');
                res.end();

            });

            break;
    }






}).listen(3000,(err)=>{

    console.log('server is listening to port 3000')

});

*/


