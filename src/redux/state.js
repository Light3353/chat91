
const store = {
    _state: { 
        dialogs: [
            {
                id: 1,
                name: 'Michael',
                soname: 'Rodrigez',
                src: './static/media/user2.19254017.jpg',
                text: 'Online'
            },
            {
                id: 2,
                name: 'Kira',
                soname: 'Anderson',
                src: './static/media/user1.7ec1dec1.jpeg',
                text: 'Online'
            }
        ],
        messages: [],
        newMessageText: '', 
    },
    _rerenderDom() {
    },
    getState() { 
        return  this._state;
    },
    subscribe(observer) {
        this._rerenderDom = observer;
    },


    // addMessage() {
    //     let newMessage = {
    //         id: 20,
    //         message: this._state.message,
    //         createAt: '21.05.2020'
    //     }
    //     this._state.messages.push(newMessage);
    //     this._state.newMessageText = '';
    //     this._rerenderDom(this._state);
    // },
    // updateMessageText(newText) {
    //     this._state.newMessageText = newText;
    //     this._rerenderDom(this._state);
    // },
    dispatch(action) { 
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 20,
                message: this._state.newMessageText,
                createAt: '21.05.2020'
            }
            this._state.messages.push(newMessage);
            this._state.newMessageText = '';
            this._rerenderDom(this._state);
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.newMessageText = action.newText;
            this._rerenderDom(this._state);
        }
    }
};
// let state = { 
//     dialogs: [
//         {
//             id: 1,
//             name: 'Michael',
//             soname: 'Rodrigez',
//             src: './static/media/user2.19254017.jpg',
//             text: 'Online'
//         },
//         {
//             id: 2,
//             name: 'Kira',
//             soname: 'Anderson',
//             src: './static/media/user1.7ec1dec1.jpeg',
//             text: 'Online'
//         }
//     ],
//     messages: [],
//     newMessageText: '',
// };

// export const addMessage = (message) => {
//     let newMessage = {
//         id: 20,
//         message: message,
//         createAt: '21.05.2020'
//     }
//     state.messages.push(newMessage);
//     state.newMessageText = '';
//     rerenderDom(state);
// };
// export const updateMessageText = (newText) => {
//     state.newMessageText = newText;
//     rerenderDom(state);
// };


// export const subscribe = (observer) => {
//     rerenderDom = observer;
// }


export default store;