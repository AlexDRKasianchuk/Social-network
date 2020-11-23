import profileReducer, { addPost,deletePost } from './profileReducer';
import React from 'react';


let state = {
    posts: [{
            id: 1,
            message: 'Hi, how are you?',
            likeCount: '1000'
        },
        {
            id: 2,
            message: "It's mu first post!",
            likeCount: '1400'
        }
    ]
}

it('new post should be added', () => {
    //1. test data
    let action = addPost('text');
   
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
})
it('new post message text', () => {
    //1. test data
    let action = addPost('text');
   
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts[2].message).toBe('text');
})
it('after deleted decrement', () => {
    //1. test data
    let action = deletePost(1);
   
    //2. action
    let newState = profileReducer(state,action);
    //3. expectation
    expect(newState.posts.length).toBe(state.posts.length-1);
})