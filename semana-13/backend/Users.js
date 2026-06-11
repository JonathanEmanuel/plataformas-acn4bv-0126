class UsersManager {
    // Atributos
    users = [
        { id:1, name: 'José', email: 'jose@gmail.com'},
        { id:2, name: 'Sofia', email: 'sofia@gmail.com'},
        { id:3, name: 'Lucas', email: 'lucas@gmail.com'}
    ]
    // Methods
    find = (param) => {
       return new Promise( (resolve, reject) =>{
            if( param){
                setTimeout( () => {
                    resolve( this.users )
                }, 2000)
            } else {
                reject('Error de Paramentros');
            }
       })
    }
    findById = (id) => {
        return new Promise( (resolve, reject) =>{
            if( id){
                setTimeout( () => {
                    const user = this.users.find( u => u.id == id);
                    resolve( user )
                }, 1500)
            } else {
                reject('Error de Parametros');
            }
       })
    }
    add = (user) => {
        return new Promise( (resolve, reject) =>{
            if( user){
                setTimeout( () => {
                    const id = this.users.length + 1;
                    user.id = id;
                    this.users.push( user);
                    resolve( user )
                }, 500)
            } else {
                reject('Error de Parametros');
            }
       })
    }
}

export default UsersManager;