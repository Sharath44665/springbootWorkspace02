package com.jobportal.api;

import com.jobportal.dto.JobDTO;
import com.jobportal.dto.ProfileDto;
import com.jobportal.dto.UserDTO;
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
    public ResponseEntity< JobDTO > getProfile(@PathVariable Long id) throws JobPortalException {

        return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);

    }

}
