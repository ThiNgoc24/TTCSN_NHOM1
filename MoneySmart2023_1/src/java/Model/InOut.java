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
public class InOut {
    private int inOutID;
    private String inOutName;

    public InOut() {
    }

    public InOut(int inOutID, String inOutName) {
        this.inOutID = inOutID;
        this.inOutName = inOutName;
    }

    public int getInOutID() {
        return inOutID;
    }

    public String getInOutName() {
        return inOutName;
    }

    public void setInOutID(int inOutID) {
        this.inOutID = inOutID;
    }

    public void setInOutName(String inOutName) {
        this.inOutName = inOutName;
    }
    
    
}
