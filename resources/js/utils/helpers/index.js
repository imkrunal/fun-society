export const handleFormErrors = (errors, setFieldError) => {
  console.log('errors', errors)
  if (!errors) {
    return null
  }
  let finalErrors
  for (const err in errors) {
    console.log('err', err)
    finalErrors = setFieldError(errors[err][0])
  }
  return finalErrors
}
