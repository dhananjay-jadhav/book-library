import axios from 'axios';

describe('GET /health', () => {
    it('should return a ok status', async () => {
        const res = await axios.get(`/health`);

        expect(res.status).toBe(200);
        expect(res.data).toEqual({ status: 'ok' });
    });
});
