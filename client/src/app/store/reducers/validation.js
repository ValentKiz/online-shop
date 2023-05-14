export const checkName = (name, data) => {
	if (typeof(name) !== 'string' || name === undefined || name === null) {
		return ['Error', 'Значение не является строкой']
	}
	if (name.trim().length === 0) {
		return ['Error', 'Пустое значение']
	}

	if (data.find(item => item.name.toLowerCase() === name.toLowerCase())) {
		return ['Error', 'Такое название уже существует']
	} 

	return ['Checked', name];
}

export const validEmail = (email) => {
	if (typeof(email) !== 'string' || email === undefined || email === null || email.trim().length === 0) {
		return false
	}

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	
	return EMAIL_REGEXP.test(email)
}