function getGoogleHomePage(){
    const data = new Promise((resolve,reject)=>{
        request('https://www.google.com', function (error, response, body) {
            if(error){
                console.error('error:', error);
                return reject(error);      
            }
            else{
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            return resolve(body);
            }
            });
    })
    return data;
}
   getGoogleHomePage().then((res)=>{console.log("RESULT ==>", res)}).catch((err)=>{console.log("Error ==>",err)});