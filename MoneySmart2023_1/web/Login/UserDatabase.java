/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Login;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Than Thien
 */
public class UserDatabase {
    private List<User> users;
    
    public UserDatabase() {
        this.users = new ArrayList<>();
    }
    
    
    public void removeUser(User user) {
        this.users.remove(user);
    }
    
    public User getUserByUsername(String username) {
        for (User user : this.users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null;
    }

}
