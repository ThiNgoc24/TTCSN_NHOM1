<<<<<<< HEAD
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Login;

import java.util.Scanner;

/**
 *
 * @author Than Thien
 */
public class Main {
    public static void main(String[] args) {
        UserDatabase userDatabase = new UserDatabase();
        userDatabase.addUser(new User("alice", "password123"));
        userDatabase.addUser(new User("bob", "password456"));
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();
        
        User user = userDatabase.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password.");
        }
    }
}
=======
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Login;

import java.util.Scanner;

/**
 *
 * @author Than Thien
 */
public class Main {
    public static void main(String[] args) {
        UserDatabase userDatabase = new UserDatabase();
        userDatabase.addUser(new User("alice", "password123"));
        userDatabase.addUser(new User("bob", "password456"));
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();
        
        User user = userDatabase.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password.");
        }
    }
}
>>>>>>> dcc3391bc08cdd102a0ba0e9906e54d35073d0c3
