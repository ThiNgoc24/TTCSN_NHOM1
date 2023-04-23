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
public class User {
    protected int userID;
    protected String userName;
    protected String passWord;
    protected String hoTenUser;
    protected String emailAddress;
    protected String phoneNumber;
    protected int cashMoney;
    protected int digitalMoney;

    public User() {
        
    }

    public User(int userID, String userName, String passWord, String emailAddress, String phoneNumber, int cashMoney, int digitalMoney) {
        this.userID = userID;
        this.userName = userName;
        this.passWord = passWord;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.cashMoney = cashMoney;
        this.digitalMoney = digitalMoney;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getHoTenUser() {
        return hoTenUser;
    }

    public void setHoTenUser(String hoTenUser) {
        this.hoTenUser = hoTenUser;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getCashMoney() {
        return cashMoney;
    }

    public void setCashMoney(int cashMoney) {
        this.cashMoney = cashMoney;
    }

    public int getDigitalMoney() {
        return digitalMoney;
    }

    public void setDigitalMoney(int digitalMoney) {
        this.digitalMoney = digitalMoney;
    }

    
    @Override
    public String toString() {
        return "User{" + "userID=" + userID + ", userName=" + userName + ", passWord=" + passWord + ", hoTenUser=" + hoTenUser + ", emailAddress=" + emailAddress + ", phoneNumber=" + phoneNumber + '}';
    }
    
}
