import { greet } from './greet';

describe('Greet', () => {
    it ('should include the name in the output', () => {
        let results = greet('jon');
        expect(results).toContain('jon')
    })
})