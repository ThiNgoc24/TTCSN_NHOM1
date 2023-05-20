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
public class Wallet {
    private int walletID;
    private int userID;
    private String walletName;
    private double balance;

    public Wallet() {
    }

    public Wallet(int walletID, int userID, String walletName, double balance) {
        this.walletID = walletID;
        this.userID = userID;
        this.walletName = walletName;
        this.balance = balance;
    }

    public int getWalletID() {
        return walletID;
    }

    public int getUserID() {
        return userID;
    }

    public String getWalletName() {
        return walletName;
    }

    public double getBalance() {
        return balance;
    }

    public void setWalletID(int walletID) {
        this.walletID = walletID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setWalletName(String walletName) {
        this.walletName = walletName;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
    
    
}
