import { compute } from './compute';


describe('compute', () => {
    it('should return 0 with a negative number', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('should return the number plus 1 with a positive number', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})