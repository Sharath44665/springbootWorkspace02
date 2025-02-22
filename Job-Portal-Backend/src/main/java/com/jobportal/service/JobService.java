package com.jobportal.service;

import com.jobportal.dto.JobDTO;
import com.jobportal.exceptions.JobPortalException;
import jakarta.validation.Valid;

public interface JobService {
    public JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;
}
