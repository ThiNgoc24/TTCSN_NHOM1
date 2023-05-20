/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

/**
 *
 * @author Than Thien
 */
public class User {
    private int userID;
    private String username;
    private String password;
    private String email;
    private String fulname;
    private String phone;

    public User() {
    }

    public User(int userID, String username, String password, String email, String fulname, String phone) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.email = email;
        this.fulname = fulname;
        this.phone = phone;
    }

    public int getUserID() {
        return userID;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getFulname() {
        return fulname;
    }

    public String getPhone() {
        return phone;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFulname(String fulname) {
        this.fulname = fulname;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    
}
