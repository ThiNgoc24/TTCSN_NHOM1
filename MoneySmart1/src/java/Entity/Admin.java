/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Entity;

/**
 *
 * @author Than Thien
 */
public class Admin {
    protected int adminID;
    protected String adminName;
    protected String passWord;
    protected String hoTenAdmin;

    public Admin() {
        
    }

    public Admin(int adminID, String adminName, String passWord, String hoTenAdmin) {
        this.adminID = adminID;
        this.adminName = adminName;
        this.passWord = passWord;
        this.hoTenAdmin = hoTenAdmin;
    }

    public int getAdminID() {
        return adminID;
    }

    public void setAdminID(int adminID) {
        this.adminID = adminID;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getHoTenAdmin() {
        return hoTenAdmin;
    }

    public void setHoTenAdmin(String hoTenAdmin) {
        this.hoTenAdmin = hoTenAdmin;
    }

    @Override
    public String toString() {
        return "Admin{" + "adminID=" + adminID + ", adminName=" + adminName + ", passWord=" + passWord + ", hoTenAdmin=" + hoTenAdmin + '}';
    }
    
}