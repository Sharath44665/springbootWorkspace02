package com.jobportal.service;

import com.jobportal.exceptions.JobPortalException;

public interface ProfileService {
    public Long createProfile(String email) throws JobPortalException;
}
