const controller = {}

controller.indexController = (req, res)=>{
    res.send('<h2>El servidor está online</h2>')
}


module.exports = controller;