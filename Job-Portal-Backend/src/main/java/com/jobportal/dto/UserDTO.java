package com.jobportal.dto;

import com.jobportal.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String id;
    @NotBlank(message = "Name is null or blank")
    private String name;
    @NotBlank(message = "Email is null or blank")
    @Email(message = "not a valid email")
    private String email;
    @NotBlank(message = "Password is null or blank")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", message = "Password is not strong or less than 8 charecters")
    private String password;
    private AccountType accountType;

    public User toEntity(){
        return  new User(this.id, this.name, this.email, this.password, this.accountType);
    }
}
