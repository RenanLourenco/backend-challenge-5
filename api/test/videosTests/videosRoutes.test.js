const request = require('supertest')
const app = require('../../index.js')
const database = require('../../models')
const Services = require('../../services/Services')
const videosServices = new Services('Videos')

describe('Videos routes', () => {
    describe('Videos routes get', () => {
    
        it('should show all videos', async () =>{
            const res = await request(app).get('/videos')
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(expect.arrayContaining([{
                id: expect.any(Number),
                titulo: expect.any(String),
                descricao: expect.any(String),
                url: expect.any(String),
                categoriaId: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }]))
        })
        it('search for the video with the title on the query params', async () => {
            const title = 'Video com categoria'
            const res = await request(app).get(`/videos/search?titulo=${title}`)
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(expect.arrayContaining([{
                id:expect.any(Number),
                titulo: title,
                descricao: expect.any(String),
                url: expect.any(String),
                categoriaId: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }]))
        })
        it('search for a video which id is the same as we query', async () => {
            const id = 7
            const res = await request(app).get(`/videos/${id}`)
            expect(res.statusCode).toBe(200)
            expect(res.body).toStrictEqual({
                id:id,
                titulo: expect.any(String),
                descricao: expect.any(String),
                url: expect.any(String),
                categoriaId: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            })
        })
    
    })
    
    describe('delete video ', () => {
        
    
        beforeEach(async () => {
            video = await videosServices.registerCreate({
                titulo: "mock-test",
                descricao:"mock-test",
                url:"https://www.youtube.com/watch?v=CkH8CSVeTRs&t=1075s",
                categoriaId: 1
            })
            
        })
        it('delete video', async () => {
            const res = await request(app)
                            .delete(`/videos/${video.id}`)
                            
            expect(res.statusCode).toBe(200)
            // expect(res.body).toBe({message:`o Video com id ${video.id} foi deletado com sucesso`})
            const searchVideo = await videosServices.getOneRegister(video.id)
            expect(searchVideo).toBe(null)
        })
    })
    describe('post routes videos', () => {
        beforeEach(async () => {
            video = {
                titulo: "mock-test",
                descricao:"mock-test",
                url:"https://www.youtube.com/watch?v=CkH8CSVeTRs&t=1075s"
            }
        })
        it('post a new video', async () => {
            const res = await request(app)
                                .post('/videos')
                                .send(video)
            expect(res.body.id).not.toBe(null)
            expect(res.statusCode).toBe(201)
            const createdVideo = await videosServices.getOneRegister(res.body.id)
            expect(res.body).toStrictEqual({
                id:createdVideo.id,
                categoriaId:1,
                createdAt:res.body.createdAt,
                updatedAt:res.body.updatedAt,
                ...video
            })
            
        })

    })
    
    describe('put in video', () => {
    
        beforeEach(async () => {
            video = await database.Videos.create({
                titulo: "mockTOUPDATE",
                categoriaId:2,
                descricao:"mock-test",
                url:"https://www.youtube.com/watch?v=qy2O_tkUjnM&t=1904s",
            })
            
        })
        it('update in video', async () => {
            console.log(video)
            const res = await request(app)
                              .put(`/videos/${video.id}`)
                              .send({titulo: "updated title"})
            expect(res.statusCode).toBe(200)
            expect(res.body.titulo).not.toBe(video.titulo)
        })
    })

})


