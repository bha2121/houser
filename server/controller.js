

module.exports ={

    getAllHouses: (req, res) =>{
        let db = req.app.get('db')
        db.get_houses()
        .then(houses =>{
            res.status(200).send(houses)
        }).catch(()=>{
            res.status(404).send('getAllHousesNotWorking')
         })
    },


    create: (req, res) =>{
        const {name, address, city, state, zip, img, mortgage, rent} = req.body
        let db = req.app.get('db')
        db.create_house([name, address, city, state, zip, img, mortgage, rent])
        .then(()=>{
            res.status(200).send('House Added')
        }).catch(()=>{
            res.status(404).send('addHouseNotWorking')
         })
    },

    delete: (req, res) =>{
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_house(id)
        .then(()=>{
            res.status(200).send(id)
        }).catch(()=>{
            res.status(404).send('deleteHouseNotWorking')
         })
    }


}
