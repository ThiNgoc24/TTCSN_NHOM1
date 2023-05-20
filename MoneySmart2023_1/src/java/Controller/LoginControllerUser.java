/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Model.User;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Than Thien
 */
public class LoginControllerUser extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    public static ArrayList<User> listUsers = new ArrayList<>();
    public static void docFileUser(){
        Gson gs = new Gson();
        java.lang.reflect.Type objType = new TypeToken<ArrayList<User>>(){}.getType();
        try{
            FileReader reader = new FileReader("C:\\Users\\Than Thien\\Documents\\NetBeansProjects\\MoneySmart2023_1\\src\\java\\Data\\User.json");
            listUsers = gs.fromJson(reader, objType);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(LoginControllerUser.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet LoginControllerUser</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet LoginControllerUser at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
            docFileUser();
            String u = request.getParameter("Username");
            String p = request.getParameter("Password");
            boolean matchFound = false;
            for(User a:listUsers){
                String uu = a.getUsername();
                String pp = a.getPassword();
                if (u.equals(uu) && p.equals(pp)){
                    //response.sendRedirect("Transaction.html");
                    //out.print(a.getUsername());
                    matchFound = true;
                    break;
                }
                //out.println(a.getUsername());
                //out.println(a.getPassword());
                //out.println(uu);
                //out.println(pp);
            }
            if (matchFound){
                response.sendRedirect("Transaction.html");
                //response.sendRedirect(request.getContextPath() + "/DangNhap.html");
            }
            else{
                response.sendRedirect("DangNhap.html");
            }
            //out.println(u);
            //out.println(p);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
