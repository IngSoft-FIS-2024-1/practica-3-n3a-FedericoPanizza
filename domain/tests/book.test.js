import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 10000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getWords()).toBe(10000);
  });

  it('return the correct number of words', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de La Selva', 200, 350, 20000)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de La Selva', 'Horacio Quiroga', '350', 20000)).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0, 10000)).toThrow();
  });

  it('check words param is a number', () => {
    expect(() => myBook = new Book('Cuentos de La Selva', 'Horacio Quiroga', 350, '20000')).toThrow();
  });

  it('check words not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 0)).toThrow();
  });

  it('toString()', () => {
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 10000');
  });

  it('Autor Anónimo', () => {
    myBook = new Book('Cuentos de la Selva', '', 350, 10000);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('Words per page', () => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 10000);
    expect(myBook.wordsPerPage()).toBe(10000/350);
  });
});
