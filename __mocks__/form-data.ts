const formDataMock = {
  name: 'John Doe',
  phone: '47911245449',
  email: 'john@example.com',
}

const formDataMockWMask = {
  name: 'John Doe',
  phone: '(47) [9]1124-5449',
  email: 'john@example.com',
}

const formDataMockEmpty = {
  name: '',
  phone: '',
  email: '',
}

export { formDataMock, formDataMockEmpty, formDataMockWMask }
