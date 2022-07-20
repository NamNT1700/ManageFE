export class UrlDefine {

    static protocol = 'https://'

    static manageDomain = 'localhost:44348/';
    
    static manageAPI = {
        auth:{
            signIn: 'api/UserControllers/Login'
        },
        allwance:{
            addNew: 'api/Allwance/',
            getAll:'api/Allwance/GetAllAllwance',
            delete:'api/Allwance/',
            update:'api/Allwance/',
            getById:'api/Allwance/',
        }
    }
}