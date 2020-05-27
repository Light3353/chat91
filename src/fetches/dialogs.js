import axios from 'axios';


const dialogs = async (action = () => {}) => {

	const respons = await axios.get('http://127.0.0.1:4444/dialogs')
	action((state) => {
		return {
			...state,
			data: respons.data
		};
	});
	// console.log(data)
};


export default dialogs;