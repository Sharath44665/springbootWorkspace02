package com.jobportal.repository;

import com.jobportal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepository extends MongoRepository<Job, Long> {
}
