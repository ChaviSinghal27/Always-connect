import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.—Dale Carnegie",
    contentImg:
      "https://th.bing.com/th/id/R.a6e37015d850f6b753c0e32eb39748b4?rik=cT28FVokRb0hRw&riu=http%3a%2f%2fwww.prettydesigns.com%2fwp-content%2fuploads%2f2015%2f04%2fMotivational-Quotes-1.jpg&ehk=TCij%2fwX7WKuehdylJE%2bw95TFfzft453HKe3y5cJmomk%3d&risl=&pid=ImgRaw&r=0",
    likes: 3,
    userId: 1,

    comments: [
      {
        _id: uuid(),
        username: "@chaviSinghal",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "@adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),

    content:
      "Life isn't about finding yourself. Life is about creating yourself.—George Bernard Shaw",
    likes: 4,

    userId: 1,
    comments: [
      {
        _id: uuid(),
        username: "@ChaviSinghal",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "@adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),

    content: "To conquer fear is the beginning of wisdom.—Bertrand Russell",
    likes: 5,
    userId: 2,
    comments: [
      {
        _id: uuid(),
        username: "@ChaviSinghal",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "@adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Motivation is what gets you started. Habit is what keeps you going.—Jim Ryun",
    likes: 6,
    userId: 2,
    comments: [
      {
        _id: uuid(),
        username: "@ChaviSinghal",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "@adarshbalika",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
