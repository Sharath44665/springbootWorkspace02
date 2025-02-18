package com.jobportal.repository;

import com.jobportal.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OTPRepository extends MongoRepository<OTP, String> {
}
