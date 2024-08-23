module.exports.sendMessage = (req, res) => {
    try {
         let user = res.user;
         let { message } = req.body;
         let id = req.params;
         res.send(
           `message sent by the user ${user.fullName} messsage is : ${message}`
         ); 
    } catch (error) {
        console.log("error in send message :>> ", error.message);
        res.status(401).send("Internal Server Error");
    }

};
