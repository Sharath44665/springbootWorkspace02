package com.jobportal.utility;

public class Data {
    public static String getMsgBody(String otp, String name){
        String htmlContent = "<html>"
                + "<head>"
                + "<style>"
                + "body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }"
                + ".container { max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }"
                + "h1 { color: #333; }"
                + "p { font-size: 16px; color: #555; }"
                + ".otp { font-size: 24px; font-weight: bold; color: #007BFF; padding: 10px; border: 2px solid #007BFF; border-radius: 5px; display: inline-block; }"
                + ".footer { margin-top: 20px; font-size: 14px; color: #777; }"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<div class='container'>"
                + "<p>Hello "+name+",</p>"
                + "<h1>Your OTP Code for Job portal (ijobs)</h1>"
                + "<p>Your OTP code is:</p>"
                + "<div class='otp'>" + otp + "</div>"
                + "<p>Please use this code to complete your verification.</p>"
                + "<p>Thank you!</p>"
                + "<div class='footer'>"
                + "<p>If you did not request this code, please ignore this email.</p>"
                + "</div>"
                + "</div>"
                + "</body>"
                + "</html>";
        return htmlContent;
    }
}
