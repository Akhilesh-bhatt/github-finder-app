import { useReducer, createContext } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //set loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  //clear user from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  //search user from Api
  const searchUsers = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      q: text
    })
    const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  };

  //Get user
  const getUser = async (login) => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      return window.location = '/notfound'
    }
    const data = await response.json();
    dispatch({
      type: 'GET_USER',
      payload: data
    })
  };

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        user: state.user,
        getUser,
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
