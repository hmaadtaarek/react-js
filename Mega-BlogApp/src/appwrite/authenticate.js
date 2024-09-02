import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // will return login method
                return this.login (email, password)
            }
            else {
                return userAccount
            }

        }
        catch (error) {
            console.log("appwrite service :: createAccount :: error:", error)
        }
    }

    async login({email, password}){
        try {
          await this.account.createEmailSession(email, password); 
        } 
        catch (error) {
            console.log("appwrite service :: login :: error:", error)
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error:", error)
        }
        return null
    }
    
    async logout() {
        try {
            await this.account.deleteSessions()
        } 
        catch (error) {
            console.log("appwrite service :: logout :: error:", error)    
        }
    }
}

const authService = new AuthService()
export default authService