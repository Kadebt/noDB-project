const tricks = require('../../tricks.json')
let id = 0

module.exports = {
    getTricks: (req, res) => {
        res.status(200).send(tricks)
     },

     editTrick: (req, res) => {
         const { id } = req.params
         console.log(req.body)
         const { newName } = req.body

         const index = tricks.findIndex
         (tricks => {
             return +tricks.id === +id
         })

         if (index === -1){
             return res.status(404).send('Trick not found')
         }
         tricks[index].name = newName

         res.status(200).send(tricks)
     },

     deleteTrick: (req, res) => {
        const { id } = req.params
        const index = tricks.findIndex(
            tricks => {
                return +tricks.id === +id
            })
            console.log(index)
            if (index === -1) {
                return res.status(500).send('Trick not found')
            }
            tricks.splice(index, 1)

            res.status(200).send(tricks)
     }
}