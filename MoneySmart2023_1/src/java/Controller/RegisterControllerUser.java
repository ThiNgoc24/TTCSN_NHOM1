/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import static Controller.LoginControllerUser.docFileUser;
import static Controller.LoginControllerUser.listUsers;
import Model.User;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
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
public class RegisterControllerUser extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    public static void luuDataUsertoFile(User a){
        Gson gs = new Gson();
        listUsers.add(a);
        String jsonData = gs.toJson(listUsers);
        System.out.println(jsonData);
        try {
            FileWriter writer = new FileWriter("C:\\Users\\Than Thien\\Documents\\NetBeansProjects\\MoneySmart2023_1\\src\\java\\Data\\User.json");
            writer.write(jsonData);
            writer.close();
            System.out.println("Đã lưu dữ liệu vào file categories.json");
        } catch (IOException e) {
            System.out.println("Lỗi: " + e.getMessage());
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
            out.println("<title>Servlet RegisterControllerUser</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet RegisterControllerUser at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
            docFileUser();
            for(User a:listUsers){
                out.println(a.getUsername());
            }
            String uIn = request.getParameter("userIn");
            String pIn = request.getParameter("passIn");
            String emailInput = request.getParameter("emailIn");
            String htInput = request.getParameter("hovatenIn");
            String sdtInput = request.getParameter("sdtIn");
            //String pInCf = request.getParameter("passincf");
            //out.println(uIn);
            //out.println(pIn);
            //out.println(pInCf);
            boolean flag = false;
            boolean flaguser = true;
            for(User a:listUsers){
                String uu = a.getUsername();
                if (uIn.equals(uu)){
                    flaguser = false;
                    break;
                }
            }
            if (flaguser){
                //response.sendRedirect("SuccessRegister.html");
                User a = new User(0, uIn, pIn, emailInput, htInput, sdtInput);
                luuDataUsertoFile(a);
                response.sendRedirect("SuccessRegister.html");
            }
            else{
                response.sendRedirect("DangKy.html");
            }
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
