
const jake = {
  id: "1",
  name: "Jake"
};

const BMO = {
  id: "2",
  name: "BMO BMO BMO BMO BMO BMO BMO BMO BMO BMO BMO BMO BMO BMO"

};

const finn = {
  id: "3",
  name: "Finn"
};

const princess = {
  id: "4",
  name: "Princess bubblegum"
};

export const authors = [jake, BMO, finn, princess];

export const quotes = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: BMO
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: jake
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: jake
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: finn
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: finn
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: princess
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: princess
  },
  {
    id: "8",
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    author: finn
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
    author: finn
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: princess
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: princess
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: princess
  }
];

// So we do not have any clashes with our hardcoded ones
let idCount = quotes.length + 1;

export const getQuotes = (count) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    const custom = {
      ...random,
      id: `G${idCount++}`
    };

    return custom;
  });

export const getAuthors = (count) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = authors[Math.floor(Math.random() * authors.length)];

    const custom = {
      ...random,
      id: `author-${idCount++}`
    };

    return custom;
  });


export const generateQuoteMap = (quoteCount) =>
  authors.reduce(
    (previous, author) => ({
      ...previous,
      // [author.name]: getQuotes(quoteCount / authors.length)
      [author.name]: getQuotes(quoteCount)
    }),
    {}
  );
