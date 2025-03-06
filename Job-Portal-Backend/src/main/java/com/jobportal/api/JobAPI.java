package com.jobportal.api;

import com.jobportal.dto.*;
import com.jobportal.exceptions.JobPortalException;
import com.jobportal.service.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobAPI {
    @Autowired
    private JobService jobService;

    @PostMapping("/post")
    public ResponseEntity<JobDTO> postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException {
        return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<JobDTO>> getProfile() throws JobPortalException {
        return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);

    }

    @GetMapping("/get/{id}")
    public ResponseEntity<JobDTO> getProfile(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);

    }

    @PostMapping("/apply/{id}")
    public ResponseEntity<ResponseDTO> applyJob(@PathVariable Long id, @RequestBody ApplicantDTO applicantDTO) throws JobPortalException {
        jobService.applyJob(id, applicantDTO);
        return new ResponseEntity<>(new ResponseDTO("applied successfully"), HttpStatus.OK);
    }

    @GetMapping("/posted-by/{id}")
    public ResponseEntity<List<JobDTO>> getJobPostedBy(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(jobService.getJobsPostedBy(id), HttpStatus.OK);
    }

    @PostMapping("/change-app-status")
    public ResponseEntity<ResponseDTO> changeAppStatus(@RequestBody Application application) throws JobPortalException {
//        System.out.println("application status"+application.toString());
        jobService.changeAppStatus(application);
        return new ResponseEntity<>(new ResponseDTO("Application status changed successfully"), HttpStatus.OK);
    }

}
