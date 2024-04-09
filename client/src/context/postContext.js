import { createContext, useContext, useReducer } from "react";

const PostContext = createContext();

const postHandler = (state, action) => {
  switch (action.type) {
    case "BOOKMARK":
      if (state.bookmark.includes(action.payload)) {
        return {
          ...state,
          bookmark: state.bookmark.filter((post) => post !== action.payload),
        };
      } else {
        return {
          ...state,
          bookmark: [...state.bookmark, action.payload],
        };
      }
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postHandler, {
    bookmark: [],
  });
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
