const request = require('supertest')
const app = require('../index.js')
const database = require('../models')
const Services = require('../services/Services')
const videosServices = new Services('Videos')

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
        const title = 'mock-test'
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
        const id = 128
        const res = await request(app).get(`/videos/${id}`)
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({
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
    let video;

    beforeEach(async () => {
        video = await videosServices.registerCreate({
            titulo: "mock-test",
            descricao:"mock-test",
            url:"https://www.youtube.com/watch?v=18Dgf7lb9QA&ab_channel=Rocketseat",
            categoriaId: 5
        })
    })
    it('delete video', async () => {
        const response = await request(server)
                        .delete(`/videos/${video.id}`)
                        .send()
    })
})