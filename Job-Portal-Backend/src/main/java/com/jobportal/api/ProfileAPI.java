package com.jobportal.api;

import com.jobportal.dto.ProfileDto;
import com.jobportal.exceptions.JobPortalException;
import com.jobportal.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/profiles")
public class ProfileAPI {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/get/{id}")
    public ResponseEntity<ProfileDto> getProfile(@PathVariable Long id) throws JobPortalException {
        return new ResponseEntity<>(profileService.getProfile(id), HttpStatus.OK);

    }

    @GetMapping("/getall")
    public ResponseEntity <List<ProfileDto>> getAllProfile() throws JobPortalException {
//        System.out.println("all profiles:");
//        System.out.println(profileService.getAllProfile().size());
        return new ResponseEntity<>(profileService.getAllProfile(), HttpStatus.OK);

    }


    @PutMapping("/update")
    public ResponseEntity<ProfileDto> updateProfile(@RequestBody ProfileDto profileDto) throws JobPortalException {

        return new ResponseEntity<>(profileService.updateProfile(profileDto), HttpStatus.OK);

    }
}
