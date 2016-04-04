var fb = require('../fizzbuzz.js')

describe("A fizzbuzz program", function()  {

		it("can count from 1 to 5 and do fizzbuzz replacements", function() {
			expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
			expect(fb.count(11,15)).toBe("buzz 11 fizz 13 14 fizzbuzz");

		});

		it("can take a number and return 'fizz' if it a multiple of 3 and the number otherwise", function(){
			expect(fb.fizzer(3)).toBe('fizz');
			expect(fb.fizzer(27)).toBe('fizz');
			expect(fb.fizzer(5)).toBe(5);
			expect(fb.fizzer(17)).toBe(17);
		});
		it("can take a number and return 'fizz' if it a multiple of 5 and the number otherwise", function(){
			expect(fb.buzzer(5)).toBe('buzz');
			expect(fb.buzzer(45)).toBe('buzz');
			expect(fb.buzzer(5)).toBe(5);
			expect(fb.buzzer(17)).toBe(17);
		});
		it("can take a number and return 'fizz' if it a multiple of 15 and the number otherwise", function(){
			expect(fb.buzzer(15)).toBe('fizzbuzz');
			expect(fb.buzzer(30)).toBe('fizzbuzz');
			expect(fb.buzzer(5)).toBe(5);
			expect(fb.buzzer(17)).toBe(17);
		});
});