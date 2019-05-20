
export default {
    getToken: (email, password) => {
        return new Promise((resolve,reject) => {
        fetch().then((data) => {
            data.json().then((json)=> {
                sessionStorage.setItem("token", json.data.token);
                resolve(json)
                
            }).catch(function (errors) {
                reject()
                console.error(errors)
        })
        })
    })

},
createUser: (() => {
    return new Promise((resolve,reject) =>{
        fetch().then((data) => {
                    data.json().then((json)=> {
                        resolve(json)
                    }).catch(function (errors) {
                        reject()
                        console.error(errors)
                })
                })
    })
},
getInfo:(token) => {
    return new Promise((resolve, reject) =>{
        fetch().then((data) => {
            data.json().then((json) => {
                resolve(json)
                console.log(json)
            }).catch((errors) => {
                reject()
                console.log(errors)
            })
        })
    })
},
createArticle:(title,content,article_category_id) => {
    return new Promise((resolve,reject) => {
        fetch().then((data) => {
            data.json().then((json) => {
                resolve(json)
            }).catch((errors) => {
                reject()
                console.log(errors)
            })
        })
    })
},
updateUser:(firstname,lastname,birthdate,picture) => {
    return new Promise((resolve,reject) => {
        fetch().then((data) => {
            data.json().then((json) => {
            resolve(json)
            console.log(json)
        }).catch((errors) => {
            reject()
            console.log(errors)
        })
    })
})
},
updatePassword:(password_old,password_new,password_new_verif) => {
    return new Promise((resolve,reject) => {
        fetch().then((data) => {
            data.json().then((json) => {
            resolve(json)
            console.log(json)
        }).catch((errors) => {
            reject()
            console.log(errors)
        })
    })
})
},
articleId: (id) => {
    return new Promise((resolve,reject) => {
        fetch().then((data) => {
            data.json().then((json) => {
            resolve(json)
            console.log(json)
        }).catch((errors) => {
            reject()
            console.log(errors)
        })
    })
})
}
}