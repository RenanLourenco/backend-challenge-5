const request = require('supertest')
const app = require('../../index.js')
const database = require('../../models')
const Services = require('../../services/Services')
const categoriasServices = new Services('Categorias')

describe('Categorias routes', () => {
    describe('Categorias routes get', () => {
        it('should show all categorias', async () => {
            const res = await request(app).get('/categorias')
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(expect.arrayContaining([{
                id: expect.any(Number),
                titulo: expect.any(String),
                cor: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            }]))
        })
        it(`search for the 'categoria' with the id on the query params`, async () => {
            const id = 2
            const res = await request(app).get(`/categorias/${id}/`)
            expect(res.statusCode).toBe(200)
            expect(res.body).toStrictEqual({
                id: id,
                titulo: expect.any(String),
                cor: expect.any(String),
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            })
        })
        it(`search for a video by category`, async () => {
            const id = 1
            const res = await request(app)
            .get(`/categorias/${id}/videos`)
            expect(res.statusCode).toBe(200)
            expect(res.body).toEqual(expect.arrayContaining([{
                            id:expect.any(Number),
                            titulo: expect.any(String),
                            descricao: expect.any(String),
                            url: expect.any(String),
                            categoriaId: id,
                            createdAt: expect.any(String),
                            updatedAt: expect.any(String)
                        }]))
        })
    })
    describe('Categorias routes put', () => {
        let categoria = null;
        beforeEach(async () => {
             categoria = await categoriasServices.registerCreate({
                titulo:'test-category',
                cor:'red'
            })
        })
        
        it('update category', async () => {
            
            const res = request(app).put(`/categorias/${categoria.id}/`)
                                    .send({"titulo":'test-category-new'})
            console.log(res.body)
            expect(res.statusCode).toBe(200)
            expect(res.body.titulo).not.toBe(categoria.titulo)
        })
    })
})
