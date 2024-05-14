const apiRequest = async (url = '', optionObj = null, errMsg = null) => {
  try{
    const response = await fetch(url, optionObj)
    if(!response.ok) throw Error('Ladda om appen')
  } catch(err) {
        errMsg = err.message
  } finally {
        return err.message
  }
}

export default apiRequest