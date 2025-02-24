package com.jobportal.service;

import com.jobportal.dto.JobDTO;
import com.jobportal.exceptions.JobPortalException;
import jakarta.validation.Valid;

import java.util.List;

public interface JobService {
    public JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;

    public List<JobDTO> getAllJobs();

    public JobDTO getJob(Long id) throws JobPortalException;
}
