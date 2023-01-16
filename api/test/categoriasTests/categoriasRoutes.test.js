const request = require('supertest')
const app = require('../../index.js')
const database = require('../../models')
const Services = require('../../services/Services')
const categoriasServices = new Services('Categorias')
const crypto = require("crypto");


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
    describe('Categorias routes put',() => {
        let categoria = null;
        beforeEach(async () => {
            let random = Math.floor(Math.random() * 100);
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
             categoria = await categoriasServices.registerCreate({
                titulo:`test-category-${random}`,
                cor: `${randomColor}`
            })
        })
        
        it('update category', async () => {
            let random = Math.floor(Math.random() * 100);
            const res = await request(app).put(`/categorias/${categoria.id}/`)
                                    .send({"titulo":`test-category-new-${random}`})
            expect(res.statusCode).toBe(200)
            expect(res.body.titulo).not.toBe(categoria.titulo)
        })

        afterEach(async () => {
            await categoriasServices.registerDelete(categoria.id)
        })
    })
    describe('Categorias routes del', () => {
        let categoria = null;
        beforeEach(async () => {
            let random = Math.floor(Math.random() * 100);
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
             categoria = await categoriasServices.registerCreate({
                titulo:`test-category-${random}`,
                cor: `${randomColor}`
            })
        })

        it('delete category', async () => {
            const res = await request(app).del(`/categorias/${categoria.id}/`)
                                        expect(res.statusCode).toBe(200)
            const getDeletedCategoria = await categoriasServices.getOneRegister(categoria.id)
            expect(getDeletedCategoria).toBe(null)
        })
    })
    describe('Categorias routes post', () => {
        var titulo = crypto.randomBytes(20).toString('hex');
        let categoria = {"titulo":titulo,"cor":"cyan"};
        it('should create a new category', async () => {
            const res = await request(app).post(`/categorias/`)
                                          .send(categoria)
            console.log(res)
            expect(res.statusCode).toBe(201)
            expect(res.body).toStrictEqual({
                id:expect.any(Number),
                titulo:titulo,
                cor:categoria.cor,
                createdAt: expect.any(String),
                updatedAt: expect.any(String)
            })
            await categoriasServices.registerDelete(res.body.id)
        })
    })
})
