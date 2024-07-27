const request = require('supertest');
const app = require('../app');

describe('Statistical Operations', () => {
    test('Mean: should return the correct mean', async () => {
        const response = await request(app).get('/mean?nums=1,3,5,7');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'mean', value: 4 });
    });

    test('Median: should return the correct median', async () => {
        const response = await request(app).get('/median?nums=1,3,5,7');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'median', value: 4 });
    });

    test('Mode: should return the correct mode', async () => {
        const response = await request(app).get('/mode?nums=1,3,3,7');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ operation: 'mode', value: 3 });
    });

    test('Should return 400 for invalid number', async () => {
        const response = await request(app).get('/mean?nums=foo,2,3');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'foo is not a number.' });
    });

    test('Should return 400 for missing nums', async () => {
        const response = await request(app).get('/mean');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: 'nums are required.' });
    });
});
