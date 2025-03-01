package com.jobportal.service;

import com.jobportal.dto.ApplicantDTO;
import com.jobportal.dto.Application;
import com.jobportal.dto.JobDTO;
import com.jobportal.exceptions.JobPortalException;
import jakarta.validation.Valid;

import java.util.List;

public interface JobService {
    public JobDTO postJob(@Valid JobDTO jobDTO) throws JobPortalException;

    public List<JobDTO> getAllJobs();

    public JobDTO getJob(Long id) throws JobPortalException;

    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException;

    public List<JobDTO> getJobsPostedBy(Long id);

    public void changeAppStatus(Application application) throws JobPortalException;
}
