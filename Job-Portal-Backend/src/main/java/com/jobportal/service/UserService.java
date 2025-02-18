package com.jobportal.service;

import com.jobportal.dto.LoginDTO;
import com.jobportal.dto.UserDTO;
import com.jobportal.exceptions.JobPortalException;
import jakarta.validation.Valid;

public interface UserService {
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    public UserDTO loginUser( LoginDTO loginDTO) throws JobPortalException;

    public Boolean sendOtp(String email) throws Exception;
}
