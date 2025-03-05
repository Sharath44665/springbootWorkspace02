package com.jobportal.service;

import com.jobportal.dto.ProfileDto;
import com.jobportal.exceptions.JobPortalException;

import java.util.List;

public interface ProfileService {
    public Long createProfile(String email, String name) throws JobPortalException;
    public ProfileDto getProfile(Long id) throws JobPortalException;
    public ProfileDto updateProfile(ProfileDto profileDto) throws JobPortalException;

    public List<ProfileDto> getAllProfile();
}
