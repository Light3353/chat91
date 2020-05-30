let rerenderDom = () => {

};
let state = { 
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
};

export const addMessage = (message) => {
    let newMessage = {
        id: 20,
        message: message,
        createAt: '21.05.2020'
    }
    state.messages.push(newMessage);
    state.newMessageText = '';
    rerenderDom(state);
};
export const updateMessageText = (newText) => {
    state.newMessageText = newText;
    rerenderDom(state);
};


export const subscribe = (observer) => {
    rerenderDom = observer;
}


export default state;