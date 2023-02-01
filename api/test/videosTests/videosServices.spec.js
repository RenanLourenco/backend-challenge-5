const database = require('../../models')
const SequelizeMock = require('sequelize-mock')
const dbMock = new SequelizeMock();
const Services = require('../../services/Services')
const videosServices = new Services('Videos')

let Video = dbMock.define('Video',{
    titulo: "mock-test",
    descricao:"mock-test",
    url:"https://www.youtube.com/watch?v=18Dgf7lb9QA&ab_channel=Rocketseat",
})


describe('Create Video', () => {
    
    beforeEach(done =>{
        done()
    })
    afterAll(done =>{
        done()
    })

    it('criar um novo video com sucesso', async () => {
       const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        const video = await videosServices.registerCreate({
            titulo: "mock-test",
            descricao:"mock-test",
            url:"https://www.youtube.com/watch?v=SoqfzghnVsg",
            categoriaId: 2
        })
       
       expect(video.url).toMatch(regex)
       expect(video).toHaveProperty("id")
    })

    it('criar um novo video com o url sem ser do youtube (testando por exemplo do linkedin)', async () =>{ 
        try {
            const video = await videosServices.registerCreate({
                titulo: "teste nao é pra ir",
                descricao:"testeSuccess",
                url:"https://www.linkedin.com/in/renan-lourenco/",
            })
        } catch (error) {
            expect(error.message).toBe('Validation error: Validation is on url failed')
        }
    })
    

})