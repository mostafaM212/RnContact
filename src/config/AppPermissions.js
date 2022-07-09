import {check, PERMISSIONS, RESULTS , request} from 'react-native-permissions';

const AppPermissions = {
    PERMISSIONS.ANDROID.CALL_PHONE,
    PERMISSIONS.ANDROID.READ_CONTACTS,
    PERMISSIONS.ANDROID.READ_PHONE_NUMBERS,
    PERMISSIONS.ANDROID.WRITE_CONTACTS,
    PERMISSIONS.ANDROID.WRITE_CALL_LOG
}

class AppPermissions {

    checkPermission = async (type): Promise<boolean> => {
        
        try {
            const result = check[AppPermissions[type]]
            if (result === RESULTS.GRANTED) {
                this.requestPermission(type)
                return true
            }
        } catch (error) {
            return false
        }
    }

    requestPermission = async (permissions): Promise<boolean> => {
        
        try {
            const result = await request(permissions)
            return result === RESULTS.GRANTED
        } catch (error) {
            return false
        }
    }
}

const Permissions = new AppPermissions()


export { Permissions, AppPermissions };