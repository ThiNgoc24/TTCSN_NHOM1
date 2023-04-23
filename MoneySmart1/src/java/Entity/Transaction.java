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
public class Transaction {
    protected int transactionID;
    protected int userID;
    protected int amount;
    protected int dateDay;
    protected int dateMonth;
    protected int dateYear;
    protected String category;
    protected String transactionType;
    protected String transactionSource;
    protected String note;

    public Transaction() {
        
    }

    public Transaction(int transactionID, int userID, int amount, int dateDay, int dateMonth, int dateYear, String category, String transactionType, String transactionSource, String note) {
        this.transactionID = transactionID;
        this.userID = userID;
        this.amount = amount;
        this.dateDay = dateDay;
        this.dateMonth = dateMonth;
        this.dateYear = dateYear;
        this.category = category;
        this.transactionType = transactionType;
        this.transactionSource = transactionSource;
        this.note = note;
    }

    public int getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(int transactionID) {
        this.transactionID = transactionID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public int getDateDay() {
        return dateDay;
    }

    public void setDateDay(int dateDay) {
        this.dateDay = dateDay;
    }

    public int getDateMonth() {
        return dateMonth;
    }

    public void setDateMonth(int dateMonth) {
        this.dateMonth = dateMonth;
    }

    public int getDateYear() {
        return dateYear;
    }

    public void setDateYear(int dateYear) {
        this.dateYear = dateYear;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public String getTransactionSource() {
        return transactionSource;
    }

    public void setTransactionSource(String transactionSource) {
        this.transactionSource = transactionSource;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    @Override
    public String toString() {
        return "Transaction{" + "transactionID=" + transactionID + ", userID=" + userID + ", amount=" + amount + ", dateDay=" + dateDay + ", dateMonth=" + dateMonth + ", dateYear=" + dateYear + ", category=" + category + ", transactionType=" + transactionType + ", transactionSource=" + transactionSource + ", note=" + note + '}';
    }
    
    
}
