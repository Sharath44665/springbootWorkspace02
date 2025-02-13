package com.jobportal.dto;

import com.jobportal.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String password;
    private AccountType accountType;

    public User toEntity(){
        return  new User(this.id, this.name, this.email, this.password, this.accountType);
    }
}
