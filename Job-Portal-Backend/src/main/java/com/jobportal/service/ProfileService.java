package com.jobportal.service;

import com.jobportal.dto.ProfileDto;
import com.jobportal.exceptions.JobPortalException;

public interface ProfileService {
    public Long createProfile(String email) throws JobPortalException;
    public ProfileDto getProfile(Long id) throws JobPortalException;
    public ProfileDto updateProfile(ProfileDto profileDto) throws JobPortalException;
}
