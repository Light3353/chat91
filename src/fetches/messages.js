import axios from 'axios';
const messages = async (action = () => {}, dialogId) => {
	if (dialogId > 0) {
		const respons = await axios.get('http://127.0.0.1:4444/messages?dialog_id=${dialogId}');

		action((state) => {
			return {
				...state,
				data: respons.data
			};
			// console.log(state)
		});
	}
};


export default messages;