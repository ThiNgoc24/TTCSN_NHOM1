/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.util.Date;

/**
 *
 * @author Than Thien
 */
public class Transaction {
    private int trasactionID;
    private int userID;
    private int inOutID;
    private int walletID;
    private int categoryID;
    private double amount;
    private Date date ;
    private String note;

    public Transaction() {
    }

    public Transaction(int trasactionID, int inOutID, int walletID, int categoryID, double amount, Date date, String note) {
        this.trasactionID = trasactionID;
        this.inOutID = inOutID;
        this.walletID = walletID;
        this.categoryID = categoryID;
        this.amount = amount;
        this.date = date;
        this.note = note;
    }

    public int getTrasactionID() {
        return trasactionID;
    }

    public int getUserID() {
        return userID;
    }

    public int getInOutID() {
        return inOutID;
    }

    public int getWalletID() {
        return walletID;
    }

    public int getCategoryID() {
        return categoryID;
    }

    public double getAmount() {
        return amount;
    }

    public Date getDate() {
        return date;
    }

    public String getNote() {
        return note;
    }

    public void setTrasactionID(int trasactionID) {
        this.trasactionID = trasactionID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public void setInOutID(int inOutID) {
        this.inOutID = inOutID;
    }

    public void setWalletID(int walletID) {
        this.walletID = walletID;
    }

    public void setCategoryID(int categoryID) {
        this.categoryID = categoryID;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setNote(String note) {
        this.note = note;
    }
    
    
}
