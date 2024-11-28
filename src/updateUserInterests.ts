// вынес логику логина в отдельную утилиту, сгруппировал запросы в обущий updateUser c возможностью переиспользования

const useLogin = () => {
  const isLogin = isLoggedIn()
  const toLoginPage = navigate(loginPath)
  return {isLogin, toLoginPage}
}

const getHeaders = () =>{
  const token = getToken();

//getHeaders logic
}

const updateUser = async ({body, endPointType}: {body:unknown, endPointType:string} ) => {
  const {isLogin, toLoginPage} = useLogin()
  if (!isLogin) {
    toLoginPage();
    return;
  }


  const headers = getHeaders();

  const response = await fetch(`${domain}/v1/users/${endPointType}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      body
    }),
  }).catch((error) => { throw new Error(error)});

  return response
}


updateUser({body: handle, endPointType: 'handle'})
updateUser({body: interestUUIDs, endPointType: 'interestUUIDs'})

