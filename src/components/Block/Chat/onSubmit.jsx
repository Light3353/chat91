import axios from 'axios'

const onSubmit = async (e, dialogId) => {
	e.preventDefault();

	// const value = e.currentTarget.elements[1].value;
	// const response = await axios.post('http://127.0.0.1:4444/messages/'), {
	// 	user_id:[2],
	// 	dialog_id: dialogId,
	// 	body: value
	//
	// }
	console.log(e.currentTarget.elements[1].value)

}

export default onSubmit;