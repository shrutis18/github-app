export const mapStateToProps = (state) => {
console.log('state', state)
return {
    users: state.users
}
}

export const mapDispatchToProps = (dispatch) => {
return {
     fetchUsers:  (e,name) => {
     e.preventDefault()
     console.log('name',name)
                return fetch(`https://api.github.com/search/users?q=${name}`)
                    .then(response => response.json())
                    .then(json =>  {
                    console.log('userDate', json.items)
                    let users = json.items
                    dispatch({type: 'FETCH_USERS',
                              users
                              })
                   })
            }
        }
}
