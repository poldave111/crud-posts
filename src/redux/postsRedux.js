import shortid from 'shortid';

// selectors
export const getPostById = ({ posts }, postId) => posts.find(post => post.id == postId);
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_CARD = createActionName('DELETE_CARD');
const ADD_POST = createActionName('ADD_POST');

// action creators 
export const deleteCard = payload => ({ type: DELETE_CARD, payload});
export const addPost = payload => ({ type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_CARD: 
            return statePart.filter((post) => post.id !== action.payload);
        case ADD_POST: 
            return [...statePart, action.payload];
        default: 
            return statePart; 
    };
};

export default postsReducer;