import shortid from 'shortid';

// selectors
export const getPostById = ({ posts }, postId) => posts.find(post => post.id == postId);
export const getPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_CARD = createActionName('DELETE_CARD');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators 
export const deleteCard = payload => ({ type: DELETE_CARD, payload});
export const addPost = payload => ({ type: ADD_POST, payload});
export const editPost = payload => ({ type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_CARD: 
            return statePart.filter((post) => post.id !== action.payload);
        case ADD_POST: 
            return [...statePart, action.payload];
        case EDIT_POST: 
            return statePart.map(post => (post.id === action.payload.id ? {...post, ...action.payload } : post));
        default: 
            return statePart; 
    };
};

export default postsReducer;