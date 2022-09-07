import {
  calculateAverage,
  sortDateRecent,
  sortDateAncient,
  GenreFilters,
  searchFilters,
} from "./../src/data.js";
import data from "./../src/data/ghibli/ghibli.js";

describe("Genre filter", () => {
  it("Is a function", () => {
    expect(typeof GenreFilters).toBe("function");
  });

  it("Return an array", () => {
    expect(Array.isArray(GenreFilters("fantasy", data.films))).toBe(true);
  });

  it("Is filtering by genre", () => {
    let mockedGenre = "romance";
    const result = GenreFilters(mockedGenre, data.films);
    expect(
      result.every((movie) => movie.genre.toLowerCase().includes(mockedGenre))
    ).toBe(true);
  });
});

describe("Search Filter", () => {
  it("Is a function", () => {
    expect(typeof searchFilters).toBe("function");
  });

  it("Return an array", () => {
    expect(Array.isArray(searchFilters("totoro", data.films))).toBe(true);
  });

  it("Is filtering by text", () => {
    let mockedInput = "totoro";
    const result = searchFilters(mockedInput, data.films);
    expect(
      result.every((movie) => movie.title.toLowerCase().includes(mockedInput))
    ).toBe(true);
  });
});

describe("Sort films by date", () => {
  it("Is a function", () => {
    expect(typeof sortDateRecent).toBe("function");
  });

  it("Is a function", () => {
    expect(typeof sortDateAncient).toBe("function");
  });

  it("Films are sorted ascending by date ", () => {
    const sortedFilms = sortDateAncient(data.films);
    const isSorted = sortedFilms.every((movie, i, array) => {
      if (array[i + 1]) {
        return Number(movie.release_date) > Number(array[i + 1].release_date);
      }
      return true;
    });
    expect(isSorted).toBe(true);
  });
});

describe("Calculate characters by films", () => {
  it("Is a function", () => {
    expect(typeof calculateAverage).toBe("function");
  });
});
